# AffiliateOS — Part 3: Execution & Business

---

## 9. DEVELOPMENT PHASES

### Phase 1: Link Engine MVP (Weeks 1-3)
The link engine is the core. Ship this first — it's independently valuable.

| Task | Est. |
|---|---|
| Supabase project setup + auth + RLS policies | 2d |
| Organization/team data model + CRUD | 1d |
| Link creation UI (slug, destination, cloaking mode) | 2d |
| Hono redirect worker on VPS (sub-5ms redirects) | 3d |
| GeoIP integration (MaxMind on VPS) | 1d |
| Device/OS/browser detection on redirect | 1d |
| Click logging to Supabase (async, batched) | 2d |
| Bot detection + filtering (IAB list + heuristics) | 2d |
| Link analytics dashboard (clicks, uniques, geo, device) | 3d |
| Custom domain setup flow (DNS verification + SSL) | 2d |

**Ship:** Users can create cloaked tracking links with geo/device routing and see analytics.

---

### Phase 2: Page Engine (Weeks 4-7)
Build the page system on top of the link engine.

| Task | Est. |
|---|---|
| Block-based page editor (React, JSON schema) | 5d |
| Core blocks: Hero, Text, CTA, Image, Video, FAQ, Timer | 4d |
| Page publish flow (deploy to Cloudflare Workers/Pages) | 3d |
| Custom domain binding for pages | 2d |
| Page cloner — Puppeteer scraping service on VPS | 3d |
| Asset extraction + CDN storage (Supabase Storage) | 2d |
| Script stripping + cleanup pipeline | 1d |
| Mobile preview + responsive output | 2d |
| Template library (5 templates to start) | 3d |
| Dynamic Text Replacement (UTM-based) | 1d |

**Ship:** Users can build pages, clone competitor pages, publish to custom domains.

---

### Phase 3: Test Engine + Postbacks (Weeks 8-10)
Make everything testable. Add conversion tracking.

| Task | Est. |
|---|---|
| A/B test creation flow (page variants) | 2d |
| Traffic splitting in redirect engine | 2d |
| Statistical significance calculator (Bayesian) | 2d |
| Auto-winner with confidence threshold | 1d |
| Postback URL handler (receive network conversions) | 2d |
| S2S pixel firing (Meta CAPI, Google, TikTok) | 3d |
| Revenue attribution (click → conversion → revenue) | 2d |
| Link rotation with weighted splits | 1d |
| Test dashboard with winner/loser indicators | 2d |

**Ship:** Full A/B testing + conversion tracking + revenue attribution.

---

### Phase 4: Intel Engine (Weeks 11-14)
Behavioral analytics layer.

| Task | Est. |
|---|---|
| Heatmap JS collector SDK (mouse, click, scroll) | 3d |
| Heatmap rendering overlay on page screenshots | 3d |
| Scroll depth visualization | 1d |
| Session recording with rrweb | 3d |
| Session playback UI with speed controls | 2d |
| Rage-click detection | 1d |
| Funnel visualization (step drop-off) | 3d |
| Quiz builder (branching logic, results, lead capture) | 4d |
| Segmented heatmaps (converter vs bouncer) | 2d |

**Ship:** Heatmaps, session replay, funnel analytics, quiz funnels.

---

### Phase 5: Polish + Launch (Weeks 15-18)
Production hardening, billing, onboarding.

| Task | Est. |
|---|---|
| Stripe billing integration (plans + usage metering) | 3d |
| Usage tracking + plan limit enforcement | 2d |
| Onboarding wizard (create first link → first page) | 2d |
| Safe page routing (compliance reviewer detection) | 2d |
| Team management (invite, roles, permissions) | 2d |
| Bulk operations (import links, export data) | 2d |
| Performance audit + load testing redirect engine | 2d |
| Security audit (RLS verification, input sanitization) | 2d |
| 5 more templates (10 total) | 3d |
| Docs + help center | 2d |

