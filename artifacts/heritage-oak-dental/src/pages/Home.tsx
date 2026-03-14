import { Link } from "wouter";
import { ArrowRight, Star, Clock, MapPin, Calendar, Phone } from "lucide-react";
import { SERVICES, TEAM } from "@/lib/data";
import { Button } from "@/components/ui/Button";

export function Home() {
  return (
    <div className="w-full overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative bg-muted py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-l-[100px] transform translate-x-1/3 -translate-y-1/4" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-primary text-sm font-semibold mb-6 shadow-sm border border-primary/10">
                <Star className="w-4 h-4 fill-primary" /> Top Rated Dentist in Rocklin
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground text-balance">
                Your Trusted Dentist in Rocklin, CA — <span className="text-primary">Welcome to Heritage Oak Dental</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                At our office, we utilize the latest technological advances in the industry, such as intraoral cameras, digital x-rays, oral sedation, dental lasers, CAD CAM, implants, white fillings, 3D imaging, invisible ceramic braces, clear braces, and Invisalign to ensure that you receive the most effective and efficient care possible.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="tel:9166264050">
                  <Button size="lg" className="gap-2">
                    <Phone className="w-5 h-5" />
                    Call (916) 626-4050
                  </Button>
                </a>
                <Link href="/services">
                  <Button size="lg" variant="outline">
                    Our Services
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative lg:ml-auto w-full max-w-lg">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-[2rem] transform translate-x-4 translate-y-4" />
              <img 
                src={`${import.meta.env.BASE_URL}images/db6e50499d0e50178856effaf7fc05fb9fdf2230.png`} 
                alt="Modern dental office waiting room" 
                className="relative rounded-[2rem] shadow-2xl w-full h-auto object-cover aspect-[4/3] z-10 border-8 border-white"
              />
              
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-4 border border-border/50">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Star className="w-6 h-6 text-primary fill-primary" />
                </div>
                <div>
                  <p className="font-bold text-lg leading-none">4.9/5</p>
                  <p className="text-sm text-muted-foreground">Patient Reviews</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Dental Services in Rocklin, CA</h2>
            <p className="text-lg text-muted-foreground text-balance">
              Whatever your dental needs we are ready to provide you with exceptional care. Your smile is our priority so please use this information to become informed about your oral health and dental treatment.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id}>
                <Link 
                  href={`/services/${service.id}`}
                  className="group block h-full bg-white rounded-3xl overflow-hidden border border-border hover:shadow-xl hover:border-primary/30 transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <img 
                      src={`${import.meta.env.BASE_URL}images/${service.image}`}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <h3 className="absolute bottom-4 left-6 text-xl font-bold text-white">
                      {service.title}
                    </h3>
                  </div>
                  <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                    <p className="text-muted-foreground mb-6 flex-1 line-clamp-3">
                      {service.description}
                    </p>
                    <div className="flex items-center text-primary font-semibold gap-2 group-hover:gap-3 transition-all">
                      Learn More <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO TOUR SECTION */}
      <section className="py-24 bg-muted relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience Heritage Oak Dental in Rocklin</h2>
            <p className="text-lg text-muted-foreground text-balance">
              Take a virtual tour of our modern dental practice and see why families throughout Rocklin trust us for their dental care.
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
            <h2 className="text-3xl md:text-4xl font-bold">Meet the Rocklin Dentists</h2>
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
              <Button variant="outline" size="lg">Learn More About Our Team</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* LOCATION & HOURS */}
      <section className="py-24 bg-muted relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Hours Card */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-border/50">
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-xl"><Clock className="w-6 h-6 text-primary" /></div>
                Dental Office Hours in Rocklin
              </h2>
              
              <div className="space-y-4">
                {[
                  { day: "Monday", hours: "7:30AM – 6:00PM" },
                  { day: "Tuesday", hours: "7:30AM – 6:00PM" },
                  { day: "Wednesday", hours: "7:30AM – 6:00PM" },
                  { day: "Thursday", hours: "7:30AM – 6:00PM" },
                  { day: "Friday", hours: "8:00AM – 4:00PM*", muted: true },
                ].map((item, i) => (
                  <div key={i} className={`flex justify-between items-center py-3 border-b border-border/50 last:border-0 ${item.muted ? 'text-muted-foreground' : 'text-foreground font-medium'}`}>
                    <span>{item.day}</span>
                    <span>{item.hours}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-6 italic">*Administrative hours only.</p>
              
              <div className="mt-8 pt-8 border-t border-border/50 flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="flex-1">
                  <Button className="w-full gap-2">
                    <Calendar className="w-5 h-5" /> Schedule an Appointment
                  </Button>
                </Link>
              </div>
            </div>

            {/* Location Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Visit Our Rocklin Dental Office</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Conveniently located in Rocklin, California, serving families from Roseville, Granite Bay, Lincoln, and surrounding communities. We look forward to welcoming you!
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-xl shadow-sm border border-border"><MapPin className="w-6 h-6 text-primary" /></div>
                  <div>
                    <h4 className="font-semibold text-lg">Address</h4>
                    <p className="text-muted-foreground text-lg">3700 Atherton Rd<br/>Rocklin, CA 95765</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-xl shadow-sm border border-border"><Phone className="w-6 h-6 text-primary" /></div>
                  <div>
                    <h4 className="font-semibold text-lg">Phone</h4>
                    <a href="tel:9166264050" className="text-primary hover:underline text-lg">(916) 626-4050</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-xl shadow-sm border border-border"><MapPin className="w-6 h-6 text-primary" /></div>
                  <div>
                    <h4 className="font-semibold text-lg">Email</h4>
                    <a href="mailto:contactus@heritageoakdental.com" className="text-primary hover:underline text-lg">contactus@heritageoakdental.com</a>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-8">
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

              <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-white aspect-video bg-gray-200 relative">
                <iframe 
                  src="https://maps.google.com/maps?q=Heritage+Oak+Dental,+3700+Atherton+Rd,+Rocklin,+CA+95765&output=embed" 
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
