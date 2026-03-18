import React, { useState } from "react";
import { useParams, Link } from "wouter";
import { ChevronDown } from "lucide-react";
import { SERVICES, Block, PageSection } from "@/lib/data";
import { SEOHead } from "@/components/SEOHead";

const SITE_URL = "https://www.heritageoakdental.com";

const SERVICE_SEO: Record<string, { title: string; description: string; keywords: string }> = {
  general:      { title: "General Dentistry in Rocklin, CA", description: "Professional general dentistry at Heritage Oak Dental in Rocklin, CA — teeth cleanings, exams, fillings, crowns & more. Serving Rocklin, Roseville, Granite Bay & Loomis. Call (916) 626-4050.", keywords: "general dentistry Rocklin CA, teeth cleaning Rocklin, dental exam Rocklin, dental fillings Rocklin, family dentist Rocklin" },
  cosmetic:     { title: "Cosmetic Dentistry in Rocklin, CA", description: "Transform your smile with cosmetic dentistry at Heritage Oak Dental in Rocklin, CA. Teeth whitening, veneers, bonding & smile makeovers. Serving Rocklin, Roseville, Granite Bay & Sacramento.", keywords: "cosmetic dentistry Rocklin CA, teeth whitening Rocklin, porcelain veneers Rocklin, smile makeover Rocklin" },
  implant:      { title: "Dental Implants in Rocklin, CA", description: "Restore missing teeth with dental implants at Heritage Oak Dental in Rocklin, CA. Permanent, natural-looking results. Serving Rocklin, Roseville, Granite Bay & Loomis. Call (916) 626-4050.", keywords: "dental implants Rocklin CA, tooth implant Rocklin, implant dentist Rocklin, missing teeth Rocklin" },
  orthodontics: { title: "Orthodontics & Invisalign in Rocklin, CA", description: "Straighten your smile with braces or Invisalign at Heritage Oak Dental in Rocklin, CA. Orthodontic care for teens and adults. Serving Rocklin, Roseville, Granite Bay & Sacramento.", keywords: "orthodontics Rocklin CA, Invisalign Rocklin, braces Rocklin, clear aligners Rocklin, teeth straightening Rocklin" },
  pediatric:    { title: "Pediatric Dentistry in Rocklin, CA", description: "Gentle, fun dental care for kids at Heritage Oak Dental in Rocklin, CA. Our child-friendly team makes every visit positive. Serving families in Rocklin, Roseville, Granite Bay & Loomis.", keywords: "pediatric dentistry Rocklin CA, kids dentist Rocklin, children's dentist Rocklin, baby teeth Rocklin" },
  oral:         { title: "Oral Surgery in Rocklin, CA", description: "Expert oral surgery including tooth extractions and wisdom teeth removal at Heritage Oak Dental in Rocklin, CA. Serving Rocklin, Roseville, Granite Bay & Sacramento. Call (916) 626-4050.", keywords: "oral surgery Rocklin CA, tooth extraction Rocklin, wisdom teeth removal Rocklin, oral surgeon Rocklin" },
  restorative:  { title: "Restorative Dentistry in Rocklin, CA", description: "Rebuild your smile with restorative dentistry at Heritage Oak Dental in Rocklin, CA. Crowns, bridges, dentures & more. Serving Rocklin, Roseville, Granite Bay & Sacramento.", keywords: "restorative dentistry Rocklin CA, dental crowns Rocklin, dental bridges Rocklin, dentures Rocklin" },
  sedation:     { title: "Sedation Dentistry in Rocklin, CA", description: "Anxiety-free dental care with sedation dentistry at Heritage Oak Dental in Rocklin, CA. Nitrous oxide, oral sedation & IV sedation available. Serving Rocklin, Roseville, Granite Bay & Loomis.", keywords: "sedation dentistry Rocklin CA, dental anxiety Rocklin, IV sedation Rocklin, laughing gas Rocklin" },
  periodontics: { title: "Periodontics & Gum Disease Treatment Rocklin", description: "Protect your gums with periodontic care at Heritage Oak Dental in Rocklin, CA. Scaling, root planing & gum disease treatment. Serving Rocklin, Roseville, Granite Bay & Sacramento.", keywords: "periodontics Rocklin CA, gum disease treatment Rocklin, scaling root planing Rocklin, periodontist Rocklin" },
};

