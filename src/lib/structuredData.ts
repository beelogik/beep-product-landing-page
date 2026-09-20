import { brand, faqs, pricingTiers } from "../data/site";

const SCHEMA = "https://schema.org";

export const buildStructuredData = (siteUrl: string) => [
  {
    "@context": SCHEMA,
    "@type": "Organization",
    name: brand.name,
    url: siteUrl,
    logo: `${siteUrl}favicon.svg`,
    description: brand.description,
    areaServed: ["BR", "CN", "MO"],
    address: { "@type": "PostalAddress", addressLocality: "Macao", addressCountry: "MO" }
  },
  { "@context": SCHEMA, "@type": "WebSite", name: brand.name, url: siteUrl, inLanguage: "en" },
  {
    "@context": SCHEMA,
    "@type": "Service",
    name: `${brand.name} cross-border payment processing`,
    serviceType: "Payment processing and eFX settlement",
    provider: { "@type": "Organization", name: brand.name },
    areaServed: ["BR", "CN", "MO"],
    offers: pricingTiers.map(({ name, rate, volume, detail, monthlyPriceUsd }) => ({
      "@type": "Offer",
      name: `${name} · ${rate} all-in`,
      description: `${volume}. ${detail}.`,
      priceCurrency: "USD",
      price: monthlyPriceUsd,
      availability: `${SCHEMA}/InStock`
    }))
  },
  {
    "@context": SCHEMA,
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer }
    }))
  }
];
