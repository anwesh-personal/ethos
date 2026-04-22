# AffiliateOS — Part 2: Test Engine, Intel Engine, Architecture

---

## 4. CORE MODULE #3: TEST ENGINE

### 4.1 Split Testing
- **Page-level A/B/n** — route traffic to different page variants via Link Engine
- **Element-level tests** — swap individual blocks (headlines, CTAs, images) within same page
- **Link-level rotation** — test multiple offer URLs through same tracking link
- **Custom traffic splits** — 50/50, 70/30, or any ratio
- **Sequential testing** — auto-promote winners, keep testing challengers

### 4.2 Intelligence
- **Auto statistical significance** — Bayesian calculation, faster than frequentist for low traffic
- **Auto-winner promotion** — optionally route 100% to winner once confidence threshold hit
- **Revenue optimization** — optimize for revenue-per-click, not just conversion rate
- **Confidence indicators** — visual "not enough data" / "trending" / "winner" / "loser" states
- **Alerts** — Slack/email notification when test reaches significance or a variant tanks

### 4.3 Traffic Rules (Advanced)
- **Geo-split** — test different pages by country/region
- **Device-split** — different mobile vs desktop experiences
- **Source-split** — different pages for Facebook vs Google vs TikTok traffic
- **Time-based rules** — day-parting for different variants
- **Funnel-level tests** — test entire funnel sequences (pre-lander A + quiz A vs pre-lander B + quiz B)

---

## 5. CORE MODULE #4: INTEL ENGINE

### 5.1 Heatmaps
- Click heatmaps overlaid on page screenshot
- Scroll depth maps (gradient overlay showing where users stop)
- Move maps (mouse movement tracking)
- Segmented heatmaps — filter by source, device, converter vs non-converter

### 5.2 Session Replay
- Record individual user sessions (mouse movement, clicks, scrolling)
- Playback with speed controls
- Tag sessions by outcome (converted / bounced / abandoned quiz)
- Rage-click detection (highlight frustration points)
- Filter replays by source, device, geo, conversion status

### 5.3 Funnel Analytics
- Visual funnel with step-by-step drop-off rates
- Comparison: source A funnel vs source B funnel
- Time-in-step analysis (how long users spend at each step)
- Revenue attribution per funnel step

### 5.4 Dashboard
- Real-time: live visitors, clicks, conversions right now
- Today vs yesterday comparison
- Custom date ranges with time-series graphs
- Pivot by any dimension: source, geo, device, page, offer, link
- Saved report views + scheduled email exports

---

## 6. MULTI-TENANT ARCHITECTURE

### 6.1 Tenancy Model
- **Multi-tenant with single-tenant data isolation**
- Each tenant (user/org) gets isolated:
  - Supabase Row Level Security (RLS) on all tables
  - Separate storage buckets per tenant (page assets, cloned pages)
  - Isolated tracking namespaces (no cross-tenant data leakage)
- Shared infrastructure (same DB, same API, same edge workers)
- Tenant-level rate limiting and usage metering

### 6.2 Custom Domains
- Each tenant can connect unlimited custom domains
- Domains used for both page hosting AND link cloaking
- Auto-SSL via Cloudflare for SaaS or Let's Encrypt
- DNS verification flow in dashboard
- Wildcard subdomains supported (`anything.yourdomain.com`)

---

## 7. TECH STACK (Clean Slate)

| Layer | Tech | Why |
|---|---|---|
| **Frontend** | Next.js 16 (App Router) | SSR dashboard, RSC for data views, familiar |
| **Backend API** | Next.js API routes + Hono (on VPS) | API routes for dashboard, Hono workers for link redirect engine |
| **Database** | Supabase (PostgreSQL) | Auth, RLS multi-tenancy, real-time subscriptions, storage |
| **Link Redirect** | Hono on VPS (your bare metal) | Sub-5ms redirects, geo/device detection, bot filtering |
| **Page Hosting** | Cloudflare Workers / Pages | Edge-rendered published pages, <100ms globally |
| **Page Cloner** | Puppeteer on VPS | Headless Chrome scraping, asset downloading |
| **Heatmap Collector** | Lightweight JS SDK → Supabase | Batched mouse/click/scroll events |
| **Session Replay** | rrweb (open source) | Industry-standard DOM recording, stored in Supabase storage |
| **Asset Storage** | Supabase Storage (S3-compatible) | Page images, cloned assets, uploaded files |
| **Auth** | Supabase Auth | Built-in, RLS-native, social logins, team invites |
| **Payments** | Stripe | Subscriptions, usage-based billing, customer portal |
| **CDN** | Cloudflare | Edge caching for published pages and tracking scripts |
| **GeoIP** | MaxMind GeoIP2 (on VPS) | Country/state/city detection for routing |
| **Queue** | Supabase Edge Functions + pg_cron | Async jobs: postback processing, report generation |

### Why This Stack Works
- **Supabase handles 80%** — auth, database, storage, real-time, RLS isolation
- **VPS handles the hot path** — link redirects need sub-5ms, can't go through Supabase for that
- **Cloudflare handles the edge** — published pages served from 300+ POPs globally
- **No ClickHouse, no Redis, no BullMQ** — unnecessary complexity at this stage
- **If we outgrow Supabase** — migrate to self-hosted PostgreSQL on VPS (Supabase is just Postgres)

---

## 8. DATA MODEL

### Core Tables (Supabase/PostgreSQL)

```sql
-- Tenants
organizations (id, name, owner_id, plan, domain_limit, created_at)
members (id, org_id, user_id, role, invited_at)

-- Link Engine
links (id, org_id, slug, destination_url, cloaking_mode, 
       geo_rules, device_rules, rotation_rules, 
       pixel_ids, safe_page_url, status, created_at)
link_clicks (id, link_id, org_id, visitor_id, 
             ip_hash, country, region, city,
             device, os, browser, referrer,
             is_bot, is_unique, revenue, converted_at,
             created_at)

-- Page Engine  
pages (id, org_id, title, slug, domain_id, status,
       content_json, settings_json, version, created_at)
page_versions (id, page_id, content_json, created_by, created_at)
templates (id, category, name, content_json, preview_url)

-- Test Engine
tests (id, org_id, page_id, type, status,
       variants_json, traffic_split, 
       winner_id, significance, created_at)

-- Intel Engine
page_events (id, page_id, org_id, session_id, visitor_id,
             event_type, x, y, scroll_pct, element_id,
             viewport_w, viewport_h, created_at)
sessions (id, page_id, org_id, visitor_id, 
          recording_url, duration, converted, created_at)

-- Domains
domains (id, org_id, domain, verified, ssl_status, 
         use_for_links, use_for_pages, created_at)

-- Offers
offers (id, org_id, name, network, url, postback_url,
        default_payout, created_at)
```

### Partitioning Strategy
- `link_clicks` — partition by month (high volume)
- `page_events` — partition by month (very high volume)
- `sessions` — partition by month
- Everything else — standard tables with indexes

### RLS Policy Pattern
```sql
-- Every table follows this pattern:
ALTER TABLE links ENABLE ROW LEVEL SECURITY;
CREATE POLICY "tenant_isolation" ON links
  USING (org_id = (SELECT org_id FROM members WHERE user_id = auth.uid()));
```

---

*Continued in Part 3: Development Phases + Execution →*
