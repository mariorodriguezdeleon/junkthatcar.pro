import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Common questions about selling your junk car to Junk That Car. How it works, what we pay, what we accept, and more.",
};

const faqs = [
  {
    q: "How does selling my junk car work?",
    a: "It's simple. Fill out our online form or give us a call. We'll ask a few questions about your vehicle and give you a quote within minutes. If you accept, we schedule a pickup — often the same day. We tow your car for free and pay you cash on the spot.",
  },
  {
    q: "Do I need a title to sell my car?",
    a: "A title is preferred but not always required. If you don't have it, contact us and we'll work through your specific situation. We can often accept vehicles with a registration and valid ID.",
  },
  {
    q: "What types of vehicles do you buy?",
    a: "We buy cars, trucks, SUVs, and vans in any condition — running, not running, crashed, wrecked, flooded, missing parts, or just plain old. If it has four wheels (or even if it doesn't), we'll take a look.",
  },
  {
    q: "How much will I get for my junk car?",
    a: "The price depends on your vehicle's make, model, year, condition, and current scrap metal prices. We pride ourselves on offering fair, competitive prices. There's no obligation — get a quote and decide.",
  },
  {
    q: "Is towing really free?",
    a: "Absolutely. We never charge for towing. Our truck comes to you — whether your car is in the driveway, on the street, or in a field.",
  },
  {
    q: "How fast can you pick up my car?",
    a: "In most cases, we can pick up your car the same day you accept the offer. If it's late in the day, we'll come the next morning at the latest.",
  },
  {
    q: "Do you buy cars that don't run?",
    a: "Yes! That's actually most of what we buy. Running or not, we'll make you an offer and tow it away for free.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve the greater Seattle metro area including King, Pierce, and Snohomish counties. Check our Service Areas page for a full list of cities.",
  },
  {
    q: "What paperwork do I need to sell my car?",
    a: "Bring your title (if you have it), a valid photo ID, and your registration. We handle the rest of the paperwork for you.",
  },
  {
    q: "Will you buy a car with a lien?",
    a: "It depends. Contact us with the details and we'll let you know if we can help. Generally, the lien needs to be resolved first.",
  },
];

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <h1 className="text-4xl sm:text-5xl font-bold text-jtc-charcoal mb-4 text-center">
        Frequently Asked <span className="text-brand-800">Questions</span>
      </h1>
      <p className="text-lg text-jtc-slate text-center mb-16">
        Everything you need to know about selling your junk car.
      </p>

      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <details
            key={i}
            className="group bg-white border border-jtc-border rounded-xl overflow-hidden"
          >
            <summary className="flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-jtc-tint transition-colors list-none">
              <span className="text-jtc-charcoal font-medium pr-4">{faq.q}</span>
              <span className="text-brand-800 text-xl flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
            </summary>
            <div className="px-6 pb-4 text-jtc-charcoal leading-relaxed">
              {faq.a}
            </div>
          </details>
        ))}
      </div>

      <div className="mt-16 text-center bg-white border border-jtc-border rounded-2xl p-8">
        <h2 className="text-xl font-bold text-jtc-charcoal mb-3">Still have questions?</h2>
        <p className="text-jtc-slate mb-6">We&apos;re happy to help. Give us a call or fill out our quote form.</p>
        <a
          href="/get-quote"
          className="inline-block px-8 py-4 rounded-lg font-semibold bg-brand-500 text-jtc-charcoal hover:bg-brand-800 hover:text-jtc-charcoal transition-colors"
        >
          Get a Quote
        </a>
      </div>
    </div>
  );
}