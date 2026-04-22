# MarketWriter — Self-Healing Email Marketing

## Overview
Intelligent email marketing platform that learns from knowledge base, responses, and signal events. Self-healing architecture.

## Stack
- **Backend:** TypeScript / Node.js
- **Mail Server:** Mailcow (self-hosted, dedicated IPs)
- **Campaign Engine:** MailWizz (native Campaign API)
- **Job Queue:** BullMQ for automated daily maintenance
- **Compliance:** CAN-SPAM via unified signal event handling

## Key Capabilities
- MailWizz integration via native Campaign API
- Mailcow with dedicated IP reputation management per domain
- Automated bounce/complaint signal processing
- Self-healing campaign logic from KB and response analysis
- Multi-domain sending with isolated IP reputation

## Status
Built but unpaid ($0). IP is Anwesh's. Can be redeployed independently.

## Repo
Part of `anwesh-personal/Refinery` (axiom-data-hub + refinery-backend workers)

---

*Last updated: 2026-04-19*
