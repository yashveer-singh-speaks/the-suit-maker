# The Suit Maker — Bespoke Luxury Digital Flagship

Official repository for **The Suit Maker**, a multi-generational custom tailoring studio located in Ramphal Chowk, Dwarka Sector 7, New Delhi.

Website: [https://thesuitmaker.in/](https://thesuitmaker.in/)  
Studio Line: [+91 88002 53261](tel:8800253261)

---

## Brand Aesthetic & Architectural Philosophy

The digital flagship embodies:
> **Savile Row Craftsmanship + Timeless Heritage Tailoring + Contemporary Luxury Technology**

### Core Luxury Palette
- **Warm Ivory (`#F8F3E8`):** Primary base canvas
- **Matte Black (`#0B0B0B`):** Premium contrast and structural boundaries
- **Deep Navy (`#0B1F3A`):** Formal evening modules & outerwear depth
- **Charcoal (`#2B2B2B`):** Architectural typography & dividers
- **Walnut Brown (`#5A3825`):** Heritage cutting tables & leather accents
- **Antique Gold (`#C6A15B`):** Signature accent for buttons, borders, and tactile highlights

---

## Technology Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript 5.6
- **Styling:** Tailwind CSS 3.4 with custom tokens and native CSS `backdrop-filter` glassmorphism
- **3D Atmospheric Engine:** Three.js (`0.169.0`) rendering interactive cloth wave physics and ambient drifting golden particles
- **Typography:** `Cormorant Garamond` (editorial serif) & `Inter` (neutral UI sans-serif)
- **Icons & Tactile Details:** Lucide React & Canvas Confetti
- **Deployment:** Vercel edge-ready with production static prerendering (21/21 static pages generated)

---

## Directory Structure

```text
├── docs/                   # Authoritative business specifications & requirements
├── public_html/            # Full-stack Next.js web application
│   ├── app/                # App Router (17 individual luxury routes)
│   │   ├── layout.tsx      # Root layout with JSON-LD schema & Google Fonts
│   │   ├── page.tsx        # Flagship Homepage with 21 distinct image assets & video
│   │   ├── home/           # Direct homepage mirror
│   │   ├── men-s-tailoring/# Men's bespoke suits, drop profiles & shirting
│   │   ├── women-s-tailoring/# Women's power suits, gowns & royal lehengas
│   │   ├── kids-wear/      # Youth milestone suits & growth allowance guarantee
│   │   ├── alteration-services/# Suit reshaping, 30-min pinning & 24hr gala fix
│   │   ├── gallery/        # Filterable visual archive with lightbox inspector
│   │   ├── accessories/    # Seven-fold silk ties, calfskin oxfords & accents
│   │   ├── contact-us/     # Studio coordinates, WhatsApp transmission & map
│   │   └── ...             # Specialized credit profiles & brand manifestos
│   ├── components/         # Reusable luxury UI components (Navbar, Footer, Modals, 3D Canvas)
│   ├── public/             # Static public assets (21 images, hero video, sitemap, robots)
│   │   └── assets/
│   ├── assets/             # Original asset library
│   ├── tailwind.config.ts  # Luxury theme tokens
│   ├── next.config.mjs     # Next.js edge configuration
│   └── package.json        # Dependencies & build scripts
├── vercel.json             # Root Vercel deployment configuration
└── README.md
```

---

## All 17 Implemented Routes

### Main Navigation Routes
1. `/` — **Home** (Full-bleed video, 3D fabric canvas, 21 distinct image assets)
2. `/home` — **Home (Direct)**
3. `/men-s-tailoring` — **Men’s Tailoring** (Slim / Regular / Athletic drop profiles)
4. `/women-s-tailoring` — **Women’s Haute Tailoring** (Power suits, evening gowns)
5. `/kids-wear` — **Kids’ Wear** (Milestone occasionwear & growth guarantees)
6. `/alteration-services` — **Alteration Services** (Precision garment re-architecting)
7. `/gallery` — **The Visual Archive** (Interactive filterable gallery & modal)
8. `/accessories` — **Sartorial Accessories** (Seven-fold ties, calfskin footwear)
9. `/contact-us` — **Contact Us** (Studio coordinates, WhatsApp & interactive map)

### Specialized Footer Credit Mesh & Brand Manifesto
10. `/the-suit-maker` — **The Brand Manifesto**
11. `/yashveer-singh-rajpoot` — **The Sovereign Profile**
12. `/yashveer` — **Minimalist Identity**
13. `/yashveer-singh` — **Corporate Profile**
14. `/yashveer-labs` — **The Innovation Hub**
15. `/yashveerlabs` — **The Tech Studio**
16. `/rajpoot-industries` — **The Hardware Horizon**
17. `/rajpootindustries` — **Manufacturing House**
18. `/yashveer-singh-rajpoot-the-founder-of-yashveer-labs-and-rajpoot-industries` — **Master Manifesto**

---

## Local Development & Build

```bash
# Navigate to application directory
cd public_html

# Install dependencies
npm install

# Start development server
npm run dev

# Run production build (verifies types, linting, and static generation)
npm run build

# Start production server
npm run start
```

---

## Manual Deployment on Vercel

### Step 1: Import Repository
1. Log in to [Vercel](https://vercel.com/) and click **Add New > Project**.
2. Select `yashveer-singh-speaks/the-suit-maker`.

### Step 2: Configure Settings
- **Root Directory:** Click "Edit" and choose `public_html`.
- **Framework Preset:** `Next.js` (automatically detected).
- **Build Command:** `npm run build` (default).
- **Output Directory:** `.next` (default).

### Step 3: Deploy
Click **Deploy**. Vercel will prerender all 21 static pages and deploy the application globally.

---

## Verified Atelier Coordinates

- **Studio Address:** Shop No. D-425, Ramphal Chowk, Dwarka Sector 7, Near Vardhman Mall, Near Om Bikaner Sweets, New Delhi - 110075
- **Alternate Listing:** Shop No. E-558, V Mart, Above Fashion Lover Shop, Ramphal Chowk Road, Dwarka Sector 7, New Delhi - 110075
- **Phone:** +91 88002 53261 / 8800253261
- **Hours:** 9:30 AM – 10:00 PM (Open all 7 days)
