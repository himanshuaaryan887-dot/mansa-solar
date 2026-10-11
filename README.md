# MANSA SOLAR ENERGY — GitHub / Vercel starter

A premium, responsive Next.js website scaffold based on the supplied MANSA SOLAR ENERGY brief. Design direction: deep energy blue, white, renewable green, Manrope/DM Sans, high-contrast solar imagery, responsive navigation and conversion-focused pages.

## What is included

- Next.js App Router + TypeScript.
- Homepage, shared navigation/footer, mobile navigation and configurable WhatsApp floating action.
- Product category catalog with working search and sort, category filtering, product enquiry details, and availability/pricing clearly marked for confirmation.
- Requested informational routes: services, installation, maintenance, site inspection, residential and commercial/industrial solar, benefits, brands, about, projects, reviews, warranty/support, contact, FAQ and legal information.
- Interactive solar calculator: capacity estimate, generation range, indicative cost range, modeled savings, simple payback, 5/10-year simple totals and optional EMI estimate. Inputs update results immediately.
- Contact/quote form with client-side validation and a server endpoint. The endpoint stores submissions in Supabase when configured; it does **not** pretend to accept enquiries when no storage destination exists.
- Google Maps embed attempt plus the exact supplied Google Maps link as a fallback.
- Metadata defaults, generated sitemap and robots rules, favicon, Supabase schema, `.env.example`, and this deployment guide.

## Run locally

Requires Node.js 20.9+ (Node 22 recommended).

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npm run start
```

Deploy by pushing this folder to a GitHub repository and importing that repository into Vercel. Framework preset: Next.js. Build command: `npm run build`; output directory should remain the Next.js default. Set production environment variables in Vercel and redeploy after environment changes.

## Configure before accepting live enquiries

1. Create a Supabase project.
2. Run `supabase/schema.sql` in the Supabase SQL editor.
3. Set `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` in `.env.local` and Vercel project settings. The service-role key is server-only; never rename it to a `NEXT_PUBLIC_` variable or commit it.
4. Test a quote submission and verify the row appears in `public.enquiries`. If the destination is not configured, the API deliberately returns an error rather than displaying a false success.
5. For production, add rate limiting / bot protection and appropriate operational alerting before public lead campaigns.

## Business settings that need confirmation

- `NEXT_PUBLIC_WHATSAPP_NUMBER`: international number in digits only (example format `919876543210`); leave blank until the actual business number is confirmed. Floating WhatsApp is hidden if blank.
- `NEXT_PUBLIC_BUSINESS_PHONE`, `NEXT_PUBLIC_BUSINESS_EMAIL`: optional verified public contact details; not currently displayed as invented values.
- `NEXT_PUBLIC_SITE_URL`: deployed canonical domain, used for metadata and sitemap.
- Store hours, delivery and service areas, actual brands stocked, authorized status, current product SKUs, model specifications, prices, inventory, warranty documents, approved special offers and return policy.
- Confirm the supplied Google Maps URL resolves to the exact business listing; the embedded map uses an address query and may require adjustment after verification.
- Confirm the address formatting and business name with the owner.

## Media and imagery

The current hero and section imagery uses remote Unsplash image URLs as illustrative visual assets. Review their licensing/usage conditions and replace with business-owned or properly licensed assets for production. No completed project gallery, real customer review, actual product stock, price or dealer relationship has been invented.

The savings-estimator promotion uses `public/images/indian-rooftop-solar-homes.jpg`, a photograph of rooftop solar panels on homes in Mehsana, Gujarat, India, by Nizil Shah. It is shared under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Rooftop_Solar_panels_on_homes_in_Mehsana,_Gujarat,_India_(69514).jpg). The image is displayed with a CSS crop; the downloaded image itself is unchanged.

To add the requested cinematic hero video, place a licensed, compressed MP4 at `public/media/solar-hero.mp4`, create a poster at `public/media/solar-hero-poster.webp`, and implement/test the video layer with the poster retained as a reliable fallback. No video file was included with the supplied brief, so the homepage currently uses a photographic hero rather than claiming video playback is ready.

## Calculator model and limits

The model is intentionally transparent and simplified:
- If monthly kWh is supplied, it takes priority; otherwise consumption is estimated as bill ÷ tariff.
- System sizing uses 4 kWh/day per installed kW and 80 sq ft/kW as editable starting assumptions.
- Generation range uses 3–5 kWh per installed kW per day.
- Estimated self-consumption varies by selected backup preference (70–78%).
- Cost range is an editable illustrative assumption of ₹55,000–₹75,000 per kW, not a verified business price list.
- Savings use estimated offset kWh × entered tariff; simple 5/10-year totals exclude degradation, tariff escalation, maintenance, replacement, financing and export compensation.
- Payback is an indicative simple model, not a guaranteed financial outcome.

Before production use, have a qualified solar professional validate these assumptions for the relevant Haryana service area and the company's actual pricing model. A site assessment and customized quotation remain necessary.

## Admin dashboard status

A secure admin dashboard is **not included** in this initial implementation. The database schema includes products, enquiries, reviews and projects to support a later authenticated admin panel. Do not expose the service-role key or public enquiry records. If adding Supabase Auth/admin functionality, implement server-side authorization and least-privilege RLS policies first.

## Test checklist

- [ ] `npm run build` succeeds in the deployment environment.
- [ ] Test mobile menu at 360, 390, 430 and 768 px.
- [ ] Check all navigation links and all 26 brief routes.
- [ ] Search and category filters change displayed product results.
- [ ] Verify product availability labels remain “Contact to Confirm Availability” until inventory is connected.
- [ ] Test calculator with zero bill, zero roof area, custom consumption and no consumption input.
- [ ] Independently validate system-size, cost, savings, payback and EMI calculations.
- [ ] Configure Supabase, submit a test enquiry and verify database storage.
- [ ] Confirm the Maps pin and address with the owner.
- [ ] Configure and test the actual WhatsApp number.
- [ ] Replace illustrative images and add/test licensed hero video and poster fallback.
- [ ] Validate legal pages, business claims, warranties, prices, products and service coverage with the owner.
- [ ] Run Lighthouse and test keyboard navigation, reduced motion, image loading and console/network errors.

## Current limitations — do not misrepresent these as complete

- No real product inventory, verified SKU/specification/pricing data or checkout/payment flow is connected.
- Enquiry submission requires Supabase environment variables and database setup.
- No admin dashboard, email notifications, CRM integration, analytics IDs, Meta Pixel, Google Places API integration, live reviews or file uploads are configured.
- Actual business phone, WhatsApp, email, opening hours, service area, approved product brands, verified claims and warranty policy are not supplied.
- No video asset was included; the homepage is image-led until a licensed local video is provided.
- This repository has not been claimed as production-ready until dependency installation, production build and live integration tests have been run.

## Brand credit

The footer uses the exact requested text: **Built and Designed by Himanshu Aryann**.
