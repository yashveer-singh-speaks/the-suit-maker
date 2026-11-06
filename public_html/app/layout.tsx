import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0B0B0B",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://thesuitmaker.in"),
  title: {
    default: "The Suit Maker | Bespoke Tailoring & Couture House | New Delhi",
    template: "%s | The Suit Maker",
  },
  description:
    "The Suit Maker is a premier bespoke tailoring studio in Dwarka Sector 7, New Delhi. Renowned for custom men's suits, royal sherwanis, bandhgalas, luxury women's tailoring, kids' formal wear, and precision alteration services.",
  keywords: [
    "The Suit Maker",
    "bespoke suits New Delhi",
    "custom tailor Dwarka Sector 7",
    "Ramphal Chowk tailoring",
    "wedding sherwani Delhi",
    "bandhgala suit",
    "luxury suit maker",
    "men's tailoring",
    "women's power suit",
    "suit alterations Delhi",
    "Savile Row inspired tailoring",
  ],
  authors: [{ name: "The Suit Maker" }],
  creator: "The Suit Maker",
  publisher: "The Suit Maker",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  icons: {
    icon: "/assets/logo.png",
    shortcut: "/assets/logo.png",
    apple: "/assets/logo.png",
  },
  openGraph: {
    title: "The Suit Maker | Bespoke Tailoring & Haute Couture | Dwarka, New Delhi",
    description:
      "Crafting multi-generational bespoke suits, royal sherwanis, bandhgalas, women's tailoring, and precision alterations at Ramphal Chowk, Dwarka Sector 7, New Delhi.",
    url: "https://thesuitmaker.in",
    siteName: "The Suit Maker",
    images: [
      {
        url: "/assets/black-suit-man.png",
        width: 1024,
        height: 1024,
        alt: "The Suit Maker Bespoke Tailoring Collection",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Suit Maker | Bespoke Tailoring House",
    description: "Multi-generational master tailoring studio in Dwarka Sector 7, New Delhi.",
    images: ["/assets/black-suit-man.png"],
  },
  alternates: {
    canonical: "https://thesuitmaker.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MensClothingStore",
    "name": "The Suit Maker",
    "image": "https://thesuitmaker.in/assets/logo.png",
    "url": "https://thesuitmaker.in",
    "telephone": "+918800253261",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shop No. D-425, Ramphal Chowk, Dwarka Sector 7, Near Vardhman Mall, Near Om Bikaner Sweets",
      "addressLocality": "New Delhi",
      "addressRegion": "Delhi",
      "postalCode": "110075",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.5823,
      "longitude": 77.0701
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "09:30",
        "closes": "22:00"
      }
    ],
    "sameAs": [
      "https://thesuitmaker.in"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Bespoke Tailoring Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Bespoke Men's Suits & Tuxedos"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Royal Indian Sherwani & Bandhgala"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Women's Haute Tailoring & Evening Dresses"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Kids' Wear & Occasion Garments"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Garment Alteration & Reshaping"
          }
        }
      ]
    }
  };

  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-ivory text-matte font-sans selection:bg-gold/30 selection:text-matte min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
