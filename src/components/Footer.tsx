import Link from "next/link";
import { SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-brand-950 border-t border-brand-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-white mb-3">{SITE.name}</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              We buy junk cars in the Seattle metro area. Fast, fair, and free towing — any condition.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-3">Pages</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-slate-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/get-quote" className="text-sm text-slate-400 hover:text-white transition-colors">Get a Quote</Link></li>
              <li><Link href="/service-areas" className="text-sm text-slate-400 hover:text-white transition-colors">Service Areas</Link></li>
              <li><Link href="/reviews" className="text-sm text-slate-400 hover:text-white transition-colors">Reviews</Link></li>
            </ul>
          </div>

          {/* More links */}
          <div>
            <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-3">Info</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-slate-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/faq" className="text-sm text-slate-400 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/privacy" className="text-sm text-slate-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm text-slate-400 hover:text-white transition-colors">Terms</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-3">Contact</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>{SITE.phone}</li>
              <li>{SITE.email}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-brand-800 text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}