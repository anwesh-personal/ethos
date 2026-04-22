# AffiliateOS — Part 2: Feature Specification & Business Model

---

## 5. CORE FEATURE MODULES (Detailed)

### Module 1: Page Builder Engine

**Purpose:** Let affiliates build high-converting pages without code — pre-landers, quiz funnels, bridge pages, review pages — all optimized for paid traffic speed.

#### 5.1.1 Page Types (Templates)
| Type | Description | Use Case |
|---|---|---|
| **Pre-Lander / Advertorial** | Long-form editorial page that warms cold traffic | Facebook/TikTok → Pre-lander → Offer |
| **Quiz Funnel** | Multi-step qualifying quiz with branching logic | Segment users before sending to offer |
| **Bridge Page** | Simple headline + CTA page matching ad creative | Google Ads → Bridge → Offer |
| **Review/Comparison** | Product review or comparison table page | SEO/content → Review → Offer |
| **Thank You / Pixel Fire** | Post-conversion page for pixel firing | Track conversions, fire postbacks |
| **Countdown/Urgency** | Scarcity page with timer elements | Re-engagement, limited offers |

#### 5.1.2 Builder Features
- **Block-based editor** (not pixel-perfect drag-drop — too complex, too slow)
  - Hero blocks, text blocks, image blocks, CTA blocks, quiz blocks, testimonial blocks, FAQ accordion, countdown timer, video embed
- **Mobile preview** toggle (instant, side-by-side)
- **Custom CSS/JS injection** for power users
- **Dynamic Text Replacement (DTR)** — swap headline text based on UTM parameters
- **Global styles** — brand colors, fonts, button styles applied across all pages
- **One-click publish** to custom domain or subdomain
- **Page cloning** — duplicate any page instantly for split testing
- **Version history** — rollback to any previous version

#### 5.1.3 Quiz Builder (Sub-module)
- **Question types:** Single choice, multiple choice, slider, text input, image choice
- **Branching logic:** "If answer = X, go to question Y"
- **Progress bar** with step counter
- **Result screens** based on quiz answers (personalized output)
- **Lead capture** at any step (email, phone)
- **Skip logic** for optional questions

### Module 2: Tracking Engine

**Purpose:** Replace Voluum/RedTrack. First-party, server-side click and conversion tracking with full attribution.

#### 5.2.1 Click Tracking
- **Tracking links** with custom slugs (`yourtrack.co/go/insurance-offer`)
- **Click ID generation** (unique per visitor)
- **UTM parameter capture** — source, medium, campaign, content, term
- **Referrer capture** — where the click came from
- **Device/browser/OS/geo** fingerprinting
- **IP anonymization** for GDPR compliance
- **Sub-ID passthrough** to affiliate networks

#### 5.2.2 Conversion Tracking
- **Postback URLs** — receive conversions from affiliate networks
- **Server-to-server (S2S)** tracking — no client-side dependency
- **Conversion pixel** for pages you control
- **Revenue capture** — pass revenue amount with conversions
- **Multi-event tracking** — lead, sale, upsell, recurring
- **Cross-device attribution** via first-party cookies + fingerprinting

#### 5.2.3 Server-Side Event API (CAPI)
- **Meta Conversions API** — fire events server-side to Facebook
- **Google Ads Enhanced Conversions** — match conversions to Google clicks
- **TikTok Events API** — server-side conversion tracking
- **Custom webhook** — POST conversion data to any endpoint

### Module 3: Analytics Engine

**Purpose:** Replace Hotjar + GA4. Behavioral analytics AND performance analytics in one unified view.

#### 5.3.1 Behavioral Analytics
- **Heatmaps** — click heatmaps overlaid on actual page screenshots
- **Scroll maps** — see exactly where users stop scrolling
- **Session recordings** — replay individual user sessions
- **Rage click detection** — identify frustration points
- **Form analytics** — field-by-field completion rates

#### 5.3.2 Performance Analytics
- **Real-time dashboard** — live visitors, clicks, conversions
- **Funnel visualization** — step-by-step drop-off analysis
- **Revenue attribution** — which traffic source → which page → which offer → how much revenue
- **Time-series graphs** — hourly/daily/weekly trends
- **Cohort analysis** — compare performance across time periods

#### 5.3.3 Custom Reports
- **Pivot tables** — slice data by any dimension (source, geo, device, page, offer)
- **Saved views** — bookmark frequently-used report configurations
- **Scheduled exports** — email CSV/PDF reports on a schedule
- **Team sharing** — share specific reports with team members

