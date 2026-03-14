import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock } from "lucide-react";
import { Button } from "@/components/ui/Button";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Phone number is required"),
  message: z.string().min(2, "Message is required"),
});

type FormValues = z.infer<typeof formSchema>;

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormValues>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data: FormValues) => {
    await new Promise(resolve => setTimeout(resolve, 800));
    console.log("Form data:", data);
    setIsSubmitted(true);
  };

  return (
    <div>
      {/* Page Hero */}
      <div className="bg-[#E8F4FA] py-16 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-[#101828] mb-4">
          Contact Your Rocklin, CA Dentist
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Welcome to Heritage Oak Dental! Please give our Rocklin dental office a call if you have any questions or concerns. We serve patients from Rocklin, Roseville, Granite Bay, Lincoln, and surrounding communities. We hope to see you for your next dental visit!
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Get in Touch */}
        <h2 className="text-3xl font-bold text-[#101828] mb-10">Get in Touch With Heritage Oak Dental</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">

          {/* Address */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-[#E8F4FA] rounded-full flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-[#1B89C5]" />
            </div>
            <div>
              <h3 className="font-bold text-[#101828] mb-1">Address</h3>
              <p className="text-gray-600">3700 Atherton Rd<br />Rocklin, CA 95765</p>
            </div>
          </div>

          {/* Phone & Text */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-[#E8F4FA] rounded-full flex items-center justify-center flex-shrink-0">
              <Phone className="w-5 h-5 text-[#1B89C5]" />
            </div>
            <div>
              <h3 className="font-bold text-[#101828] mb-1">Phone</h3>
              <a href="tel:9166264050" className="text-[#1B89C5] hover:underline font-semibold">
                Call Us (916) 626-4050
              </a>
              <p className="text-gray-600 mt-1 text-sm">You can text us at (916) 626-4050</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-[#E8F4FA] rounded-full flex items-center justify-center flex-shrink-0">
              <Mail className="w-5 h-5 text-[#1B89C5]" />
            </div>
            <div>
              <h3 className="font-bold text-[#101828] mb-1">Email</h3>
              <a href="mailto:contactus@heritageoakdental.com" className="text-[#1B89C5] hover:underline break-all">
                contactus@heritageoakdental.com
              </a>
            </div>
          </div>
        </div>

        {/* Hours + Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 bg-[#E8F4FA] rounded-2xl p-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-[#1B89C5]" />
              <h3 className="font-bold text-[#101828] text-lg">Hours</h3>
            </div>
            <div className="flex flex-col gap-2 text-gray-700">
              {[
                ["Monday", "7:30AM - 6:00PM"],
                ["Tuesday", "7:30AM - 6:00PM"],
                ["Wednesday", "7:30AM - 6:00PM"],
                ["Thursday", "7:30AM - 6:00PM"],
                ["Friday", "8:00AM - 4:00PM*"],
              ].map(([day, hrs]) => (
                <div key={day} className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="font-medium">{day}</span>
                  <span>{hrs}</span>
                </div>
              ))}
              <p className="text-sm text-gray-500 mt-1">*Administrative hours only.</p>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-[#101828] text-lg mb-4">Areas We Serve</h3>
            <p className="text-gray-700">
              Rocklin • Roseville • Granite Bay • Lincoln • Loomis • Auburn • Citrus Heights • Sacramento
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <h2 className="text-3xl font-bold text-[#101828] mb-8">Send Us A Message!</h2>

        <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-16">
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-[#101828]">Message Sent!</h3>
              <p className="text-gray-600 mb-6">Thank you! We'll be in touch soon.</p>
              <Button onClick={() => setIsSubmitted(false)} variant="outline">Send Another Message</Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-[#101828] mb-2">Full Name</label>
                <input
                  {...register("name")}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-[#1B89C5] focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#101828] mb-2">Email</label>
                <input
                  {...register("email")}
                  type="email"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-[#1B89C5] focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#101828] mb-2">Phone</label>
                <input
                  {...register("phone")}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-[#1B89C5] focus:outline-none transition-colors"
                  placeholder="(916) 555-0123"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#101828] mb-2">Message</label>
                <input
                  {...register("message")}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-[#1B89C5] focus:outline-none transition-colors"
                  placeholder="How can we help you?"
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>
              <div className="md:col-span-2">
                <Button
                  type="submit"
                  size="lg"
                  className="gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"} <Send className="w-4 h-4" />
                </Button>
              </div>
            </form>
          )}
        </div>

        {/* Map */}
        <h2 className="text-3xl font-bold text-[#101828] mb-6">Find Heritage Oak Dental in Rocklin, CA</h2>
        <a
          href="https://www.google.com/maps/dir//Heritage+Oak+Dental,+3700+Atherton+Rd,+Rocklin,+CA+95765"
          target="_blank"
          rel="noreferrer"
          className="inline-block text-[#1B89C5] hover:underline font-semibold mb-6"
        >
          Get Directions to Heritage Oak Dental →
        </a>
        <div className="rounded-2xl overflow-hidden border border-gray-200 h-96">
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
