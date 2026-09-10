import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import { SERVICE_AREAS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Service Areas",
  description: "Junk That Car serves the greater Seattle metro area including King, Pierce, and Snohomish counties. Free towing — find out if we're in your area.",
};

export default function ServiceAreasPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-jtc-charcoal mb-4">
          We Service the <span className="text-brand-800">Greater Seattle Area</span>
        </h1>
        <p className="text-lg text-jtc-slate max-w-2xl mx-auto">
          Free towing across King, Pierce, and Snohomish counties. If you&apos;re in the Seattle metro, we&apos;ll pick up your car — no charge.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICE_AREAS.map((area) => (
          <div
            key={area.city}
            className="bg-white border border-jtc-border rounded-xl p-6 hover:border-brand-500 transition-colors"
          >
            <div className="flex items-center gap-3 mb-3">
              <MapPin className="w-5 h-5 text-brand-800 flex-shrink-0" />
              <h2 className="text-lg font-semibold text-jtc-charcoal">{area.city}</h2>
            </div>
            <p className="text-sm text-jtc-slate mb-2">{area.county} County</p>
            <p className="text-xs text-jtc-slate">
              {area.zipCodes.length} zip codes covered
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center bg-white border border-jtc-border rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-jtc-charcoal mb-3">Don&apos;t see your city?</h2>
        <p className="text-jtc-slate mb-6">
          We&apos;re always expanding. Give us a call or fill out a quote — we might still be able to help.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/get-quote"
            className="px-6 py-3 rounded-lg font-semibold bg-brand-500 text-jtc-charcoal hover:bg-brand-800 hover:text-jtc-charcoal transition-colors"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </div>
  );
}