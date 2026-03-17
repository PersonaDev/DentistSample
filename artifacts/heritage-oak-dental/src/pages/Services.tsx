import { Link } from "wouter";
import { ArrowRight, Sparkles, ShieldCheck, Zap, Stethoscope, AlignCenter, Heart, Leaf, Wrench, Moon } from "lucide-react";
import { SERVICES } from "@/lib/data";

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  cosmetic:     <Sparkles className="w-8 h-8" />,
  general:      <ShieldCheck className="w-8 h-8" />,
  implant:      <Zap className="w-8 h-8" />,
  oral:         <Stethoscope className="w-8 h-8" />,
  orthodontics: <AlignCenter className="w-8 h-8" />,
  pediatric:    <Heart className="w-8 h-8" />,
  periodontics: <Leaf className="w-8 h-8" />,
  restorative:  <Wrench className="w-8 h-8" />,
  sedation:     <Moon className="w-8 h-8" />,
};

export function Services() {
  return (
    <div className="w-full overflow-hidden pt-12 pb-24 bg-[#F4F8FB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#101828]">Our Dental Services</h1>
          <p className="text-xl text-gray-500">
            Comprehensive dental care tailored to your unique smile. Explore our treatments below.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.id}`}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#1B89C5]/40 transition-all duration-300"
            >
              <div className="flex items-center justify-center h-36 bg-gradient-to-br from-[#E8F4FA] to-[#D0EAF7]">
                <div className="w-16 h-16 rounded-2xl bg-[#1B89C5] flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                  {SERVICE_ICONS[service.id]}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-3 text-[#101828] group-hover:text-[#1B89C5] transition-colors">{service.title}</h3>
                <p className="text-gray-500 mb-6 flex-1 leading-relaxed text-sm">
                  {service.description}
                </p>
                <div className="inline-flex items-center text-[#1B89C5] font-semibold gap-2 group-hover:gap-3 transition-all text-sm">
                  Learn Details <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
