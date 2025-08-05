import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import type React from "react";

import { CookieConsent } from "@/components/action/cookie-consent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Pensiunea Raul Galicea Mare | Cazare Dolj aproape de Craiova și Calafat | Camere de la 180 RON",
  description:
    "🏨 Pensiunea Raul din Galicea Mare, Dolj - cazare premium la 15 min de Craiova și 20 min de Calafat. Camere confortabile de la 180 RON/noapte. WiFi gratuit, parcare, mic dejun inclus. Rezervări: 0761 692 023",
  keywords: [
    // Primary keywords
    "pensiune Galicea Mare",
    "cazare Galicea Mare Dolj",
    "pensiune aproape Craiova",
    "cazare aproape Craiova",
    "pensiune aproape Calafat",
    "cazare aproape Calafat",

    // Secondary keywords
    "pensiune Dolj",
    "cazare Dolj",
    "hotel Galicea Mare",
    "camere Galicea Mare",
    "pensiune Calafat",
    "cazare Calafat",

    // Long-tail keywords
    "pensiune ieftina aproape Craiova",
    "cazare confortabila Dolj",
    "camere cu mic dejun Galicea Mare",
    "pensiune cu parcare gratuita Dolj",
    "cazare business Craiova Calafat",
    "weekend Galicea Mare",
    "pensiune pe drumul Craiova Calafat",
    "cazare tranzit Calafat",

    // Local SEO
    "DJ561G Galicea Mare",
    "pensiuni Oltenia",
    "cazare sud-vest Romania",
    "turism Dolj",
    "drumul european E70",
    "cazare frontiera Bulgaria",

    // Service keywords
    "rezervari online pensiune",
    "WhatsApp rezervari cazare",
    "restaurant traditional Dolj",
    "WiFi gratuit pensiune",
    "pensiune cu mic dejun inclus",
  ].join(", "),
  authors: [{ name: "Pensiunea Raul Galicea Mare" }],
  creator: "Pensiunea Raul",
  publisher: "Pensiunea Raul Galicea Mare, Dolj",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://pensiunearaul.ro"),
  alternates: {
    canonical: "https://pensiunearaul.ro",
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
  openGraph: {
    title: "Pensiunea Raul Galicea Mare | Cazare Premium la 15 min de Craiova",
    description:
      "Descoperiți Pensiunea Raul din Galicea Mare, Dolj - cazare de 4 stele la prețuri de 3 stele! Camere moderne de la 180 RON, WiFi gratuit, parcare, restaurant tradițional. La doar 15 minute de Craiova.",
    url: "https://pensiunearaul.ro",
    siteName: "Pensiunea Raul Galicea Mare",
    images: [
      {
        url: "https://pensiunearaul.ro/images/pensiunea-raul-galicea-mare-exterior.jpg",
        width: 1200,
        height: 630,
        alt: "Pensiunea Raul - Cazare premium în Galicea Mare, Dolj, aproape de Craiova",
      },
      {
        url: "https://pensiunearaul.ro/images/camere-confortabile-galicea-mare.jpg",
        width: 1200,
        height: 630,
        alt: "Camere confortabile la Pensiunea Raul din Galicea Mare, Dolj",
      },
    ],
    locale: "ro_RO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pensiunea Raul Galicea Mare | Cazare la 15 min de Craiova",
    description:
      "Cazare premium în Galicea Mare, Dolj. Camere de la 180 RON, facilități complete, la doar 15 minute de Craiova. Rezervări WhatsApp: 0761 692 023",
    images: [
      "https://pensiunearaul.ro/images/pensiunea-raul-galicea-mare-exterior.jpg",
    ],
  },
  other: {
    "geo.region": "RO-DJ",
    "geo.placename": "Galicea Mare, Dolj, Romania",
    "geo.position": "44.2619;23.9311",
    ICBM: "44.2619, 23.9311",
    distribution: "global",
    rating: "general",
    "revisit-after": "7 days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LodgingBusiness",
      "@id": "https://pensiunearaul.ro/#business",
      name: "Pensiunea Raul",
      alternateName: "Pensiunea Raul Galicea Mare",
      description:
        "Pensiunea Raul din Galicea Mare, Dolj oferă cazare premium la prețuri avantajoase, la doar 15 minute de Craiova și 20 minute de Calafat. Camere moderne, restaurant tradițional, facilități complete. Poziție strategică pe drumul european E70.",
      url: "https://pensiunearaul.ro",
      telephone: ["+40761692023", "+40768584230"],
      email: "rezervari@pensiunearaul.ro",
      image: [
        "https://pensiunearaul.ro/images/pensiunea-raul-galicea-mare-exterior.jpg",
        "https://pensiunearaul.ro/images/camere-confortabile-galicea-mare.jpg",
        "https://pensiunearaul.ro/images/restaurant-traditional-dolj.jpg",
      ],
      priceRange: "180-450 RON",
      currenciesAccepted: "RON",
      paymentAccepted: ["Cash", "Credit Card", "Bank Transfer"],
      address: {
        "@type": "PostalAddress",
        streetAddress: "DJ561G 1",
        addressLocality: "Galicea Mare",
        addressRegion: "Dolj",
        postalCode: "207165",
        addressCountry: "RO",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 44.2619,
        longitude: 23.9311,
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "127",
        bestRating: "5",
        worstRating: "1",
      },
      starRating: {
        "@type": "Rating",
        ratingValue: "4",
      },
      amenityFeature: [
        {
          "@type": "LocationFeatureSpecification",
          name: "Free WiFi",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Free Parking",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Restaurant",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Garden",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "24-hour front desk",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Breakfast included",
          value: true,
        },
      ],
      checkinTime: "14:00",
      checkoutTime: "12:00",
      numberOfRooms: "15",
      smokingAllowed: false,
      petsAllowed: true,
      sameAs: [
        "https://www.facebook.com/pensiunearaul",
        "https://www.instagram.com/pensiunearaul",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://pensiunearaul.ro/#website",
      url: "https://pensiunearaul.ro",
      name: "Pensiunea Raul Galicea Mare",
      description: "Site oficial Pensiunea Raul din Galicea Mare, Dolj",
      publisher: {
        "@id": "https://pensiunearaul.ro/#business",
      },
      potentialAction: [
        {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://pensiunearaul.ro/?s={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      ],
    },
    {
      "@type": "Organization",
      "@id": "https://pensiunearaul.ro/#organization",
      name: "Pensiunea Raul",
      url: "https://pensiunearaul.ro",
      logo: {
        "@type": "ImageObject",
        url: "https://pensiunearaul.ro/images/logo-pensiunea-raul.png",
        width: 300,
        height: 100,
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+40761692023",
          contactType: "reservations",
          availableLanguage: ["Romanian"],
          areaServed: "RO",
        },
        {
          "@type": "ContactPoint",
          telephone: "+40768584230",
          contactType: "customer service",
          availableLanguage: ["Romanian"],
          areaServed: "RO",
        },
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "DJ561G 1",
        addressLocality: "Galicea Mare",
        addressRegion: "Dolj",
        postalCode: "207165",
        addressCountry: "RO",
      },
      sameAs: [
        "https://www.facebook.com/pensiunearaul",
        "https://www.instagram.com/pensiunearaul",
      ],
    },
    {
      "@type": "Place",
      "@id": "https://pensiunearaul.ro/#place",
      name: "Pensiunea Raul Galicea Mare",
      description: "Locația Pensiunii Raul în Galicea Mare, Dolj",
      geo: {
        "@type": "GeoCoordinates",
        latitude: 44.2619,
        longitude: 23.9311,
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "DJ561G 1",
        addressLocality: "Galicea Mare",
        addressRegion: "Dolj",
        postalCode: "207165",
        addressCountry: "RO",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro" prefix="og: https://ogp.me/ns#">
      <head>
        <link rel="canonical" href="https://pensiunearaul.ro" />
        <link rel="alternate" hrefLang="ro" href="https://pensiunearaul.ro" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://www.google-analytics.com" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Additional meta tags */}
        <meta name="theme-color" content="#16a34a" />
        <meta name="msapplication-TileColor" content="#16a34a" />
        <meta name="application-name" content="Pensiunea Raul" />
        <meta name="apple-mobile-web-app-title" content="Pensiunea Raul" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {children}
        <CookieConsent />

        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-XXXXXXX');
          `}
        </Script>

        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
      </body>
    </html>
  );
}
