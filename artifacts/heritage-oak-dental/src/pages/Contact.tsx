import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Phone number is required"),
  date: z.string().optional(),
  message: z.string().min(10, "Please provide a brief message"),
});

type FormValues = z.infer<typeof formSchema>;

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormValues>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data: FormValues) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Form data:", data);
    setIsSubmitted(true);
  };

  return (
    <div className="w-full pt-12 pb-24 bg-white relative">
      <div className="absolute top-0 left-0 w-full h-[60vh] bg-muted z-0" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Schedule an Appointment</h1>
          <p className="text-xl text-muted-foreground">
            We're ready to welcome you to our Rocklin practice. Fill out the form below or call us directly.
          </p>
        </div>

        <div className="bg-white rounded-[2.5rem] shadow-2xl border border-border/50 overflow-hidden">
          <div className="grid lg:grid-cols-5 h-full">
            
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2 bg-primary text-white p-10 md:p-12 relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/3 translate-y-1/3" />
              
              <h2 className="text-3xl font-bold mb-8 relative z-10">Contact Information</h2>
              
              <div className="space-y-8 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-xl shrink-0"><Phone className="w-6 h-6" /></div>
                  <div>
                    <h4 className="font-semibold text-lg text-white/80 mb-1">Phone</h4>
                    <a href="tel:9166264050" className="text-2xl font-semibold hover:underline">(916) 626-4050</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-xl shrink-0"><Mail className="w-6 h-6" /></div>
                  <div>
                    <h4 className="font-semibold text-lg text-white/80 mb-1">Email</h4>
                    <a href="mailto:contactus@heritageoakdental.com" className="text-lg hover:underline break-all">contactus@heritageoakdental.com</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-xl shrink-0"><MapPin className="w-6 h-6" /></div>
                  <div>
                    <h4 className="font-semibold text-lg text-white/80 mb-1">Address</h4>
                    <p className="text-lg">Heritage Oak Dental<br/>3700 Atherton Rd<br/>Rocklin, CA 95765</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Area */}
            <div className="lg:col-span-3 p-10 md:p-12">
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Request Sent!</h3>
                  <p className="text-lg text-muted-foreground mb-8 max-w-md">
                    Thank you for reaching out. A member of our scheduling team will contact you shortly to confirm your appointment time.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)} variant="outline">Send Another Message</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 flex flex-col h-full">
                  <h3 className="text-2xl font-bold mb-2">Send us a message</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground">Full Name *</label>
                      <input 
                        {...register("name")}
                        className="w-full px-4 py-3 rounded-xl bg-muted border-2 border-transparent focus:border-primary focus:bg-white focus:outline-none transition-all"
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground">Phone Number *</label>
                      <input 
                        {...register("phone")}
                        className="w-full px-4 py-3 rounded-xl bg-muted border-2 border-transparent focus:border-primary focus:bg-white focus:outline-none transition-all"
                        placeholder="(916) 555-0123"
                      />
                      {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground">Email Address *</label>
                      <input 
                        {...register("email")}
                        type="email"
                        className="w-full px-4 py-3 rounded-xl bg-muted border-2 border-transparent focus:border-primary focus:bg-white focus:outline-none transition-all"
                        placeholder="john@example.com"
                      />
                      {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground">Preferred Date (Optional)</label>
                      <input 
                        {...register("date")}
                        type="date"
                        className="w-full px-4 py-3 rounded-xl bg-muted border-2 border-transparent focus:border-primary focus:bg-white focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 flex-1">
                    <label className="text-sm font-semibold text-foreground">How can we help you? *</label>
                    <textarea 
                      {...register("message")}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-muted border-2 border-transparent focus:border-primary focus:bg-white focus:outline-none transition-all resize-none"
                      placeholder="I'd like to schedule a routine cleaning..."
                    />
                    {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full md:w-auto gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Request"} <Send className="w-4 h-4" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Full width map below */}
        <div className="mt-16 rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white aspect-[21/9] bg-muted">
          <iframe 
            src="https://maps.google.com/maps?q=Heritage+Oak+Dental,+3700+Atherton+Rd,+Rocklin,+CA+95765&output=embed" 
            className="w-full h-full"
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>
    </div>
  );
}
