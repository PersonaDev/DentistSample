import { Link } from "wouter";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#101828] text-white pt-20 pb-10 border-t-4 border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="space-y-6">
            <div className="bg-white p-4 rounded-2xl inline-block">
              <img 
                src={`${import.meta.env.BASE_URL}images/logo.png`} 
                alt="Heritage Oak Dental Logo" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-slate-300 leading-relaxed text-sm">
              Your trusted partner for exceptional dental care in Rocklin, CA. We combine advanced technology with compassionate care to deliver smiles you'll love.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3 text-slate-300 text-sm">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about/meettheteam" className="hover:text-primary transition-colors">Meet the Team</Link></li>
              <li><Link href="/about/officetour" className="hover:text-primary transition-colors">Office Tour</Link></li>
              <li><Link href="/about/reviews" className="hover:text-primary transition-colors">Patient Reviews</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Our Services</Link></li>
              <li><Link href="/specials/savingsplan" className="hover:text-primary transition-colors">Smile Club / Specials</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4 text-slate-300 text-sm">
              <li>
                <a href="tel:9166264050" className="flex items-start gap-3 hover:text-primary transition-colors">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <span>(916) 626-4050</span>
                </a>
              </li>
              <li>
                <a href="mailto:contactus@heritageoakdental.com" className="flex items-start gap-3 hover:text-primary transition-colors">
                  <Mail className="w-5 h-5 text-primary shrink-0" />
                  <span className="break-all">contactus@heritageoakdental.com</span>
                </a>
              </li>
              <li>
                <a href="https://maps.google.com/?q=3700+Atherton+Rd,+Rocklin,+CA+95765" target="_blank" rel="noreferrer" className="flex items-start gap-3 hover:text-primary transition-colors">
                  <MapPin className="w-5 h-5 text-primary shrink-0" />
                  <span>3700 Atherton Rd<br/>Rocklin, CA 95765</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-6 text-white">Office Hours</h3>
            <ul className="space-y-3 text-slate-300 text-sm">
              <li className="flex justify-between items-center border-b border-slate-700/50 pb-2">
                <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary"/> Monday</span>
                <span>7:30AM – 6:00PM</span>
              </li>
              <li className="flex justify-between items-center border-b border-slate-700/50 pb-2">
                <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary"/> Tuesday</span>
                <span>7:30AM – 6:00PM</span>
              </li>
              <li className="flex justify-between items-center border-b border-slate-700/50 pb-2">
                <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary"/> Wednesday</span>
                <span>7:30AM – 6:00PM</span>
              </li>
              <li className="flex justify-between items-center border-b border-slate-700/50 pb-2">
                <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary"/> Thursday</span>
                <span>7:30AM – 6:00PM</span>
              </li>
              <li className="flex justify-between items-center text-slate-400">
                <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary"/> Friday</span>
                <span>8:00AM – 4:00PM*</span>
              </li>
            </ul>
            <p className="text-xs text-slate-500 mt-3">*Administrative hours only</p>
          </div>

        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {currentYear} Heritage Oak Dental. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/resources/forms" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/resources/forms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
