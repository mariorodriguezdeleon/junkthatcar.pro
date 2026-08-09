import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Junk That Car. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
      <p className="text-slate-400 mb-6">Last updated: January 2026</p>

      <div className="prose prose-invert max-w-none space-y-6">
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">1. Information We Collect</h2>
          <p className="text-slate-300 leading-relaxed">
            When you submit a quote request on {SITE.domain}, we collect the following information:
            your name, email address, phone number, vehicle details (year, make, model, condition), zip code,
            and any additional notes you provide.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">2. How We Use Your Information</h2>
          <p className="text-slate-300 leading-relaxed">
            We use your information solely to provide you with a quote for your junk car, communicate
            with you about the pickup process, and improve our services. We do not sell, rent, or share
            your personal information with third parties for marketing purposes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">3. Data Storage</h2>
          <p className="text-slate-300 leading-relaxed">
            Quote submissions are processed through HubSpot, our customer relationship management
            platform. HubSpot&apos;s privacy and security practices can be found on their website.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">4. Cookies</h2>
          <p className="text-slate-300 leading-relaxed">
            Our website may use essential cookies for functionality purposes. We do not use tracking
            cookies or advertising cookies.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">5. Your Rights</h2>
          <p className="text-slate-300 leading-relaxed">
            You may request that we delete your personal information at any time by contacting us at{" "}
            {SITE.email}. We will comply with your request within 30 days.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">6. Contact</h2>
          <p className="text-slate-300 leading-relaxed">
            If you have questions about this privacy policy, contact us at{" "}
            {SITE.email} or call {SITE.phone}.
          </p>
        </section>
      </div>
    </div>
  );
}