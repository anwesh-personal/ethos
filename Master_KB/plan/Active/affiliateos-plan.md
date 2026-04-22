# 🚀 AffiliateOS — Super Affiliate Command Center
## End-to-End SaaS Product Plan

**Status:** 🟢 ACTIVE  
**Created:** April 22, 2026  
**Owner:** Anwesh  
**Codename:** AffiliateOS

---

> **One-liner:** The all-in-one platform where super affiliates build pages, track everything, split-test relentlessly, and scale campaigns — without stitching together 7 different tools.

---

## 1. THE PROBLEM (Why This Needs to Exist)

Super affiliates currently Frankenstein their stack together:

| Need | Current Tool | Cost | Pain |
|---|---|---|---|
| Landing pages | ClickFunnels / Unbounce | $97-299/mo | Bloated, slow, not built for affiliates |
| Link tracking | Voluum / RedTrack | $149-499/mo | Separate system, no page context |
| Heatmaps | Hotjar / Microsoft Clarity | $0-99/mo | Yet another tool, no conversion correlation |
| Split testing | Google Optimize (dead) / VWO | $0-199/mo | Complex setup, no native tracking |
| Analytics | GA4 + custom dashboards | $0+ | Data scattered, no single source of truth |
| Funnel building | Multiple tools stitched together | — | Fragile, breaks constantly |

**Total stack cost: $400-1,200/mo across 5-7 tools**  
**Total integration headache: Immeasurable**

### The Gap Nobody Has Filled

- **ClickFunnels** = page builder pretending to be a marketing tool (bloated, slow)
- **Voluum/RedTrack** = tracking-only, no page building, no behavioral analytics
- **Unbounce/Instapage** = enterprise CRO tools, not built for affiliate workflows
- **Binom/Keitaro** = self-hosted trackers, technical setup, no heatmaps
- **Heyflow** = closest competitor but focused on lead gen forms, not affiliate funnels

**Nobody has built the unified system where page building, tracking, split testing, heatmaps, and analytics live in ONE product with affiliate-first workflows.**

---

## 2. THE VISION

### AffiliateOS is the operating system for performance marketers.

Build your pages. Track every click. See where users hesitate. Split-test everything. Scale what works. Kill what doesn't. All in one place.

### Core Value Props
1. **Build** — Drag-and-drop page builder with affiliate-optimized templates (pre-landers, quiz funnels, bridge pages, review pages)
2. **Track** — First-party tracking with server-side events, UTM management, and cross-device attribution
3. **Analyze** — Built-in heatmaps, scroll maps, session recordings, and funnel analytics — correlated directly to conversion data
4. **Test** — Native A/B/n testing with automatic statistical significance detection and auto-winner selection
5. **Scale** — Traffic distribution rules, geo-targeting, device routing, and API integrations with every major ad platform

### Who Is This For?
- **Super affiliates** running $5K-100K+/mo in paid traffic
- **Media buyers** managing multiple offers across networks
- **Performance marketing agencies** running campaigns for clients
- **Insurance/finance affiliates** (our beachhead — we understand this vertical deeply)

---

## 3. COMPETITIVE POSITIONING

### Our Moat
1. **Unified data model** — Page behavior + click tracking + conversion data in one system = insights nobody else can surface
2. **Affiliate-first UX** — Every template, every workflow designed for affiliate funnels, not generic marketing
3. **Speed** — Pages load in <1s (critical for paid traffic ROI), built on edge CDN
4. **First-party tracking** — As third-party cookies die, our server-side tracking becomes essential
5. **Insurance vertical expertise** — Deep domain knowledge = better templates, better compliance, better results

---

## 4. PRODUCT ARCHITECTURE

### High-Level System Design

```
┌─────────────────────────────────────────────────────────────────┐
│                        AffiliateOS                              │
├─────────────┬──────────────┬──────────────┬────────────────────┤
│  Page       │  Tracking    │  Analytics   │  Testing           │
│  Builder    │  Engine      │  Engine      │  Engine            │
│             │              │              │                    │
│ • Drag/drop │ • Click      │ • Heatmaps   │ • A/B/n splits     │
│ • Templates │   tracking   │ • Scroll     │ • Auto-winner      │
│ • Quiz      │ • Postbacks  │   maps       │ • Multi-variate    │
│   builder   │ • Server-    │ • Session    │ • Traffic          │
│ • Custom    │   side       │   replay     │   distribution     │
│   code      │   events     │ • Funnel     │ • Geo/device       │
│ • Mobile    │ • Cross-     │   analytics  │   routing          │
│   preview   │   device     │ • Revenue    │ • Automated        │
│             │   attribution│   attribution│   rules            │
├─────────────┴──────────────┴──────────────┴────────────────────┤
│                     Shared Infrastructure                       │
│                                                                 │
│  • Edge CDN (Cloudflare Workers / Vercel Edge)                 │
│  • ClickHouse (analytics DB — you already run this)            │
│  • PostgreSQL (user data, page configs, test configs)          │
│  • Redis (real-time tracking, session management)              │
│  • S3/MinIO (asset storage — you already run this)             │
│  • BullMQ (async job processing)                               │
├─────────────────────────────────────────────────────────────────┤
│                     Integrations Layer                          │
│                                                                 │
│  • Meta CAPI   • Google Ads API   • TikTok Events API          │
│  • Affiliate networks (Impact, CJ, ClickBank, MaxBounty)      │
│  • Zapier / Webhooks                                           │
│  • Custom postback URLs                                        │
└─────────────────────────────────────────────────────────────────┘
```

### Tech Stack

| Layer | Technology | Rationale |
|---|---|---|
| **Frontend** | Next.js 16 (App Router) | SSR for page builder, RSC for dashboard, familiar stack |
| **Page Renderer** | Edge Workers (CF/Vercel) | Sub-100ms page loads globally, critical for paid traffic |
| **Backend API** | Node.js + tRPC or Hono | Type-safe API layer, fast development |
| **Analytics DB** | ClickHouse | Columnar DB for billions of events, you already operate this |
| **App DB** | PostgreSQL (Neon/Supabase) | Relational data: users, pages, tests, configs |
| **Cache/Queue** | Redis + BullMQ | Real-time tracking, job processing |
| **Storage** | MinIO (self-hosted S3) | You already run this, asset/image storage |
| **Auth** | Clerk or NextAuth | Fast auth implementation, team management |
| **Payments** | Stripe | SaaS billing, usage-based pricing |
| **CDN** | Cloudflare | Edge caching for published pages |

---

*Continued in Part 2: Feature Specification & Data Model →*
