import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

/*
 * ════════════════════════════════════════════════════════════════════
 * NOTE TO FUTURE US (2026-09-10) — REAL REVIEWS GO HERE
 * ════════════════════════════════════════════════════════════════════
 * The original version of this page displayed 8 fabricated testimonials
 * with a "4.9 average" aggregate rating. That was removed for FTC
 * compliance (16 CFR Part 465 — fake reviews are a civil violation,
 * and this page claimed "Real reviews from real customers").
 *
 * WHEN REAL REVIEWS EXIST (Google Business Profile, Yelp, customer
 * texts — verbatim, with written permission):
 *
 *   1. Restore the reviews array + card grid (see git history:
 *      `git log --oneline -- src/app/reviews/page.tsx` — the pre-2026-09-10
 *      version has the layout ready to adapt).
 *   2. Use real quotes VERBATIM — no edits, no composites.
 *   3. Add schema.org `Review` / `AggregateRating` structured data —
 *      only with real underlying data (fabricated schema = same
 *      violation + a search-engine penalty).
 *   4. Re-add "Reviews" to NAV_LINKS in src/lib/constants.ts (currently
 *      commented out below in this file's companion edit).
 *   5. Restore the homepage "What Our Customers Say" section if desired
 *      (also visible in git history).
 *
 * Until then, this page stays honest-by-default (see markup below).
 * ════════════════════════════════════════════════════════════════════
 */

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Junk That Car is a new business building its reputation one pickup at a time. Free towing, cash on pickup, and a quote that doesn't change when the truck shows up.",
};

export default function ReviewsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
      <h1 className="text-4xl sm:text-5xl font-bold text-jtc-charcoal mb-6">
        Reviews
      </h1>

      <div className="rounded-2xl border border-jtc-border bg-white p-8 sm:p-10 text-left">
        <p className="text-lg text-jtc-charcoal leading-relaxed">
          We&apos;re a new business, and we&apos;d rather show you nothing than
          show you something we made up.
        </p>
        <p className="mt-4 text-jtc-slate leading-relaxed">
          We&apos;re collecting reviews from our first customers now. If
          we&apos;ve towed your car, we&apos;d be grateful for an honest word —
          good or bad — on our Google listing.
        </p>
        <p className="mt-4 text-jtc-slate leading-relaxed">
          In the meantime: free towing, cash on pickup, and a quote that
          doesn&apos;t change when the truck shows up. Call{" "}
          <a
            href={SITE.phoneHref}
            className="font-semibold text-brand-800 hover:text-brand-500 transition-colors"
          >
            {SITE.phone}
          </a>{" "}
          and hold us to it.
        </p>
      </div>

      <div className="mt-12">
        <a
          href="/get-quote"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold bg-brand-500 text-jtc-charcoal hover:bg-brand-800 hover:text-white transition-colors"
        >
          Get Your Quote
        </a>
      </div>
    </div>
  );
}
