# junkthatcar.pro

Junk car removal service — Seattle metro area. We buy junk cars for cash, any condition, free towing.

**Stack:** Next.js 16 · TypeScript · Tailwind v4 · HubSpot CRM

## Quick Start

```bash
npm install
cp .env.example .env.local   # fill in HubSpot credentials
npm run dev                   # http://localhost:3000
```

## Project Structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── page.tsx          # Home — hero, how it works, testimonials
│   ├── get-quote/        # Quote form → HubSpot
│   ├── service-areas/    # 15-city grid
│   ├── reviews/          # Customer reviews
│   ├── about/            # Company story + stats
│   ├── faq/              # 10 questions, JSON-LD schema
│   ├── privacy/          # Privacy policy
│   ├── terms/            # Terms of service
│   ├── api/quote/        # POST handler → HubSpot forms API
│   ├── sitemap.ts        # Dynamic sitemap
│   └── robots.ts         # Robots config
├── components/
│   ├── Header.tsx        # Responsive nav + phone CTA
│   ├── Footer.tsx        # 4-column grid
│   ├── QuoteForm.tsx     # react-hook-form + zod
│   └── JsonLd.tsx        # LocalBusiness schema
├── lib/
│   ├── constants.ts      # SITE, SERVICE_AREAS, VEHICLE_CONDITIONS
│   └── hubspot.ts        # HubSpot forms API submission
└── types/
    └── index.ts          # TypeScript interfaces
```

## Environment Variables

```
HUBSPOT_PORTAL_ID=       # HubSpot portal ID
HUBSPOT_FORM_GUID=       # HubSpot form GUID
NEXT_PUBLIC_SITE_URL=    # https://junkthatcar.pro
NEXT_PUBLIC_PHONE=        # Business phone
NEXT_PUBLIC_EMAIL=        # Contact email
```

## ToDo — Client Feedback

- [ ] Client requested changes (TBD — Mario has details)
- [ ] AWS deployment (planning with GUPPI)
- [ ] Replace placeholder phone number
- [ ] OG image generation
- [ ] Favicon / app icons

## Deployment

See vault: [[Cloud Configurations Playbooks/AWS/DEPLOYMENT|AWS Deployment Playbook]].