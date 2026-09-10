import type { Metadata } from "next";
import QuoteForm from "@/components/QuoteForm";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Get a Quote",
  description: `Get an instant cash offer for your junk car in the Seattle metro area. Free towing, any condition, same-day pickup — fill out the form and we'll call you with an offer.`,
  openGraph: {
    title: `Get a Quote | ${SITE.name}`,
    description: `Get an instant cash offer for your junk car. Free towing, any condition.`,
  },
};

export default function GetQuotePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      {/* Hero */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-jtc-charcoal tracking-tight">
          Get an Instant Cash Offer
        </h1>
        <p className="mt-4 text-lg text-jtc-slate max-w-xl mx-auto">
          Tell us about your vehicle and we&apos;ll get back to you with a fair
          offer — usually within an hour.
        </p>
      </div>

      {/* Form card */}
      <div className="rounded-2xl border border-jtc-border bg-white p-6 sm:p-8 lg:p-10">
        <QuoteForm />
      </div>

      {/* Perks */}
      <div className="mt-16 grid gap-6 sm:grid-cols-3 text-center">
        <Perk
          emoji="🚛"
          title="Free Towing"
          description="We pick up your car at no cost — anywhere in the Seattle metro area."
        />
        <Perk
          emoji="💰"
          title="Top Dollar"
          description="Competitive cash offers based on current market rates and scrap prices."
        />
        <Perk
          emoji="⚡"
          title="Same-Day Pickup"
          description="Get your car picked up and cash in hand the same day you accept."
        />
      </div>
    </div>
  );
}

function Perk({
  emoji,
  title,
  description,
}: {
  emoji: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-jtc-border bg-white p-6">
      <div className="text-3xl mb-3">{emoji}</div>
      <h3 className="text-lg font-semibold text-jtc-charcoal">{title}</h3>
      <p className="mt-2 text-sm text-jtc-slate">{description}</p>
    </div>
  );
}