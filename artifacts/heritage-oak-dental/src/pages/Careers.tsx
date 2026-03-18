import { SEOHead } from "@/components/SEOHead";

export function Careers() {
  return (
    <div>
      <SEOHead
        title="Dental Careers in Rocklin, CA | Heritage Oak Dental"
        description="Join the Heritage Oak Dental team in Rocklin, CA. We are looking for passionate dental professionals to serve patients in Rocklin, Roseville, Granite Bay & Sacramento. Apply today!"
        keywords="dental jobs Rocklin CA, dental careers Rocklin, dentist jobs Rocklin, dental hygienist jobs Rocklin, Heritage Oak Dental careers"
        canonicalPath="/about/careers"
      />
      <div className="bg-[#E8F4FA] py-16 text-center px-4">
        <h1 className="text-5xl font-bold text-[#101828] mb-3">Career Opportunities at Heritage Oak Dental</h1>
        <p className="text-xl text-gray-600">Join our amazing dental team at Heritage Oak Dental</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-lg text-gray-700 mb-12 text-center">
          Be part of our amazing dental team here at Heritage Oak Dental. We are currently looking for candidates for the following positions:
        </p>

        {/* Open Positions */}
        <section className="mb-14">
          <h2 className="text-3xl font-bold text-[#101828] mb-8">Open Positions</h2>
          <div className="flex flex-col gap-6">
            {[
              {
                title: "Dental Assistants (DA)",
                desc: "Support our dental team in providing exceptional patient care.",
              },
              {
                title: "Registered Dental Assistants (RDA)",
                desc: "Utilize your advanced training to assist in complex dental procedures.",
              },
              {
                title: "Receptionist",
                desc: "Be the welcoming face of Heritage Oak Dental and help patients feel at home.",
              },
            ].map((pos) => (
              <div key={pos.title} className="border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-[#101828] mb-1">{pos.title}</h3>
                <p className="text-gray-600">{pos.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What We're Looking For */}
        <section className="mb-14">
          <h2 className="text-3xl font-bold text-[#101828] mb-6">What We're Looking For</h2>
          <p className="text-gray-700 mb-6">
            We are looking for technologically savvy, caring, honest, and hard working team members.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Technologically Savvy", "Caring", "Honest", "Hard Working"].map((trait) => (
              <div key={trait} className="bg-[#E8F4FA] rounded-xl p-5 text-center font-semibold text-[#101828]">
                {trait}
              </div>
            ))}
          </div>
        </section>

        {/* Ready to Join */}
        <section className="bg-[#1B89C5] rounded-2xl p-10 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our Team?</h2>
          <p className="text-lg mb-6 text-blue-100">Please email your resume to:</p>
          <a
            href="mailto:ContactUs@HeritageOakDental.com"
            className="inline-block bg-white text-[#1B89C5] font-bold px-8 py-3 rounded-full hover:bg-blue-50 transition-colors text-lg"
          >
            ContactUs@HeritageOakDental.com
          </a>
          <p className="mt-6 text-blue-100">We look forward to hearing from you!</p>
        </section>
      </div>
    </div>
  );
}
