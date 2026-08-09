import type { Metadata } from "next";
import Link from "next/link";
import {
  ClipboardList,
  PhoneCall,
  Banknote,
  Star,
  Truck,
  Clock,
  DollarSign,
  ArrowRight,
  Phone,
} from "lucide-react";
import { SITE } from "@/lib/constants";
import type { Review } from "@/types";

export const metadata: Metadata = {
  title: "Junk That Car — We Buy Junk Cars for Cash | Free Towing",
};

const testimonials: Review[] = [
  {
    id: "1",
    author: "Mike R.",
    rating: 5,
    content:
      "Called in the morning, had cash in hand by 2pm. They gave me $800 for my old Accord that wouldn't start. Unbelievably easy.",
    date: "2026-06-15",
    location: "Seattle, WA",
  },
  {
    id: "2",
    author: "Jennifer L.",
    rating: 5,
    content:
      "I was skeptical at first, but they offered more than the other three places I called. Free tow, fast pickup — the whole thing took maybe 4 hours from quote to cash.",
    date: "2026-07-02",
    location: "Bellevue, WA",
  },
  {
    id: "3",
    author: "David P.",
    rating: 5,
    content:
      "My truck was totaled and I needed it gone. They came the same day, handed me a check, and hauled it away. Zero hassle.",
    date: "2026-05-28",
    location: "Tacoma, WA",
  },
];

const howItWorks = [
  {
    icon: ClipboardList,
    title: "Get a Quote",
    description:
      "Tell us about your car — year, make, model, and condition. It takes less than two minutes.",
  },
  {
    icon: PhoneCall,
    title: "Accept Your Offer",
    description:
      "We call within minutes with a fair, no-obligation cash offer. No haggling, no pressure.",
  },
  {
    icon: Banknote,
    title: "Get Paid",
    description:
      "We come to you with free towing and pay cash on the spot. Same-day pickup available.",
  },
];

const whyChooseUs = [
  {
    icon: DollarSign,
    title: "Best Prices",
    description:
      "We beat competitor offers and pay top dollar for cars in any condition — running, wrecked, or totaled.",
  },
  {
    icon: Truck,
    title: "Free Towing",
    description:
      "No hidden fees. We pick up your car anywhere in the Seattle metro area at no cost to you.",
  },
  {
    icon: Clock,
    title: "Same-Day Pickup",
    description:
      "Need it gone today? We can have a tow truck at your door within hours of accepting your offer.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "fill-brand-400 text-brand-400" : "text-brand-800"
          }`}
        />
      ))}
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden">
        {/* Subtle radial gradient accent */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-brand-500/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-brand-400/5 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Sell Your Junk Car for{" "}
              <span className="text-brand-400">Top Dollar</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
              Free towing, same-day pickup, and cash in your hand. We buy cars in
              any condition — running, wrecked, or missing parts — across the
              Seattle metro area.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                href="/get-quote"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-500 text-white font-semibold text-lg hover:bg-brand-400 transition-colors shadow-lg shadow-brand-500/25"
              >
                Get Your Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={`tel:${SITE.phone.replace(/[^+\d]/g, "")}`}
                className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors font-medium"
              >
                <Phone className="w-4 h-4 text-brand-400" />
                {SITE.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section className="bg-brand-900/50 border-y border-brand-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
              Three simple steps from junk car to cash. Most customers go from
              quote to paid the same day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {howItWorks.map((step, i) => (
              <div key={step.title} className="relative flex flex-col items-center text-center">
                {/* Step number connector */}
                {i < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+4rem)] w-[calc(100%-8rem)] h-px bg-gradient-to-r from-brand-700 to-brand-800" />
                )}
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-500/10 ring-1 ring-brand-500/20 mb-6">
                  <step.icon className="w-8 h-8 text-brand-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-400 leading-relaxed max-w-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why Choose Us ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Why Choose {SITE.name}
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            We make selling your junk car fast, easy, and profitable. Here's what
            sets us apart.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUs.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-brand-800 bg-brand-900/30 p-8 hover:border-brand-700 hover:bg-brand-900/50 transition-colors"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand-500/10 mb-5">
                <item.icon className="w-6 h-6 text-brand-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <section className="bg-brand-900/50 border-y border-brand-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              What Our Customers Say
            </h2>
            <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
              Don't take our word for it. Here's what people across the Seattle
              metro area are saying.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="rounded-2xl border border-brand-800 bg-brand-950/80 p-6 sm:p-8 flex flex-col"
              >
                <StarRating rating={t.rating} />
                <blockquote className="mt-4 text-slate-300 leading-relaxed flex-1">
                  &ldquo;{t.content}&rdquo;
                </blockquote>
                <div className="mt-6 pt-4 border-t border-brand-800">
                  <p className="font-semibold text-white">{t.author}</p>
                  <p className="text-sm text-slate-500">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Final CTA ─── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand-500/10 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Ready to Get Cash for Your Car?
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-xl mx-auto">
            Get a free, no-obligation quote in minutes. We'll buy your car no
            matter the condition.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/get-quote"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-500 text-white font-semibold text-lg hover:bg-brand-400 transition-colors shadow-lg shadow-brand-500/25"
            >
              Get Your Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href={`tel:${SITE.phone.replace(/[^+\d]/g, "")}`}
              className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors font-medium"
            >
              <Phone className="w-4 h-4 text-brand-400" />
              {SITE.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}