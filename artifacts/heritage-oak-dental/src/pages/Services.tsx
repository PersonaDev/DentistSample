import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/data";

export function Services() {
  return (
    <div className="w-full overflow-hidden pt-12 pb-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Dental Services</h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive dental care tailored to your unique smile. Explore our treatments below.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <Link 
              key={service.id}
              href={`/services/${service.id}`}
              className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={`${import.meta.env.BASE_URL}images/${service.image}`}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-8 flex-1 leading-relaxed">
                  {service.description}
                </p>
                <div className="inline-flex items-center text-primary font-semibold group-hover:gap-3 gap-2 transition-all">
                  Learn Details <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
