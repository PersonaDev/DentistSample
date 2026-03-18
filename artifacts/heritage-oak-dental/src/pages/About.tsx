import { TEAM } from "@/lib/data";
import { SEOHead } from "@/components/SEOHead";

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.heritageoakdental.com/" },
    { "@type": "ListItem", position: 2, name: "About" },
  ],
};

export function About() {
  return (
    <>
      <SEOHead
        title="About Heritage Oak Dental | Rocklin, CA Dentist"
        description="Learn about Heritage Oak Dental in Rocklin, CA. Meet our experienced dentists, see our modern office, and discover our mission to provide exceptional dental care to families in Rocklin, Roseville, Granite Bay & Sacramento."
        keywords="about Heritage Oak Dental, Rocklin dentist, dental practice Rocklin CA, Dr Shane Douglas, Dr Ben Kloss"
        canonicalPath="/about"
        schema={BREADCRUMB_SCHEMA}
      />

      <div className="w-full overflow-hidden pt-12 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Heritage Oak Dental</h1>
            <p className="text-xl text-muted-foreground">
              Committed to providing our Rocklin community with advanced, comfortable, and personalized dental care. Proudly serving patients from Roseville, Granite Bay, Loomis, Lincoln, Folsom, and the greater Sacramento area.
            </p>
          </div>

          {/* Mission */}
          <section className="mb-24 relative rounded-[2.5rem] bg-primary text-white overflow-hidden p-8 md:p-16">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
            <div className="relative z-10 max-w-3xl">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed text-balance">
                To deliver exceptional, comprehensive dental care in a state-of-the-art, relaxing environment. We prioritize patient education, transparent communication, and clinical excellence to ensure every patient achieves and maintains optimal oral health for life.
              </p>
            </div>
          </section>

          {/* Team */}
          <section className="mb-24">
            <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Doctors</h2>
            <div className="grid md:grid-cols-2 gap-16 lg:gap-24 max-w-5xl mx-auto">
              {TEAM.map((member) => (
                <div
                  key={member.id}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-8 border-muted mb-8 relative">
                    <img
                      src={`${import.meta.env.BASE_URL}images/${member.image}`}
                      alt={`${member.name} — Rocklin, CA Dentist at Heritage Oak Dental`}
                      width={320}
                      height={320}
                      loading="lazy"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <h3 className="text-3xl font-bold mb-2">{member.name}</h3>
                  <div className="text-primary font-semibold text-lg mb-6">{member.role}</div>
                  <p className="text-muted-foreground leading-relaxed text-balance">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Office */}
          <section id="office" className="scroll-mt-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Modern Rocklin Dental Office</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  We've designed our Rocklin practice with your comfort in mind. From our welcoming reception area to our advanced treatment rooms equipped with the latest dental technology, every detail is focused on providing a positive experience for patients from Rocklin, Roseville, Granite Bay, and beyond.
                </p>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" /> Advanced 3D Imaging & Digital X-Rays
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" /> Comfortable, Relaxing Treatment Rooms
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" /> Strict Sterilization & Safety Protocols
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" /> Modern Dental Lasers & CAD/CAM Technology
                  </li>
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src={`${import.meta.env.BASE_URL}images/a6758d504bb117c420738db1478ee9000ba5bfbc.png`}
                  alt="Heritage Oak Dental exterior — Rocklin, CA dental office building"
                  width={400}
                  height={256}
                  loading="lazy"
                  className="w-full h-64 object-cover rounded-3xl shadow-lg mt-8"
                />
                <img
                  src={`${import.meta.env.BASE_URL}images/5f549c64abf6457a7542cffb4da2ec809af8586d.png`}
                  alt="Heritage Oak Dental modern treatment room interior in Rocklin, CA"
                  width={400}
                  height={256}
                  loading="lazy"
                  className="w-full h-64 object-cover rounded-3xl shadow-lg"
                />
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}