**Ship:** Production SaaS ready for paying customers.

---

## 10. PRICING

| Plan | Price | Links | Pages | Clicks/mo | Heatmaps | Tests |
|---|---|---|---|---|---|---|
| **Starter** | $49/mo | 50 | 5 | 100K | ✓ | 3 |
| **Pro** | $149/mo | 500 | 25 | 1M | ✓ | Unlimited |
| **Scale** | $349/mo | Unlimited | Unlimited | 5M | ✓ | Unlimited |
| **Agency** | $699/mo | Unlimited | Unlimited | 20M | ✓ | Unlimited + sub-accounts |

**Overage:** $3 per additional 100K clicks  
**Annual:** 20% discount  
**Trial:** 14 days free, Pro features, no CC required

### Why This Pricing Wins
- **Starter** undercuts ClickMagick ($79/mo for just links)
- **Pro** replaces Voluum ($149) + Unbounce ($99) + Hotjar ($39) = $287/mo → we charge $149
- **Scale** replaces full enterprise stack for serious buyers
- **Agency** adds sub-accounts (manage client campaigns separately)

---

## 11. GTM

### Launch Sequence
1. **Weeks 1-10:** Build. Dogfood on your own Ethos insurance campaigns
2. **Week 11:** Private alpha — 10 trusted affiliates
3. **Week 15:** Invite-only beta — 50 affiliates
4. **Week 18:** Public launch

### Channels
| Channel | Play |
|---|---|
| **STM Forum** | Launch thread, document the build journey |
| **AffiliateFix** | Tutorial content, free tier promotion |
| **YouTube** | "I built a Voluum killer" series |
| **Reddit** | r/affiliatemarketing, r/PPC, r/Entrepreneur |
| **Product Hunt** | Launch day with demo video |
| **Twitter/X** | Build in public, weekly updates |
| **Cold outreach** | DM top affiliates showing their pages cloned in 10 seconds |

### Killer Demo
The "10-second clone" demo: paste a competitor's landing page URL → get a fully editable version in your builder → add your tracking link → publish → live in 30 seconds. This sells itself.

---

## 12. COMPETITIVE ADVANTAGE SUMMARY

| Feature | ClickFunnels | Voluum | Unbounce | Hotjar | **AffiliateOS** |
|---|---|---|---|---|---|
| Page builder | ✓ (bloated) | ✗ | ✓ | ✗ | ✓ (fast, affiliate-first) |
| Page cloner | ✗ | ✗ | ✗ | ✗ | **✓** |
| Link cloaking | ✗ | Basic | ✗ | ✗ | **✓ (advanced)** |
| Geo/device routing | ✗ | ✓ | ✗ | ✗ | **✓** |
| Bot filtering | ✗ | Basic | ✗ | ✗ | **✓ (advanced)** |
| A/B testing | ✗ | Basic | ✓ | ✗ | **✓** |
| Heatmaps | ✗ | ✗ | ✗ | ✓ | **✓** |
| Session replay | ✗ | ✗ | ✗ | ✓ | **✓** |
| Conversion tracking | ✗ | ✓ | ✗ | ✗ | **✓** |
| CAPI (Meta/Google) | ✗ | Partial | ✗ | ✗ | **✓** |
| Price | $297 | $149 | $99 | $39 | **$149 (all-in-one)** |

---

## 13. SUCCESS CRITERIA (6-Month)

- [ ] Link redirect engine handling 1M+ clicks/day at <5ms p99
- [ ] Page cloner successfully ripping 95%+ of target pages
- [ ] 50+ paying customers
- [ ] $7K+ MRR
- [ ] Own Ethos campaigns running profitably through the platform
- [ ] Template library with 10+ battle-tested templates
- [ ] Zero data leaks between tenants (RLS audit clean)

---

**The weapon is designed. Phase 1 starts when you say go.**
