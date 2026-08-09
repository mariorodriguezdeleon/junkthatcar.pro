import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for Junk That Car. By using our website and services, you agree to these terms.",
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
      <p className="text-slate-400 mb-6">Last updated: January 2026</p>

      <div className="prose prose-invert max-w-none space-y-6">
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
          <p className="text-slate-300 leading-relaxed">
            By accessing and using {SITE.domain}, you agree to be bound by these Terms of Service.
            If you do not agree, please do not use our website or services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">2. Services</h2>
          <p className="text-slate-300 leading-relaxed">
            {SITE.name} provides junk car buying and removal services in the Seattle metro area.
            Quotes provided are estimates based on the information you supply. Final offers are
            determined upon vehicle inspection at the time of pickup.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">3. Vehicle Ownership</h2>
          <p className="text-slate-300 leading-relaxed">
            By selling a vehicle to {SITE.name}, you represent and warrant that you are the legal
            owner of the vehicle and have the right to sell it. You agree to provide accurate
            information about the vehicle&apos;s condition and ownership status.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">4. Payment</h2>
          <p className="text-slate-300 leading-relaxed">
            Payment is made at the time of vehicle pickup. We pay by cash or check, at our discretion.
            You must be present at the time of pickup with valid identification.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">5. Limitation of Liability</h2>
          <p className="text-slate-300 leading-relaxed">
            {SITE.name} is not liable for any indirect, incidental, or consequential damages arising
            from the use of our website or services. Our liability is limited to the purchase price
            of the vehicle.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">6. Changes to Terms</h2>
          <p className="text-slate-300 leading-relaxed">
            We reserve the right to modify these terms at any time. Changes take effect immediately
            upon posting. Continued use of the site constitutes acceptance of the updated terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">7. Contact</h2>
          <p className="text-slate-300 leading-relaxed">
            Questions about these terms? Contact us at {SITE.email} or {SITE.phone}.
          </p>
        </section>
      </div>
    </div>
  );
}