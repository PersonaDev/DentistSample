import { Star, Gift } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Link } from "wouter";

export function Specials() {
  return (
    <div className="w-full pt-12 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-6">
            <Gift className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Special Offers</h1>
          <p className="text-xl text-muted-foreground">
            We love welcoming new patients to Heritage Oak Dental. Take advantage of our current promotions to get started on your healthy smile!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          <div className="bg-gradient-to-br from-primary to-[#101828] rounded-[2rem] p-1 text-white shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="bg-black/20 rounded-[1.8rem] p-8 md:p-10 h-full flex flex-col relative z-10 backdrop-blur-sm border border-white/10">
              <div className="flex items-center gap-2 text-white/80 font-bold tracking-widest uppercase text-sm mb-4">
                <Star className="w-4 h-4" /> New Patient Special
              </div>
              <h2 className="text-4xl font-bold mb-4">$99</h2>
              <h3 className="text-2xl font-semibold mb-4 text-white">Comprehensive Exam & X-Rays</h3>
              <p className="text-white/80 mb-8 flex-1 leading-relaxed">
                Includes a thorough exam by our doctors, full mouth digital x-rays, and a personalized treatment plan consultation. (Regular value $350+)
              </p>
              <Link href="/contact">
                <Button className="w-full bg-white text-primary hover:bg-white/90">Claim Offer</Button>
              </Link>
            </div>
          </div>

          <div className="bg-muted rounded-[2rem] p-8 md:p-10 shadow-sm border border-border hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex flex-col">
            <div className="flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-sm mb-4">
              <Star className="w-4 h-4" /> Free Consultation
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-4">Complimentary</h2>
            <h3 className="text-2xl font-semibold text-foreground mb-4">Implant or Invisalign Consult</h3>
            <p className="text-muted-foreground mb-8 flex-1 leading-relaxed">
              Curious about dental implants or Invisalign? Schedule a free 15-minute consultation to discuss your options and get your questions answered without any obligation.
            </p>
            <Link href="/contact">
              <Button className="w-full">Schedule Consultation</Button>
            </Link>
          </div>

        </div>

        <p className="text-center text-sm text-muted-foreground mt-12">
          *Offers valid for new patients only unless otherwise specified. Cannot be combined with insurance or other discounts. Call for complete details.
        </p>
      </div>
    </div>
  );
}
