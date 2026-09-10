export const SITE_BASE = {
  name: "Junk That Car",
  domain: "junkthatcar.pro",
  tagline: "We buy junk cars — fast, fair, and free towing.",
  phone: process.env.NEXT_PUBLIC_PHONE || "(206) 395-9510",
  email: process.env.NEXT_PUBLIC_EMAIL || "info@junkthatcar.pro",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://junkthatcar.pro",
} as const;

/*
 * Phone: display form vs. dial form (RFC 3966).
 * tel: hrefs must be a pure dial string — no spaces, parens, or dashes.
 * Use SITE.phone for visible text and SITE.phoneHref for hrefs, everywhere.
 */
export const SITE = {
  ...SITE_BASE,
  phoneHref: `tel:${SITE_BASE.phone.replace(/[^\d+]/g, "")}`,
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  // NOTE (2026-09-10): "Get a Quote" removed from nav — it duplicates the
  // header CTA button pointing to the same route. Re-add if the button
  // ever comes out of the header.
  { href: "/service-areas", label: "Service Areas" },
  // NOTE (2026-09-10): "Reviews" hidden until real reviews exist (FTC
  // compliance — see src/app/reviews/page.tsx header note). Restore this
  // line together with real review content:
  // { href: "/reviews", label: "Reviews" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
] as const;

export const VEHICLE_CONDITIONS = [
  "Running",
  "Not Running",
  "Crashed / Damaged",
  "Missing Parts",
  "Flood Damage",
] as const;

export const SERVICE_AREAS = [
  { city: "Seattle", county: "King", zipCodes: ["98101", "98102", "98103", "98104", "98105", "98106", "98107", "98108", "98109", "98115", "98116", "98117", "98118", "98119", "98121", "98122", "98125", "98126", "98133", "98134", "98136", "98144", "98146", "98154", "98164", "98174", "98177", "98178", "98195", "98199"] },
  { city: "Bellevue", county: "King", zipCodes: ["98004", "98005", "98006", "98007", "98008", "98009"] },
  { city: "Tacoma", county: "Pierce", zipCodes: ["98402", "98403", "98404", "98405", "98406", "98407", "98408", "98409", "98416", "98418", "98421", "98422", "98424", "98444", "98445", "98446", "98447", "98465", "98466"] },
  { city: "Everett", county: "Snohomish", zipCodes: ["98201", "98203", "98204", "98205", "98207", "98208"] },
  { city: "Kent", county: "King", zipCodes: ["98030", "98031", "98032", "98035", "98042"] },
  { city: "Renton", county: "King", zipCodes: ["98055", "98056", "98057", "98058", "98059"] },
  { city: "Auburn", county: "King", zipCodes: ["98001", "98002", "98003", "98092"] },
  { city: "Federal Way", county: "King", zipCodes: ["98003", "98023", "98063", "98093"] },
  { city: "Kirkland", county: "King", zipCodes: ["98033", "98034", "98083"] },
  { city: "Redmond", county: "King", zipCodes: ["98052", "98053", "98073", "98074"] },
  { city: "Lynnwood", county: "Snohomish", zipCodes: ["98036", "98037", "98046", "98087"] },
  { city: "Bothell", county: "King", zipCodes: ["98011", "98012", "98021", "98041"] },
  { city: "Burien", county: "King", zipCodes: ["98148", "98166", "98168"] },
  { city: "Issaquah", county: "King", zipCodes: ["98027", "98029", "98075"] },
  { city: "Sammamish", county: "King", zipCodes: ["98074", "98075"] },
] as const;