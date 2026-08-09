import { SITE } from "@/lib/constants";

export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    description:
      "We buy junk cars for cash in the Seattle metro area. Free towing, instant quotes, same-day pickup. Any condition — running, wrecked, or totaled.",
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: { "@type": "GeoCoordinates", latitude: 47.6062, longitude: -122.3321 },
      geoRadius: "50000",
    },
    priceRange: "$$",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}