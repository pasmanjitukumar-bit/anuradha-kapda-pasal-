# Anuradha Kapda Pasal

Next.js App Router, React, Tailwind CSS v4, Lucide icons. Responsive English/Nepali store catalogue with static product pages and WhatsApp ordering.

## Run

Node 20.9 or later. `npm install`, then `npm run dev`. Open http://127.0.0.1:3000. `npm run build` generates deployable `out/`. `npm test` checks catalogue filtering and contact/order links.

## Owner editing

- `lib/business.mjs`: all contact information, exact Google Maps URL, opening hours, social links and site URL. Empty hours/social URLs intentionally display honest placeholders. Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS domain before building for sitemap and canonical metadata.
- `lib/products.mjs`: clearly marked demo catalogue, bilingual names/descriptions, prices, original prices, discount, images, sizes, colours, stock confirmation, new/featured/seasonal flags. Replace stock photos and demo prices with actual stock before sharing publicly. The two demo gallery views use the same source photo; replace with distinct real product views.
- `components/Store.jsx`: bilingual presentation, review placeholders and seasonal offer copy. Reviews are explicitly examples, never actual testimonials. No confirmed sale terms are invented.
- `app/globals.css`: responsive design and Tailwind entry point.

## Inquiry behaviour

The form validates required name/phone and optional email using native validation, then prepares the completed inquiry in WhatsApp. The customer must press Send in WhatsApp. It does not silently save data, send emails or promise delivery. Preferred contact method is included for the owner to use when replying. No backend or payment collection is included.

## Deployment

Upload `out/` to a static host that supports directory indexes. Product routes are `/products/<id>/`. For Next hosting, remove output export if server features are added. Confirm opening hours and exact map pin first. Sitemap is emitted only when a real domain is configured. Demo products deliberately omit Product offers schema to avoid indexing fictional prices as real stock. Local Business structured data is present.

Photos are remotely loaded from Unsplash. They are style references, not photographs of actual store stock. For reliable slower-network operation, replace with locally optimized WebP/AVIF photos in `public/`.

## Upload changes to GitHub (PowerShell)

Always run Git inside this website folder. Do not initialize Git in C:\Users\JITU.

```powershell
Set-Location -LiteralPath 'D:\ai try website cloth shope'
git rev-parse --show-toplevel
git status
git add --all
git commit -m "Update website"
git push origin main
```

The repository root printed above must be this website folder. If Git reports nothing to commit, your saved files already match the latest commit; just run the push command. A branch needs its first commit before it can be pushed. Dependencies, build output, environment files, and troubleshooting screenshots are excluded by .gitignore. GitHub stores the website source; publishing the website requires a separate hosting deployment.
