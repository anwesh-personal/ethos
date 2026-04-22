# 🚀 AffiliateOS — Revised Plan (v2)
## The Super Affiliate Weapon System

**Status:** 🟢 ACTIVE  
**Revised:** April 22, 2026  
**Owner:** Anwesh  

---

> **One-liner:** Build pages, clone competitors, cloak links, split-test everything, track every conversion — one platform, zero duct-tape.

---

## 1. WHAT THIS ACTUALLY IS

A multi-tenant SaaS where performance marketers get:

1. **Link Engine** — URL shortener + tracker + cloaker + rotator + geo/device router with pixel firing
2. **Page Engine** — Drag-drop builder + page cloner (rip any URL) + battle-tested templates
3. **Test Engine** — A/B/n testing baked into everything — pages, links, funnels
4. **Intel Engine** — Heatmaps, scroll maps, session replay, funnel analytics — all first-party, no Hotjar needed

**Not** a CRM. **Not** an email tool. **Not** a general marketing platform. This is a **weapon system** for people who buy traffic and need to convert it.

---

## 2. CORE MODULE #1: LINK ENGINE (The Backbone)

This is the #1 differentiator. Every other tool does links OR pages OR tracking. We do them as one unified system.

### 2.1 URL Shortener
- Custom domains (`trk.yourbrand.com/go/offer-a`)
- Custom slugs or auto-generated short codes
- Bulk link creation (CSV import)
- Link grouping by campaign/offer/network
- QR code generation

### 2.2 Link Cloaking
- **Full URL masking** — destination URL never visible to user or browser
- **Referrer stripping** — clean referrer headers so networks can't see your pre-lander
- **Meta tag spoofing** — custom OG tags for link previews (Facebook/Slack/Discord)
- **Redirect types:** 301, 302, 307, meta refresh, JavaScript redirect, double-meta
- **iframe cloaking** — display your domain in address bar while loading destination

### 2.3 Smart Routing
- **Geo-targeting** — route by country, state, city (MaxMind GeoIP2)
- **Device targeting** — mobile vs desktop vs tablet, iOS vs Android
- **OS/browser detection** — serve different destinations by browser
- **Day-parting** — different URLs at different times/days
- **Weighted rotation** — split traffic 50/30/20 across multiple destinations
- **Sequential rotation** — round-robin through destinations
- **Frequency capping** — limit clicks per unique user per time window
- **Fallback URLs** — if primary destination is down, auto-failover

### 2.4 Bot & Fraud Filtering
- **Bot detection** — filter known bots, crawlers, scrapers (IAB list)
- **VPN/proxy detection** — flag or block VPN/datacenter traffic
- **Click fraud detection** — rapid-fire clicks, pattern matching
- **Safe page routing** — show a clean "safe" page to bots/compliance reviewers, real page to humans
- **User-agent analysis** — block/allow specific user agents
- **IP blacklisting/whitelisting** — manual and automatic

### 2.5 Pixel & Postback Integration
- **Pixel firing on click** — fire Meta/Google/TikTok pixels on link click (server-side)
- **Postback URLs** — receive conversion data from affiliate networks
- **S2S (server-to-server)** — fire conversions to ad platforms via CAPI
- **Sub-ID passthrough** — forward click IDs to networks, match on conversion
- **Multi-pixel** — fire multiple pixels per link (retargeting + conversion)
- **Custom webhook** — POST click/conversion data to any endpoint

### 2.6 Analytics (Per-Link)
- Real-time click counter
- Unique vs repeat visitors
- Geographic distribution
- Device/OS/browser breakdown
- Referrer analysis
- Conversion rate + revenue (when postback fires)
- Time-series graphs (hourly/daily/weekly)

---

## 3. CORE MODULE #2: PAGE ENGINE

### 3.1 Page Builder
- **Block-based editor** — NOT Figma-style pixel drag. Structured blocks that guarantee responsive output:
  - Hero (headline + sub + CTA)
  - Text block (WYSIWYG)
  - Image / Video embed
  - CTA button (with Link Engine integration)
  - Testimonial carousel
  - Comparison table
  - FAQ accordion
  - Countdown timer
  - Form / lead capture
  - Quiz block (branching logic)
  - Custom HTML/CSS/JS injection
- **Mobile preview** — instant toggle, side-by-side
- **Global styles** — colors, fonts, button styles, spacing
- **Dynamic Text Replacement (DTR)** — swap any text based on UTM params, geo, device
- **One-click publish** to custom domain or subdomain
- **Version history** — rollback any change
- **Page-level settings** — custom meta tags, favicon, tracking codes, redirect rules

### 3.2 Page Cloner (Lander Ripper)
- **Paste URL → get editable page** — scrape HTML/CSS/images, import into builder
- **Asset downloading** — images, fonts, CSS files pulled and stored on our CDN
- **Script stripping** — auto-remove original tracking codes, analytics, third-party scripts
- **Editable output** — cloned page becomes a regular builder page (blocks + custom code)
- **Compliance warning** — remind users to modify content, not copy verbatim
- **Batch clone** — clone multiple pages from a domain

### 3.3 Template Library
Pre-built, battle-tested, high-converting templates for:

| Category | Templates |
|---|---|
| **Insurance** | Pre-lander, quiz funnel, comparison, review |
| **Finance** | Credit card, loan, investing pre-lander |
| **Health/Wellness** | Supplement review, fitness quiz funnel |
| **E-commerce** | Product review, comparison table, countdown |
| **Lead Gen** | Generic quiz, survey, calculator |
| **Advertorials** | News-style, blog-style, native ad style |

Each template includes:
- Mobile-optimized design
- Pre-wired CTA buttons (connected to Link Engine)
- A/B test variants built in
- Recommended copy frameworks

### 3.4 Quiz Builder (Sub-module)
- Multiple question types (single choice, multi, slider, image choice)
- Branching logic (if X → go to Y)
- Progress bar with step counter
- Personalized results page based on answers
- Lead capture at configurable step
- Skip logic for optional questions
- Quiz completion events → fire pixels

---

*Continued in Part 2: Test Engine, Intel Engine, Architecture →*
