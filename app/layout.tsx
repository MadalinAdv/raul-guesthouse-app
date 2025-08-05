import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type React from "react";

import "./globals.css";
import { CookieConsent } from "@/components/action/cookie-consent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pensiunea Raul - Cazare Galicea Mare, Dolj ",
  description:
    "Pensiunea Raul din Galicea Mare, Dolj - cazare confortabilă la doar câțiva km de Craiova si de Calafat. Camere avantajoase, facilități moderne, restaurant tradițional. Rezervări: 0761 692 023",
  keywords:
    "pensiune Galicea Mare, cazare Dolj, pensiune aproape Craiova, pensiune Craiova, pensiune Calafat, camere ieftine Craiova, cazare Galicea Mare, pensiune Dolj, restaurant tradițional, cazare confortabilă, cazare galicea, cazare galicea mare",
  authors: [{ name: "Pensiunea Raul" }],
  creator: "Pensiunea Raul",
  publisher: "Pensiunea Raul",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://pensiunearaul.ro"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Pensiunea Raul - Cazare Premium Galicea Mare ",
    description:
      "Descoperiți Pensiunea Raul din Galicea Mare, Dolj - cazare de calitate la prețuri avantajoase, aproape de Craiova si Calafat. Camere confortabile, restaurant cu bucătărie tradițională.",
    url: "https://pensiunearaul.ro",
    siteName: "Pensiunea Raul",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pensiunea Raul - Cazare Galicea Mare, Dolj",
      },
    ],
    locale: "ro_RO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pensiunea Raul - Cazare Galicea Mare | Aproape de Craiova",
    description:
      "Cazare confortabilă în Galicea Mare, Dolj. Camere avantajoase, facilități moderne, la doar 15 minute de Craiova.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro">
      <head>
        <link rel="canonical" href="https://pensiunearaul.ro" />
        <meta name="geo.region" content="RO-DJ" />
        <meta name="geo.placename" content="Galicea Mare, Dolj" />
        <meta name="geo.position" content="44.2619;23.9311" />
        <meta name="ICBM" content="44.2619, 23.9311" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LodgingBusiness",
              name: "Pensiunea Raul",
              image: "https://pensiunearaul.ro/og-image.jpg",
              description:
                "Pensiunea Raul din Galicea Mare, Dolj oferă cazare confortabilă la prețuri avantajoase, aproape de Craiova si Calafat. Camere moderne, restaurant tradițional, facilități complete.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "DJ561G 1",
                addressLocality: "Galicea Mare",
                addressRegion: "Dolj",
                addressCountry: "RO",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 44.2619,
                longitude: 23.9311,
              },
              telephone: "+40761692023",
              url: "https://pensiunearaul.ro",
              priceRange: "$$",
              starRating: {
                "@type": "Rating",
                ratingValue: "4.8",
              },
              amenityFeature: [
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Free WiFi",
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Free Parking",
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Restaurant",
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Garden",
                },
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
