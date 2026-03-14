import { Link } from "wouter";

export function SavingsPlan() {
  return (
    <div>
      <div className="bg-[#E8F4FA] py-16 text-center px-4">
        <h1 className="text-5xl font-bold text-[#101828] mb-4">Heritage Oak Dental Smile Club</h1>
        <p className="text-xl text-gray-600">A flexible alternative to dental insurance — no hassles, just care</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="text-center mb-14">
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            The Heritage Dental Plan is a flexible alternative to insurance. Enroll today and enjoy all the benefits of great dental care without the headaches of traditional insurance.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-14">
          {[
            { title: "No Claim Forms", icon: "📋" },
            { title: "No Deductibles", icon: "💰" },
            { title: "No Annual Maximums", icon: "📊" },
            { title: "No Waiting Period", icon: "⏱️" },
            { title: "No Limitations", icon: "🚫" },
            { title: "Specialty Discounts", icon: "✂️" },
          ].map((b) => (
            <div key={b.title} className="bg-[#E8F4FA] rounded-2xl p-8 text-center">
              <div className="text-4xl mb-3">{b.icon}</div>
              <h3 className="text-lg font-bold text-[#101828]">{b.title}</h3>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-[#1B89C5] rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Enroll?</h2>
          <p className="text-blue-100 text-lg mb-6">
            To learn more about our Smile Club savings plan, please call our office. We'll be happy to explain all the benefits and get you enrolled today!
          </p>
          <a
            href="tel:9166264050"
            className="inline-block bg-white text-[#1B89C5] font-bold px-10 py-4 rounded-full hover:bg-blue-50 transition-colors text-lg"
          >
            Call (916) 626-4050
          </a>
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-600 mb-4">Also explore our other financial options:</p>
          <Link href="/resources/finance" className="text-[#1B89C5] hover:underline font-semibold">
            View All Payment & Insurance Options →
          </Link>
        </div>
      </div>
    </div>
  );
}
