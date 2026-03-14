import { useState } from "react";
import { useParams, Link } from "wouter";
import { ChevronDown } from "lucide-react";
import { SERVICES } from "@/lib/data";

function AccordionItem({
  title,
  content,
  callout,
  defaultOpen,
}: {
  title: string;
  content: string;
  callout: { title: string; text: string } | null;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen || false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden mb-3">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-[#101828]">{title}</span>
        <ChevronDown className={`w-5 h-5 text-[#1B89C5] transition-transform flex-shrink-0 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-6 pb-6 bg-white text-gray-700 text-sm leading-relaxed space-y-3">
          {content.split("\n\n").map((para, i) => (
            <p key={i}>{para}</p>
          ))}
          {callout && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
              <p className="font-semibold text-[#101828] mb-1">{callout.title}</p>
              <p className="text-gray-700 text-sm">{callout.text}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export function ServiceDetail() {
  const { id } = useParams();
  const service = SERVICES.find(s => s.id === id);

  if (!service) {
    return (
      <div className="py-32 text-center">
        <h1 className="text-3xl font-bold mb-4 text-[#101828]">Service not found</h1>
        <Link href="/services" className="text-[#1B89C5] hover:underline">← Back to Services</Link>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="border-b border-gray-100 py-3 px-4">
        <div className="max-w-4xl mx-auto flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-[#1B89C5] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-[#1B89C5] transition-colors">Services</Link>
          <span>/</span>
          <span className="text-[#101828] font-medium">{service.title}</span>
        </div>
      </div>

      {/* Hero - light blue gradient, no image */}
      <div className="bg-gradient-to-b from-[#E8F4FA] to-white pt-12 pb-16 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-[#101828] mb-4">
          {service.icon && <span className="mr-2 text-[#1B89C5]">{service.icon}</span>}
          {service.title} in Rocklin, CA
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">{service.subtitle}</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">

        {/* Intro card */}
        <div className="bg-[#F8FAFC] border border-gray-200 rounded-xl p-8 mb-10 text-gray-700 leading-relaxed">
          {service.intro}
        </div>

        {/* Procedure cards */}
        {service.procedures.length > 0 && (
          <section className="mb-10">
            {service.sectionTitle && (
              <h2 className="text-2xl font-bold text-[#101828] text-center mb-8">{service.sectionTitle}</h2>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.procedures.map((proc) => (
                <div key={proc.title} className="border border-gray-200 rounded-xl p-6 hover:border-[#1B89C5] hover:shadow-sm transition-all">
                  <h3 className="font-bold text-[#101828] mb-2">{proc.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{proc.desc}</p>
                  <span className="text-[#1B89C5] text-sm font-semibold">Learn More →</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Accordion sections */}
        {service.accordions.length > 0 && (
          <section className="mb-10">
            {service.accordions.map((acc, i) => (
              <AccordionItem
                key={acc.title}
                title={acc.title}
                content={acc.content}
                callout={acc.callout}
                defaultOpen={i === 0}
              />
            ))}
          </section>
        )}

        {/* CTA */}
        <div className="bg-[#1B89C5] rounded-2xl p-10 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Ready to Schedule?</h2>
          <p className="text-blue-100 mb-6">Contact Heritage Oak Dental today to book your appointment.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:9166264050" className="inline-block bg-white text-[#1B89C5] font-bold px-8 py-3 rounded-full hover:bg-blue-50 transition-colors">
              Call (916) 626-4050
            </a>
            <Link href="/contact" className="inline-block border-2 border-white text-white font-bold px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
              Request Appointment
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
