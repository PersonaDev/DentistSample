import { useParams, Link } from "wouter";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { SERVICES } from "@/lib/data";
import { Button } from "@/components/ui/Button";

export function ServiceDetail() {
  const { id } = useParams();
  const service = SERVICES.find(s => s.id === id);

  if (!service) {
    return (
      <div className="py-32 text-center">
        <h1 className="text-3xl font-bold mb-4">Service not found</h1>
        <Link href="/services"><Button>Back to Services</Button></Link>
      </div>
    );
  }

  // Placeholder detailed content for demonstration
  const detailedFeatures = [
    "Comprehensive evaluation and personalized treatment plan",
    "State-of-the-art technology and modern materials",
    "Focus on patient comfort and minimizing anxiety",
    "Long-lasting, aesthetic results you'll be proud of"
  ];

  return (
    <div className="w-full overflow-hidden bg-white pb-24">
      
      {/* Hero */}
      <div className="relative h-[40vh] min-h-[300px] max-h-[500px] w-full bg-muted">
        <img 
          src={`${import.meta.env.BASE_URL}images/${service.image}`}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <Link href="/services" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors font-medium">
              <ArrowLeft className="w-4 h-4" /> Back to Services
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-3xl">
              {service.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2 prose prose-lg prose-blue max-w-none">
            <h2 className="text-3xl font-bold mb-6 text-foreground">About {service.title}</h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              {service.description}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              At Heritage Oak Dental, we utilize the latest techniques to ensure your {service.title.toLowerCase()} is performed with precision and care. Whether you are looking to improve functionality, aesthetics, or both, our team is equipped to provide exceptional results.
            </p>

            <h3 className="text-2xl font-bold mb-6 mt-12 text-foreground">What to Expect</h3>
            <ul className="space-y-4 mb-8 list-none pl-0">
              {detailedFeatures.map((feat, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-muted p-8 rounded-3xl sticky top-32 border border-border/50 shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Ready to improve your smile?</h3>
              <p className="text-muted-foreground mb-8">
                Schedule a consultation with our experienced team to discuss if {service.title.toLowerCase()} is right for you.
              </p>
              <div className="flex flex-col gap-4">
                <Link href="/contact" className="w-full">
                  <Button className="w-full">Request Appointment</Button>
                </Link>
                <a href="tel:9166264050" className="w-full">
                  <Button variant="outline" className="w-full text-foreground border-border hover:bg-white hover:border-primary">Call (916) 626-4050</Button>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
