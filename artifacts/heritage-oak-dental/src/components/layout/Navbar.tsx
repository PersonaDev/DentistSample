import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { SERVICES, RESOURCES } from "@/lib/data";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const isActive = (path: string) => location === path || location.startsWith(`${path}/`);

  const NavLink = ({ href, children, dropdown }: { href: string; children: React.ReactNode; dropdown?: React.ReactNode }) => (
    <div className="relative group">
      <Link 
        href={href} 
        className={cn(
          "flex items-center gap-1 px-4 py-2 font-medium transition-colors duration-200 rounded-full",
          isActive(href) ? "text-primary" : "text-foreground hover:text-primary hover:bg-primary/5"
        )}
      >
        {children}
        {dropdown && <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />}
      </Link>
      {dropdown && (
        <div className="absolute top-full left-0 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
          <div className="bg-white rounded-2xl shadow-xl border border-border/50 p-2 min-w-[240px] flex flex-col gap-1">
            {dropdown}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white/90 backdrop-blur-lg shadow-sm border-b border-border/50 py-3" : "bg-white py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          <Link href="/" className="flex items-center gap-3 z-50 relative">
            <img 
              src={`${import.meta.env.BASE_URL}images/logo.png`} 
              alt="Heritage Oak Dental Logo" 
              className="h-10 md:h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <NavLink href="/">Home</NavLink>
            <NavLink 
              href="/about"
              dropdown={
                <>
                  <Link href="/about" className="px-4 py-2 hover:bg-muted rounded-xl transition-colors">Our Team</Link>
                  <Link href="/about#office" className="px-4 py-2 hover:bg-muted rounded-xl transition-colors">Our Office</Link>
                </>
              }
            >
              About
            </NavLink>
            <NavLink 
              href="/services"
              dropdown={
                <>
                  <Link href="/services" className="px-4 py-2 font-semibold text-primary hover:bg-muted rounded-xl transition-colors">All Services</Link>
                  <div className="h-px bg-border my-1 mx-2" />
                  {SERVICES.map(s => (
                    <Link key={s.id} href={`/services/${s.id}`} className="px-4 py-2 hover:bg-muted rounded-xl transition-colors text-sm">
                      {s.title}
                    </Link>
                  ))}
                </>
              }
            >
              Services
            </NavLink>
            <NavLink 
              href="/resources/financial"
              dropdown={
                <>
                  {RESOURCES.map(r => (
                    <Link key={r.id} href={`/resources/${r.id}`} className="px-4 py-2 hover:bg-muted rounded-xl transition-colors text-sm">
                      {r.title}
                    </Link>
                  ))}
                </>
              }
            >
              Resources
            </NavLink>
            <NavLink href="/specials">Specials</NavLink>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="tel:9166264050" 
              className="flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5 transition-all active:translate-y-0"
            >
              <Phone className="w-4 h-4" />
              (916) 626-4050
            </a>
          </div>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden p-2 text-foreground z-50 relative"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div 
        className={cn(
          "fixed inset-0 bg-white z-40 transition-all duration-300 lg:hidden flex flex-col pt-24 pb-8 px-6 overflow-y-auto",
          isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
        )}
      >
        <div className="flex flex-col gap-6 text-xl font-display font-medium">
          <Link href="/" className="pb-4 border-b border-border">Home</Link>
          <Link href="/about" className="pb-4 border-b border-border">About Us</Link>
          <div className="pb-4 border-b border-border flex flex-col gap-4">
            <Link href="/services">Services</Link>
            <div className="flex flex-col gap-3 pl-4 text-base font-sans text-muted-foreground">
              {SERVICES.map(s => (
                <Link key={s.id} href={`/services/${s.id}`}>{s.title}</Link>
              ))}
            </div>
          </div>
          <div className="pb-4 border-b border-border flex flex-col gap-4">
            <span className="text-foreground">Resources</span>
            <div className="flex flex-col gap-3 pl-4 text-base font-sans text-muted-foreground">
              {RESOURCES.map(r => (
                <Link key={r.id} href={`/resources/${r.id}`}>{r.title}</Link>
              ))}
            </div>
          </div>
          <Link href="/specials" className="pb-4 border-b border-border">Specials</Link>
          <Link href="/contact" className="pb-4 border-b border-border">Contact</Link>
        </div>
        
        <div className="mt-auto pt-8">
          <a 
            href="tel:9166264050" 
            className="flex items-center justify-center gap-2 w-full py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-colors"
          >
            <Phone className="w-5 h-5" />
            Call (916) 626-4050
          </a>
        </div>
      </div>
    </header>
  );
}
