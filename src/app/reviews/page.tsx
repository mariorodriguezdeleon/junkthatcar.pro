import type { Metadata } from "next";
import { Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Reviews",
  description: "See what our customers say about selling their junk cars to Junk That Car. Real reviews from real people in the Seattle area.",
};

const reviews = [
  { id: "1", author: "Mike T.", location: "Seattle, WA", rating: 5, content: "Called at 10am and by 2pm my old Civic was gone and I had cash in hand. Couldn't have been easier. Highly recommend!" },
  { id: "2", author: "Sarah L.", location: "Bellevue, WA", rating: 5, content: "They offered me more than two other places I called. The driver showed up on time, was super professional, and the whole thing took 15 minutes." },
  { id: "3", author: "James K.", location: "Tacoma, WA", rating: 5, content: "My truck had been sitting in the driveway for 2 years. They towed it for free and paid me same day. Best decision I made all year." },
  { id: "4", author: "Lisa M.", location: "Kent, WA", rating: 5, content: "Fair price, fast response, zero hassle. I was dreading getting rid of my old car but Junk That Car made it painless." },
  { id: "5", author: "David R.", location: "Everett, WA", rating: 5, content: "Honest, transparent, and fast. They gave me a quote over the phone and stuck to it when they arrived. Refreshing to deal with a company that does what they say." },
  { id: "6", author: "Maria G.", location: "Renton, WA", rating: 5, content: "Needed to get rid of my son's old car that was totaled. They came the same day, handled all the paperwork, and paid me on the spot. Great experience." },
  { id: "7", author: "Chris P.", location: "Auburn, WA", rating: 4, content: "Good price and easy pickup. Only reason for 4 stars is I had to wait until the next day, but they communicated well and showed up when they said they would." },
  { id: "8", author: "Amanda W.", location: "Redmond, WA", rating: 5, content: "My car was in really rough shape — missing parts, flat tires, the works. They didn't care. Towed it away and handed me cash. Amazing service." },
];

export default function ReviewsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-jtc-charcoal mb-4">
          What Our <span className="text-brand-800">Customers Say</span>
        </h1>
        <p className="text-lg text-jtc-slate max-w-2xl mx-auto">
          Real reviews from real customers across the Seattle metro area.
        </p>
        <div className="flex items-center justify-center gap-1 mt-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
          ))}
          <span className="ml-2 text-jtc-charcoal font-medium">4.9 average</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white border border-jtc-border rounded-xl p-6"
          >
            <div className="flex items-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-slate-600"}`}
                />
              ))}
            </div>
            <p className="text-jtc-charcoal leading-relaxed mb-4">&ldquo;{review.content}&rdquo;</p>
            <div>
              <p className="text-jtc-charcoal font-medium text-sm">{review.author}</p>
              <p className="text-jtc-slate text-xs">{review.location}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <a
          href="/get-quote"
          className="inline-block px-8 py-4 rounded-lg font-semibold bg-brand-500 text-jtc-charcoal hover:bg-brand-700 hover:text-jtc-charcoal transition-colors"
        >
          Get Your Quote Now
        </a>
      </div>
    </div>
  );
}