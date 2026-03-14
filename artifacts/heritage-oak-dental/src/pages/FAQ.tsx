import { useState } from "react";
import { Link } from "wouter";

const FAQS = [
  {
    q: "What is the best dentist in Rocklin, CA?",
    a: "Heritage Oak Dental is consistently rated one of the top dental practices in Rocklin, CA. Our team of experienced dentists, Dr. Shane Douglas and Dr. Ben Kloss, are committed to providing exceptional, patient-centered care. We've received hundreds of 5-star reviews from patients throughout Rocklin, Roseville, Granite Bay, and Lincoln.",
  },
  {
    q: "Does this Rocklin dentist accept my insurance?",
    a: "Heritage Oak Dental is a preferred provider for most PPO insurance plans including Delta Dental PPO & Premier, Cigna, Metlife, United Concordia, UnitedHealthcare, Humana, Guardian, Ameritas, Anthem BCBS, and many more. We also offer our Heritage Oak Dental Smile Club as an in-house alternative to insurance. Please call our office at (916) 626-4050 to verify your specific plan.",
  },
  {
    q: "What dental services are offered at Heritage Oak Dental in Rocklin?",
    a: "We offer a comprehensive range of dental services including general dentistry, cosmetic dentistry, dental implants, orthodontics (including Invisalign), pediatric dentistry, oral surgery, sedation dentistry, and periodontics. Our office features the latest dental technology including digital X-rays, 3D imaging, and CAD/CAM for same-day crowns.",
  },
  {
    q: "How do I schedule a dental appointment in Rocklin, CA?",
    a: "You can schedule an appointment by calling our office at (916) 626-4050, texting us at the same number, or filling out our online contact form. We serve patients from Rocklin, Roseville, Granite Bay, Lincoln, Loomis, Auburn, and surrounding areas.",
  },
  {
    q: "Does Heritage Oak Dental offer teeth cleaning in Rocklin?",
    a: "Yes! Routine teeth cleanings are one of our most common services. Our skilled dental hygienists provide thorough cleanings and work with you to maintain excellent oral hygiene. We recommend cleanings every six months for most patients.",
  },
  {
    q: "Is Heritage Oak Dental a good family dentist in Rocklin?",
    a: "Absolutely. Heritage Oak Dental is a family-friendly practice that sees patients of all ages. We have a dedicated kids' play area to make visits fun and comfortable for our youngest patients, and our team is experienced in treating the whole family.",
  },
  {
    q: "What cosmetic dentistry options are available in Rocklin, CA?",
    a: "We offer a full range of cosmetic dental services including professional teeth whitening, porcelain veneers, dental bonding, smile makeovers, and more. Schedule a consultation with Dr. Douglas or Dr. Kloss to discuss your smile goals.",
  },
  {
    q: "Does Heritage Oak Dental offer Invisalign in Rocklin?",
    a: "Yes, we offer Invisalign clear aligner therapy for teens and adults. Invisalign is a discreet, comfortable alternative to traditional braces. CareCredit financing is available, including up to 18 months interest-free for Invisalign treatment.",
  },
  {
    q: "What sedation dentistry options does Heritage Oak Dental offer?",
    a: "We offer several sedation options including nitrous oxide (laughing gas), oral conscious sedation, and IV sedation. Our team will help determine the best option for your comfort level and the procedure being performed.",
  },
  {
    q: "Are dental implants available at Heritage Oak Dental in Rocklin?",
    a: "Yes! We provide dental implant services to restore missing teeth permanently. Implants look, feel, and function like natural teeth. Our team will evaluate your candidacy and walk you through the entire process.",
  },
  {
    q: "What are the office hours for Heritage Oak Dental in Rocklin?",
    a: "We are open Monday through Thursday from 7:30 AM to 6:00 PM, and Friday from 8:00 AM to 4:00 PM (administrative hours only). We are closed on weekends.",
  },
  {
    q: "Does Heritage Oak Dental treat dental emergencies in Rocklin?",
    a: "Yes, we strive to accommodate dental emergencies as quickly as possible. If you are experiencing a dental emergency, please call our office immediately at (916) 626-4050.",
  },
  {
    q: "Where is Heritage Oak Dental located?",
    a: "We are located at 3700 Atherton Rd, Rocklin, CA 95765. We are conveniently situated to serve patients from Rocklin, Roseville, Granite Bay, Lincoln, Loomis, Auburn, Citrus Heights, and Sacramento.",
  },
  {
    q: "What makes Heritage Oak Dental different from other dentists in Rocklin?",
    a: "Heritage Oak Dental combines state-of-the-art technology with genuine, personalized care. Our dentists take time to listen to your concerns, explain treatment options clearly, and ensure you feel comfortable every step of the way. Our beautiful, modern facility and friendly team make every visit a positive experience.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left py-5 flex justify-between items-center gap-4 group"
      >
        <h2 className="text-lg font-semibold text-[#101828] group-hover:text-[#1B89C5] transition-colors">{q}</h2>
        <svg
          className={`w-5 h-5 text-[#1B89C5] flex-shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="pb-5 pr-8">
          <p className="text-gray-700 leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export function FAQ() {
  return (
    <div>
      <div className="bg-[#E8F4FA] py-16 text-center px-4">
        <h1 className="text-4xl font-bold text-[#101828] mb-4">
          Frequently Asked Questions About Our Rocklin Dental Office
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Find answers to common questions about Heritage Oak Dental, your trusted dentist in Rocklin, CA. From dental services and insurance to appointments and office hours, we've got you covered. Proudly serving families in Rocklin, Roseville, Granite Bay, and Lincoln.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          {FAQS.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>

        {/* CTA */}
        <div className="bg-[#E8F4FA] rounded-2xl p-10 text-center mb-14">
          <h2 className="text-2xl font-bold text-[#101828] mb-4">Still Have Questions? Contact Our Rocklin Dental Office</h2>
          <p className="text-gray-600 mb-6">
            Our friendly team at Heritage Oak Dental is here to help. Whether you need to schedule an appointment or have questions about your dental care, don't hesitate to reach out.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:9166264050" className="inline-block bg-[#1B89C5] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#1578ad] transition-colors">
              Call (916) 626-4050
            </a>
            <Link href="/contact" className="inline-block border-2 border-[#1B89C5] text-[#1B89C5] font-semibold px-8 py-3 rounded-full hover:bg-[#E8F4FA] transition-colors">
              Visit Our Office
            </Link>
          </div>
          <p className="text-gray-500 text-sm mt-6">Heritage Oak Dental • 3700 Atherton Rd, Rocklin, CA 95765 • (916) 626-4050</p>
        </div>

        {/* Services Grid */}
        <h2 className="text-2xl font-bold text-[#101828] mb-6">Explore Our Dental Services in Rocklin, CA</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "General Dentistry", id: "general" },
            { label: "Cosmetic Dentistry", id: "cosmetic" },
            { label: "Dental Implants", id: "implant" },
            { label: "Orthodontics", id: "orthodontics" },
            { label: "Pediatric Dentistry", id: "pediatric" },
            { label: "Oral Surgery", id: "oral-surgery" },
            { label: "Sedation Dentistry", id: "sedation" },
            { label: "Periodontics", id: "periodontics" },
          ].map((s) => (
            <Link key={s.id} href={`/services/${s.id}`} className="p-4 border border-gray-200 rounded-xl text-center hover:border-[#1B89C5] hover:bg-blue-50/30 transition-all">
              <span className="font-semibold text-[#101828] text-sm block mb-1">{s.label}</span>
              <span className="text-xs text-gray-500">Rocklin, CA</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
