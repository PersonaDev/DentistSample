import { Link } from "wouter";
import {
  ArrowRight,
  Star,
  Clock,
  MapPin,
  Mail,
  Calendar,
  Phone,
  Sparkles,
  ShieldCheck,
  Zap,
  Stethoscope,
  AlignCenter,
  Heart,
  Leaf,
  Wrench,
  Moon,
} from "lucide-react";
import { SERVICES, TEAM } from "@/lib/data";
import { Button } from "@/components/ui/Button";

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  cosmetic: <Sparkles className="w-7 h-7" />,
  general: <ShieldCheck className="w-7 h-7" />,
  implant: <Zap className="w-7 h-7" />,
  oral: <Stethoscope className="w-7 h-7" />,
  orthodontics: <AlignCenter className="w-7 h-7" />,
  pediatric: <Heart className="w-7 h-7" />,
  periodontics: <Leaf className="w-7 h-7" />,
  restorative: <Wrench className="w-7 h-7" />,
  sedation: <Moon className="w-7 h-7" />,
};

export function Home() {
  return (
    <div className="w-full -mt-[75px] lg:-mt-[104px]">
      {/* HERO SECTION — image contained with breathing room */}
      <section
        className="relative"
        style={{ background: "#68bdd8", paddingTop: "104px", paddingBottom: "40px" }}
      >
        {/* Image — true to size, padded on all sides */}
        <div className="px-10 sm:px-14 lg:px-20">
          <img
            src={`${import.meta.env.BASE_URL}images/hero-smile.png`}
            alt="Happy patient with a beautiful smile at Heritage Oak Dental in Rocklin, CA"
            className="w-full block rounded-2xl"
            loading="eager"
            fetchPriority="high"
          />
        </div>

        {/* Soft vignette over image */}
        <div
          className="absolute rounded-2xl pointer-events-none"
          style={{ inset: "104px 40px 40px 40px", background: "linear-gradient(to right, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.04) 50%, transparent 100%)" }}
        />

        {/* Glass card — floats over the left of the image */}
        <div
          className="absolute flex items-center px-16 sm:px-20 lg:px-28"
          style={{ inset: "104px 0 40px 0" }}
        >
          <div
            className="w-full max-w-[580px] xl:max-w-[640px] rounded-[28px] p-10 xl:p-14"
            style={{
              background: "rgba(255, 255, 255, 0.82)",
              backdropFilter: "blur(28px)",
              WebkitBackdropFilter: "blur(28px)",
              border: "1px solid rgba(255, 255, 255, 0.9)",
              boxShadow: "0 12px 60px rgba(0, 0, 0, 0.18), 0 2px 12px rgba(0,0,0,0.08)",
            }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/12 text-primary text-sm font-semibold mb-7 w-fit ring-1 ring-primary/20">
              <Star className="w-4 h-4 fill-primary" />
              4.9★ Rated · Top Dentist in Rocklin, CA
            </div>

            <h1 className="font-bold text-foreground leading-[1.08] mb-5">
              <span className="block text-[38px] sm:text-[48px] lg:text-[52px] xl:text-[58px] tracking-tight">Welcome to</span>
              <span className="block text-[38px] sm:text-[48px] lg:text-[52px] xl:text-[58px] tracking-tight text-primary">Heritage Oak Dental</span>
              <span className="block text-lg sm:text-xl font-normal text-slate-500 mt-3 leading-snug">Your trusted family dentist in Rocklin, CA</span>
            </h1>

            <p className="text-base text-slate-600 mb-8 leading-relaxed max-w-md">
              Comprehensive, compassionate dental care for families across Rocklin, Roseville, Granite Bay, and the greater Sacramento area. We make every visit comfortable and worth smiling about.
            </p>

            <div className="flex flex-wrap gap-3 mb-9">
              <a href="tel:9166264050">
                <Button size="lg" className="gap-2 shadow-lg shadow-primary/30 px-7 h-12 text-base">
                  <Phone className="w-5 h-5" />
                  Call (916) 626-4050
                </Button>
              </a>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="px-7 h-12 text-base bg-white/70 hover:bg-white border-white/90 shadow-sm">
                  Book an Appointment
                </Button>
              </Link>
            </div>

            {/* Trust stats */}
            <div className="flex gap-10 pt-7 border-t border-slate-200/80">
              {[
                ["4.9 ★", "Patient Rating"],
                ["165+", "Google Reviews"],
                ["15+", "Years in Rocklin"],
              ].map(([num, label]) => (
                <div key={label}>
                  <p className="text-2xl font-bold text-foreground leading-none mb-1">{num}</p>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* SERVICES GRID */}
      <section
        className="py-20 relative"
        style={{
          background:
            "linear-gradient(135deg, #0d6ea0 0%, #1B89C5 45%, #1a7db5 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Dental Services in Rocklin, CA
            </h2>
            <p className="text-lg text-blue-100">
              Whatever your dental needs we are ready to provide you with
              exceptional care. Your smile is our priority.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.id}`}
                className="group flex items-start gap-4 p-5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 transition-all duration-200 backdrop-blur-sm"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/20 group-hover:bg-white/30 flex items-center justify-center text-white transition-colors">
                  {SERVICE_ICONS[service.id]}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-white mb-1">{service.title}</h3>
                  <p className="text-blue-100 text-sm line-clamp-2 leading-snug">
                    {service.description}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/services">
              <span className="inline-block bg-white text-[#1B89C5] font-bold px-8 py-3 rounded-full hover:bg-blue-50 transition-colors shadow-lg">
                View All Services
              </span>
            </Link>
          </div>
        </div>
      </section>
      {/* VIDEO TOUR SECTION */}
      <section className="py-24 bg-muted relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Experience Heritage Oak Dental in Rocklin
            </h2>
            <p className="text-lg text-muted-foreground text-balance">
              Take a virtual tour of our modern dental practice and see why
              families throughout Rocklin trust us for their dental care.
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white bg-black aspect-video">
            <iframe
              src="https://www.youtube.com/embed/dbYF0DRuwhs"
              title="Heritage Oak Dental Tour"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>
      {/* MEET THE DENTISTS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Meet the Rocklin Dentists
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {TEAM.map((member) => (
              <div key={member.id} className="text-center group">
                <div className="relative w-64 h-64 mx-auto mb-6 rounded-full overflow-hidden border-4 border-muted group-hover:border-primary/30 transition-colors">
                  <img
                    src={`${import.meta.env.BASE_URL}images/${member.image}`}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-4">{member.role}</p>
                <p className="text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/about">
              <Button variant="outline" size="lg">
                Learn More About Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* LOCATION & HOURS */}
      <section className="py-24 bg-muted relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Hours — full width */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-border/50 mb-12">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <div className="p-3 bg-primary/10 rounded-xl">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              Dental Office Hours in Rocklin
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { day: "Monday", hours: "7:30AM – 6:00PM" },
                { day: "Tuesday", hours: "7:30AM – 6:00PM" },
                { day: "Wednesday", hours: "7:30AM – 6:00PM" },
                { day: "Thursday", hours: "7:30AM – 6:00PM" },
                { day: "Friday", hours: "8:00AM – 4:00PM*", muted: true },
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-1 border border-border/50 rounded-xl px-4 py-3 bg-muted/40">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wide">{item.day}</span>
                  <span className={`text-sm font-medium ${item.muted ? "text-muted-foreground" : "text-foreground"}`}>{item.hours}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-6 pt-6 border-t border-border/50 gap-4">
              <p className="text-sm text-muted-foreground italic">*Administrative hours only. Saturday &amp; Sunday: Closed.</p>
              <Link href="/contact">
                <Button className="gap-2 whitespace-nowrap">
                  <Calendar className="w-5 h-5" /> Schedule an Appointment
                </Button>
              </Link>
            </div>
          </div>

          {/* Contact info (left) + Map (right) */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Left: Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Visit Our Rocklin Dental Office
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Conveniently located in Rocklin, California, serving families
                from Roseville, Granite Bay, Lincoln, and surrounding
                communities. We look forward to welcoming you!
              </p>
              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-xl shadow-sm border border-border">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Address</h4>
                    <address className="text-muted-foreground text-lg not-italic">
                      3700 Atherton Rd<br />Rocklin, CA 95765
                    </address>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-xl shadow-sm border border-border">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Phone</h4>
                    <a href="tel:9166264050" className="text-primary hover:underline text-lg">(916) 626-4050</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-xl shadow-sm border border-border">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Email</h4>
                    <a href="mailto:contactus@heritageoakdental.com" className="text-primary hover:underline text-lg">
                      contactus@heritageoakdental.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button>Schedule an Appointment</Button>
                </Link>
                <a
                  href="https://www.google.com/maps/dir//Heritage+Oak+Dental,+3700+Atherton+Rd,+Rocklin,+CA+95765"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline">Get Directions</Button>
                </a>
              </div>
            </div>

            {/* Right: Map */}
            <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-white aspect-video bg-gray-200 relative">
              <iframe
                src="https://maps.google.com/maps?q=Heritage+Oak+Dental,+3700+Atherton+Rd,+Rocklin,+CA+95765&output=embed"
                title="Heritage Oak Dental location — 3700 Atherton Rd, Rocklin, CA"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
