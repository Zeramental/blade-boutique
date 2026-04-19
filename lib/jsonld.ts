import { STUDIO } from "./studio";
import { SERVICES, type Service } from "./services";

const ORG_ID = `${STUDIO.url}#organization`;
const PLACE_ID = `${STUDIO.url}#place`;
const PERSON_ID = `${STUDIO.url}#sam`;
const WEBSITE_ID = `${STUDIO.url}#website`;

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["BeautySalon", "LocalBusiness"],
    "@id": ORG_ID,
    name: STUDIO.name,
    alternateName: STUDIO.legalName,
    url: STUDIO.url,
    image: `${STUDIO.url}/images/blade/sam-portrait.jpg`,
    logo: `${STUDIO.url}/logo.png`,
    telephone: STUDIO.phone,
    email: STUDIO.email,
    priceRange: STUDIO.priceRange,
    description:
      "Permanent makeup studio in Bromhof, Randburg — microblading, nano brows, powder brows, lip blush, dark lip neutralisation and eyeliner tattoo by Sam. Specialist in PMU for melanin-rich skin.",
    slogan: STUDIO.tagline,
    founder: { "@id": PERSON_ID },
    employee: { "@id": PERSON_ID },
    address: {
      "@type": "PostalAddress",
      streetAddress: STUDIO.address.street,
      addressLocality: STUDIO.address.suburb,
      addressRegion: STUDIO.address.province,
      postalCode: STUDIO.address.postalCode,
      addressCountry: STUDIO.address.countryCode,
    },
    location: {
      "@type": "Place",
      "@id": PLACE_ID,
      name: STUDIO.venueName,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: STUDIO.geo.latitude,
      longitude: STUDIO.geo.longitude,
    },
    areaServed: STUDIO.serviceArea.map((a) => ({
      "@type": "City",
      name: a,
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "14:00",
      },
    ],
    sameAs: [
      STUDIO.social.instagram,
      STUDIO.social.facebook,
      STUDIO.social.tiktok,
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: STUDIO.reviews.rating,
      reviewCount: STUDIO.reviews.count,
      bestRating: 5,
      worstRating: 1,
    },
    makesOffer: SERVICES.filter((s) => s.fromPrice !== null).map((s) => ({
      "@type": "Offer",
      name: s.name,
      url: `${STUDIO.url}/services/${s.slug}`,
      priceSpecification: {
        "@type": "PriceSpecification",
        price: s.fromPrice,
        priceCurrency: "ZAR",
      },
    })),
    knowsAbout: [
      "Permanent makeup",
      "Microblading",
      "Nano brows",
      "Powder brows",
      "Lip blush",
      "Dark lip neutralisation",
      "Eyeliner tattoo",
      "Cosmetic tattooing",
      "PMU for melanin-rich skin",
      "Permablend pigments",
      "Evenflo pigments",
    ],
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: STUDIO.artist.name,
    jobTitle: STUDIO.artist.role,
    worksFor: { "@id": ORG_ID },
    knowsAbout: [
      "Microblading",
      "Nano brow hair-stroke technique",
      "Powder brow technique",
      "Lip blush tattooing",
      "Dark lip neutralisation for melanin-rich skin",
      "Permanent eyeliner",
      "Cosmetic freckle placement",
      "Fine-line tattooing",
    ],
    knowsLanguage: ["en"],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Professional training",
        name: "PhiBrows Mapping",
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Professional training",
        name: "Lip neutralisation for melanin-rich skin",
      },
    ],
    description: `${STUDIO.artist.yearsExperience}+ years of permanent makeup experience. ${STUDIO.artist.specialty}.`,
    image: `${STUDIO.url}/images/blade/sam-portrait.jpg`,
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: STUDIO.url,
    name: STUDIO.name,
    publisher: { "@id": ORG_ID },
    inLanguage: "en-ZA",
  };
}

export function serviceSchema(service: Service) {
  const offer = service.fromPrice
    ? {
        "@type": "Offer",
        price: service.fromPrice,
        priceCurrency: "ZAR",
        availability: "https://schema.org/InStock",
        url: `${STUDIO.url}/services/${service.slug}`,
      }
    : undefined;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${STUDIO.url}/services/${service.slug}#service`,
    name: service.name,
    alternateName: service.aliases,
    serviceType: service.category === "tattoos" ? "Tattoo" : "Permanent makeup",
    category: service.isPMU ? "Permanent Makeup" : "Beauty Treatment",
    description: service.longDescription,
    url: `${STUDIO.url}/services/${service.slug}`,
    provider: { "@id": ORG_ID },
    areaServed: STUDIO.serviceArea.map((a) => ({ "@type": "City", name: a })),
    ...(offer ? { offers: offer } : {}),
  };
}

export function breadcrumbSchema(
  items: Array<{ name: string; url: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqSchema(items: Array<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
}

export function priceListSchema() {
  const priced = SERVICES.filter((s) => s.fromPrice !== null);
  return {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Blade Boutique — Permanent Makeup Price List",
    url: `${STUDIO.url}/pricing`,
    itemListElement: priced.map((s) => ({
      "@type": "Offer",
      name: s.name,
      description: s.shortDescription,
      url: `${STUDIO.url}/services/${s.slug}`,
      priceSpecification: {
        "@type": "PriceSpecification",
        price: s.fromPrice,
        priceCurrency: "ZAR",
      },
    })),
  };
}

export function jsonLd(data: object | object[]) {
  return { __html: JSON.stringify(Array.isArray(data) ? data : [data]) };
}
