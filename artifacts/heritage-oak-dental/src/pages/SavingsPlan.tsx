import { Link } from "wouter";
import { SEOHead } from "@/components/SEOHead";

const BENEFITS = [
  { label: "2 Exams", full: false },
  { label: "1 Emergency Exam", full: false },
  { label: "2 Cleanings or 2 Periodontal Maintenance", full: false },
  { label: "2 Fluoride Treatments", full: false },
  { label: "2 Oral Cancer Screenings", full: false },
  { label: "2 Periodontal Screenings", full: false },
  { label: "All X-rays as Needed", full: false },
  { label: "15% Courtesy on all Other Services", full: false },
  { label: "15% Off Additional Cleanings or Periodontal Maintenance", full: true },
  { label: "No maximums, No deductible, and No insurance gimmicks", full: true },
];

export function SavingsPlan() {
  const half = BENEFITS.filter(b => !b.full);
  const full = BENEFITS.filter(b => b.full);

  return (
    <div>
      <SEOHead
        title="Dental Savings Plan Rocklin, CA | Heritage Oak Dental"
        description="Heritage Oak Dental's in-house savings plan in Rocklin, CA — an affordable alternative to dental insurance. Includes exams, cleanings, x-rays & 15% off services. Call (916) 626-4050."
        keywords="dental savings plan Rocklin CA, no insurance dental Rocklin, dental discount plan Rocklin, Heritage Oak Dental smile club"
        canonicalPath="/specials/savingsplan"
      />
      <div className="bg-[#E8F4FA] py-16 text-center px-4">
        <h1 className="text-5xl font-bold text-[#101828] mb-4">Heritage Oak Dental Savings Plan</h1>
        <p className="text-xl text-gray-600">A simple, affordable alternative to dental insurance</p>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="bg-[#E8F4FA] rounded-2xl p-10 mb-8">
          <h2 className="text-3xl font-bold text-[#101828] text-center mb-8">Benefits</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
            {half.map((b) => (
              <div key={b.label} className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-5 py-3.5">
                <svg className="w-4 h-4 text-[#1B89C5] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[#101828] text-sm font-medium">{b.label}</span>
              </div>
            ))}
          </div>

          {full.map((b) => (
            <div key={b.label} className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-5 py-3.5 mb-3">
              <svg className="w-4 h-4 text-[#1B89C5] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-[#101828] text-sm font-medium">{b.label}</span>
            </div>
          ))}

          <p className="text-center text-gray-500 text-sm mt-4 italic">
            (15% courtesy cannot be combined with Care Credit)
          </p>
        </div>

        {/* CTA */}
        <div className="bg-[#1B89C5] rounded-2xl p-10 text-center text-white">
          <h2 className="text-3xl font-bold mb-3">Interested?</h2>
          <p className="text-blue-100 mb-6">Give our office a call or click below to sign up.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:9166264050"
              className="inline-block bg-white text-[#1B89C5] font-bold px-8 py-3 rounded-full hover:bg-blue-50 transition-colors"
            >
              Call Now! (916) 626-4050
            </a>
            <Link
              href="/contact"
              className="inline-block border-2 border-white text-white font-bold px-8 py-3 rounded-full hover:bg-white/10 transition-colors"
            >
              Appointment Request Form
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
