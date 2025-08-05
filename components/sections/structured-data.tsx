export function StructuredData() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Acasă",
        item: "https://pensiunearaul.ro",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Pensiuni Dolj",
        item: "https://pensiunearaul.ro/pensiuni-dolj",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Galicea Mare",
        item: "https://pensiunearaul.ro/galicea-mare",
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Cât costă o cameră la Pensiunea Raul din Galicea Mare?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Prețurile camerelor la Pensiunea Raul încep de la 180 RON pe noapte pentru camera dublă standard. Camera familială costă 280 RON/noapte, iar suita de lux 350 RON/noapte. Toate prețurile includ mic dejunul, WiFi gratuit și parcarea.",
        },
      },
      {
        "@type": "Question",
        name: "Cât durează drumul de la Craiova la Pensiunea Raul?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pensiunea Raul se află la doar 15 kilometri de Craiova, drumul durând aproximativ 15 minute cu mașina pe DJ561G. Este foarte ușor de ajuns și bine conectată la orașul Craiova.",
        },
      },
      {
        "@type": "Question",
        name: "Ce facilități sunt incluse la Pensiunea Raul?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pensiunea Raul oferă WiFi gratuit în toate camerele, parcare gratuită, mic dejun tradițional inclus, restaurant cu bucătărie românească, grădină pentru relaxare și recepție deschisă 24/7.",
        },
      },
      {
        "@type": "Question",
        name: "Cum pot face o rezervare la Pensiunea Raul?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Puteți face rezervări la Pensiunea Raul sunând la (0761) 692 023 sau (0768) 584 230, prin WhatsApp la aceleași numere, sau prin email la rezervari@pensiunearaul.ro. Acceptăm rezervări online 24/7.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd),
        }}
      />
    </>
  );
}