function renderBlock(block: Block, idx: number): React.ReactElement {
  if (typeof block === "string") {
    return (
      <p key={idx} className="text-gray-700 leading-relaxed mb-3">
        {block}
      </p>
    );
  }
  if ("bullets" in block) {
    return (
      <ul key={idx} className="space-y-1.5 mb-3">
        {block.bullets.map((item, i) => (
          <li key={i} className="flex gap-2.5 text-gray-700 leading-relaxed">
            <span className="text-[#1B89C5] mt-1 flex-shrink-0 font-bold text-xs">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }
  if ("numbered" in block) {
    return (
      <ol key={idx} className="list-decimal list-inside space-y-1.5 mb-3">
        {block.numbered.map((item, i) => (
          <li key={i} className="text-gray-700 leading-relaxed">
            {item}
          </li>
        ))}
      </ol>
    );
  }
  if ("sub" in block) {
    return (
      <div key={idx} className="mb-4">
        <h3 className="font-bold text-[#101828] mb-2 text-base">{block.sub}</h3>
        <div className="ml-0">
          {block.blocks.map((b, i) => renderBlock(b, i))}
        </div>
      </div>
    );
  }
  return <></>;
}

function SectionCard({ section }: { section: PageSection }) {
  const isYellow = section.variant === "yellow";
  return (
    <div
      className={[
        "rounded-xl p-6 sm:p-8 mb-6 shadow-sm border-l-4",
        isYellow
          ? "bg-yellow-50 border-l-yellow-400"
          : "bg-white border-l-[#1B89C5] border border-gray-100",
      ].join(" ")}
    >
      {section.title && (
        <h2
          className={[
            "text-xl font-bold mb-4",
            isYellow ? "text-[#7A5C00]" : "text-[#101828]",
          ].join(" ")}
        >
          {section.title}
        </h2>
      )}
      {section.blocks.map((block, i) => renderBlock(block, i))}
    </div>
  );
}

function AccordionItem({ title, content }: { title: string; content: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden mb-3">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
        aria-expanded={open}
      >
        <span className="font-semibold text-[#101828]">{title}</span>
        <ChevronDown
          className={`w-5 h-5 text-[#1B89C5] transition-transform flex-shrink-0 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-6 pb-6 bg-white text-gray-700 text-sm leading-relaxed space-y-3">
          {content.split("\n\n").map((para, i) => (
            <p key={i}>{para}</p>
          ))}
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

  const seo = SERVICE_SEO[service.id] ?? {
    title: `${service.title} in Rocklin, CA`,
    description: `${service.subtitle} Heritage Oak Dental in Rocklin, CA serves patients from Rocklin, Roseville, Granite Bay & Sacramento. Call (916) 626-4050.`,
    keywords: `${service.title} Rocklin CA, dentist Rocklin`,
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: seo.title,
    description: seo.description,
    provider: {
      "@type": "Dentist",
      name: "Heritage Oak Dental",
      telephone: "+1-916-626-4050",
      address: {
        "@type": "PostalAddress",
        streetAddress: "3700 Atherton Rd",
        addressLocality: "Rocklin",
        addressRegion: "CA",
        postalCode: "95765",
        addressCountry: "US",
      },
    },
    areaServed: [
      { "@type": "City", name: "Rocklin" },
      { "@type": "City", name: "Roseville" },
      { "@type": "City", name: "Granite Bay" },
      { "@type": "City", name: "Loomis" },
      { "@type": "City", name: "Sacramento" },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
      { "@type": "ListItem", position: 3, name: service.title },
    ],
  };

  const relatedServices = service.relatedIds
    .map(rid => SERVICES.find(s => s.id === rid))
    .filter(Boolean) as typeof SERVICES;

  const hasPageSections = service.pageSections && service.pageSections.length > 0;

  const ctaTitle = {
    general: "Schedule Your Next Dental Exam",
    implant: "Ready to Restore Your Smile?",
    oral: "Schedule a Consultation",
    orthodontics: "Ready to Start Your Orthodontic Journey?",
    pediatric: "Bring Your Child for a Visit!",
    sedation: "Ready for a Stress-Free Dental Visit?",
    cosmetic: "Ready to Transform Your Smile?",
    restorative: "Ready to Get Started?",
    periodontics: "Protect Your Gum Health",
  }[service.id] ?? "Ready to Schedule?";

  const ctaBody = {
    general: "Regular preventive care is the foundation of excellent oral health. Contact us today to schedule your appointment.",
    implant: "Schedule a consultation to learn more about dental implants and whether they're right for you.",
    oral: "Our experienced team is here to provide expert surgical care with your comfort in mind.",
    orthodontics: "Schedule a consultation to discuss the best orthodontic treatment options for your smile.",
    pediatric: "Schedule your child's dental appointment today. We provide gentle, comprehensive care for patients of all ages.",
    sedation: "Talk to us about sedation options and how we can make your next appointment comfortable and anxiety-free.",
    cosmetic: "Schedule a consultation with our experienced cosmetic dentistry team today.",
    restorative: "Schedule a consultation to learn more about how restorative dentistry can benefit you.",
    periodontics: "Contact us today to schedule a periodontal evaluation and take the first step toward healthier gums.",
  }[service.id] ?? "Call us at (916) 626-4050 or request an appointment online.";

  return (
    <>
      <SEOHead
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonicalPath={`/services/${service.id}`}
        schema={[serviceSchema, breadcrumbSchema]}
      />

      <div className="bg-[#F8FAFC]">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="bg-white border-b border-gray-100 py-3 px-4">
          <div className="max-w-4xl mx-auto flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-[#1B89C5] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-[#1B89C5] transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[#101828] font-medium">{service.title}</span>
          </div>
        </nav>

        {/* Hero */}
        <div className="bg-gradient-to-b from-[#E8F4FA] to-[#F8FAFC] pt-12 pb-14 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#101828] mb-4">
            {service.title} in Rocklin, CA
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{service.subtitle}</p>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">

          {/* Intro card */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 mb-6 shadow-sm">
            {service.intro.split("\n\n").map((para, i) => (
              <p key={i} className="text-gray-700 leading-relaxed mb-3 last:mb-0">{para}</p>
            ))}
          </div>

          {/* Rich Section Cards */}
          {hasPageSections && service.pageSections!.map((section, i) => (
            <SectionCard key={i} section={section} />
          ))}

          {/* Accordion Procedures */}
          {!hasPageSections && service.procedures.length > 0 && (
            <section className="mb-6">
              <h2 className="text-2xl font-bold text-[#101828] mb-6">Procedures We Offer</h2>
              {service.procedures.map(proc => (
                <AccordionItem key={proc.title} title={proc.title} content={proc.content} />
              ))}
            </section>
          )}

          {/* Why Choose Heritage Oak Dental */}
          {!hasPageSections && (
            <section className="mb-6 bg-[#E8F4FA] rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-[#101828] mb-4">Why Choose Heritage Oak Dental in Rocklin?</h2>
              <p className="text-gray-700 leading-relaxed">{service.whyUs}</p>
            </section>
          )}

          {/* CTA */}
          <div className="bg-[#1B89C5] rounded-2xl p-10 text-center text-white mb-8">
            <h2 className="text-2xl font-bold mb-3">{ctaTitle}</h2>
            <p className="text-blue-100 mb-6 max-w-xl mx-auto">{ctaBody}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:9166264050"
                className="inline-block bg-white text-[#1B89C5] font-bold px-8 py-3 rounded-full hover:bg-blue-50 transition-colors"
              >
                Call (916) 626-4050
              </a>
              <Link
                href="/contact"
                className="inline-block border-2 border-white text-white font-bold px-8 py-3 rounded-full hover:bg-white/10 transition-colors"
              >
                Request an Appointment
              </Link>
            </div>
          </div>

          {/* Related Services */}
          {relatedServices.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-[#101828] mb-6">Related Dental Services in Rocklin</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {relatedServices.map(rel => (
                  <Link
                    key={rel.id}
                    href={`/services/${rel.id}`}
                    className="bg-white border border-gray-200 rounded-xl p-6 hover:border-[#1B89C5] hover:shadow-sm transition-all group"
                    aria-label={`Learn about ${rel.title} at Heritage Oak Dental`}
                  >
                    <h3 className="font-bold text-[#101828] mb-2 group-hover:text-[#1B89C5] transition-colors">
                      {rel.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">{rel.description}</p>
                    <span className="text-[#1B89C5] text-sm font-semibold">Learn More →</span>
                  </Link>
                ))}
              </div>
            </section>
          )}

        </div>
      </div>
    </>
  );
}