### Module 4: Split Testing Engine

**Purpose:** Replace VWO/Optimizely. Native A/B/n testing built into the page builder and tracking system.

#### 5.4.1 Test Types
- **Page-level A/B test** — route traffic to different page variants
- **Element-level test** — test individual blocks (headlines, CTAs, images)
- **Traffic distribution** — custom % splits (50/50, 70/30, etc.)
- **Multi-variate testing** — test combinations of elements
- **Sequential testing** — test new variants against proven winners

#### 5.4.2 Intelligence Layer
- **Automatic statistical significance** — "Variant B is winning with 95% confidence"
- **Auto-winner** — optionally auto-route 100% traffic to winner after significance
- **Bayesian analysis** — faster results than frequentist testing for low traffic
- **Revenue-based optimization** — optimize for revenue, not just conversion rate
- **Alerts** — notify when a test reaches significance or when a variant tanks

#### 5.4.3 Traffic Rules
- **Geo-routing** — show different pages by country/state
- **Device routing** — mobile vs desktop variants
- **Day-parting** — different pages at different times
- **Frequency capping** — limit exposure per user
- **Weighted rotation** — distribute traffic by custom weights

---

## 6. DATA MODEL (Core Entities)

```
┌──────────┐     ┌──────────┐     ┌──────────────┐
│  User    │────▶│  Project │────▶│  Page        │
│          │     │ (workspace│    │  • content   │
│ • email  │     │  /team)   │    │  • variants  │
│ • plan   │     │           │    │  • settings  │
│ • billing│     │           │    │  • domain    │
└──────────┘     └──────────┘    └──────────────┘
                      │                  │
                      ▼                  ▼
              ┌──────────────┐   ┌──────────────┐
              │  Offer       │   │  Test        │
              │              │   │              │
              │ • name       │   │ • variants[] │
              │ • aff_url    │   │ • split %    │
              │ • network    │   │ • status     │
              │ • postback   │   │ • winner     │
              └──────────────┘   └──────────────┘
                      │                  │
                      ▼                  ▼
              ┌──────────────┐   ┌──────────────┐
              │  Click       │   │  Event       │
              │  (ClickHouse)│   │  (ClickHouse)│
              │              │   │              │
              │ • click_id   │   │ • event_type │
              │ • visitor_id │   │ • coords(x,y)│
              │ • source     │   │ • scroll_pct │
              │ • geo/device │   │ • element_id │
              │ • page_id    │   │ • session_id │
              │ • offer_id   │   │ • page_id    │
              │ • revenue    │   │ • timestamp  │
              └──────────────┘   └──────────────┘
```

### ClickHouse Tables (High-Volume)
- `clicks` — every tracking link click (billions of rows)
- `page_events` — heatmap/scroll/interaction events (massive volume)
- `conversions` — postback conversions with revenue
- `sessions` — session recordings metadata

### PostgreSQL Tables (Relational)
- `users`, `projects`, `team_members`
- `pages`, `page_versions`, `page_blocks`
- `offers`, `tracking_links`
- `tests`, `test_variants`
- `domains`, `dns_configs`
- `billing`, `subscriptions`, `usage`

---

## 7. PRICING MODEL

### Tiered SaaS Pricing

| Plan | Price | Pages | Visitors/mo | Heatmaps | Tests | Team |
|---|---|---|---|---|---|---|
| **Starter** | $49/mo | 10 | 50K | ✓ | 3 active | 1 user |
| **Pro** | $149/mo | 50 | 500K | ✓ | Unlimited | 3 users |
| **Scale** | $349/mo | Unlimited | 2M | ✓ | Unlimited | 10 users |
| **Agency** | $699/mo | Unlimited | 10M | ✓ | Unlimited | Unlimited |

### Pricing Strategy
- **Anchor against fragmented stack cost** — "Replace $400-1,200/mo in tools for $149/mo"
- **Usage-based overage** — $5 per additional 100K visitors beyond plan limit
- **Annual discount** — 20% off for annual billing
- **Free trial** — 14 days, no credit card required, Pro features

### Revenue Projections (Conservative)

| Month | Customers | MRR | ARR |
|---|---|---|---|
| 6 | 50 | $7,450 | $89K |
| 12 | 200 | $29,800 | $358K |
| 18 | 500 | $74,500 | $894K |
| 24 | 1,000 | $149,000 | $1.79M |

*Assumes average revenue per user (ARPU) of $149/mo*

---

*Continued in Part 3: Development Phases & Execution Roadmap →*
