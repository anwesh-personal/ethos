# Refinery Nexus — B2B Data Intelligence Platform

## Overview
Enterprise-grade data ingestion, processing, verification, and delivery platform.

## Stack
- **Frontend:** React + TypeScript (Vite)
- **Backend:** Node.js + TypeScript (Express)
- **Analytics DB:** ClickHouse (columnar, bare metal)
- **App DB:** Supabase (Postgres + Auth)
- **Object Storage:** MinIO (self-hosted, S3-compatible)
- **Process Manager:** PM2
- **Reverse Proxy:** Nginx + CloudPanel

## What It Does
- Ingests millions of leads from S3-compatible sources (CSV/Parquet)
- Parses, deduplicates, maps columns to universal schema
- Stores in ClickHouse for high-speed analytical queries
- Verifies emails via custom SMTP/DNSBL/domain auth engine
- Segments audiences with dynamic query builder
- Pushes to MailWizz for campaign delivery
- AI Boardroom with 5+ agents for data analysis

## Status
Codebase complete. Server wiped (April 19, 2026). Can be redeployed from repo.

## Repo
`anwesh-personal/Refinery` — branch `main`

---

*Last updated: 2026-04-19*
