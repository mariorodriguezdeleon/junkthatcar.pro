import type { Metadata } from "next";
import { Car, Users, ThumbsUp } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: "Junk That Car is a family-owned junk car removal service serving the Seattle metro area. Fast, fair, and free towing — any condition.",
};

const stats = [
  { icon: Car, value: "5,000+", label: "Cars Bought" },
  { icon: Users, value: "10+", label: "Years in Business" },
  { icon: ThumbsUp, value: "98%", label: "Happy Customers" },
];

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <h1 className="text-4xl sm:text-5xl font-bold text-white mb-8 text-center">
        About <span className="text-brand-400">Junk That Car</span>
      </h1>

      {/* Story */}
      <div className="prose prose-invert max-w-none mb-16">
        <p className="text-lg text-slate-300 leading-relaxed mb-6">
          We started Junk That Car with a simple idea: selling your junk car shouldn&apos;t be a hassle. 
          Too many people let old, broken, or wrecked vehicles sit in their driveways for years because 
          they dread the process of getting rid of them. We change that.
        </p>
        <p className="text-lg text-slate-300 leading-relaxed mb-6">
          Based in the Seattle area, we&apos;re a family-owned business that believes in transparency, 
          fair pricing, and making the process as easy as possible. No gimmicks, no hidden fees — just 
          an honest offer, free towing, and cash in your hand.
        </p>
        <h2 className="text-2xl font-bold text-white mt-10 mb-4">Why We&apos;re Different</h2>
        <p className="text-lg text-slate-300 leading-relaxed mb-4">
          Unlike big national chains that treat you like a number, we take the time to understand your 
          situation. Whether your car runs or not, whether it&apos;s crashed, flooded, or missing parts — 
          we&apos;ll make you a fair offer based on the actual value of your vehicle.
        </p>
        <p className="text-lg text-slate-300 leading-relaxed">
          We handle all the paperwork, tow the vehicle for free, and pay you on the spot. Most pickups 
          happen the same day you call. That&apos;s the Junk That Car promise.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
        {stats.map(({ icon: Icon, value, label }) => (
          <div
            key={label}
            className="bg-brand-900/40 border border-brand-800 rounded-xl p-8 text-center"
          >
            <Icon className="w-8 h-8 text-brand-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-1">{value}</div>
            <div className="text-slate-400 text-sm">{label}</div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center bg-brand-900/30 border border-brand-800 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-white mb-3">Ready to sell your car?</h2>
        <p className="text-slate-400 mb-6">Get a free quote in under 2 minutes.</p>
        <a
          href="/get-quote"
          className="inline-block px-8 py-4 rounded-lg font-semibold bg-brand-500 text-white hover:bg-brand-400 transition-colors"
        >
          Get a Quote
        </a>
      </div>
    </div>
  );
}