import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { SERVICES } from "@/lib/data";

const ABOUT_LINKS = [
  { label: "Meet the Doctors", href: "/about/doctors" },
  { label: "Meet the Team", href: "/about/meettheteam" },
  { label: "Office Tour", href: "/about/officetour" },
  { label: "Patient Reviews", href: "/about/reviews" },
  { label: "Careers", href: "/about/careers" },
];

const RESOURCE_LINKS = [
  { label: "New Patient Forms", href: "/resources/newpatient" },
  { label: "Finance", href: "/resources/finance" },
  { label: "Pre-Treatment Instructions", href: "/resources/pretreatment" },
  { label: "Post-Treatment Instructions", href: "/resources/posttreatment" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const isActive = (path: string) => location === path || location.startsWith(`${path}/`);

  const DropdownLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link
      href={href}
      className={cn(
        "block px-4 py-2.5 text-sm rounded-xl transition-colors",
        isActive(href) ? "bg-[#E8F4FA] text-[#1B89C5] font-semibold" : "hover:bg-[#E8F4FA] text-[#101828]"
      )}
    >
      {children}
    </Link>
  );

  const NavItem = ({
    href,
    label,
    dropdown,
  }: {
    href: string;
    label: string;
    dropdown?: React.ReactNode;
  }) => (
    <div className="relative group">
      <Link
        href={href}
        className={cn(
          "flex items-center gap-1 px-4 py-2 font-medium transition-colors duration-200 rounded-full text-sm",
          isActive(href) ? "text-[#1B89C5]" : "text-[#101828] hover:text-[#1B89C5]"
        )}
      >
        {label}
        {dropdown && <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />}
      </Link>
      {dropdown && (
        <div className="absolute top-full left-0 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-2 min-w-[220px] flex flex-col gap-0.5">
            {dropdown}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <>
      <header
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300",
          scrolled || isOpen
            ? "bg-white shadow-sm border-b border-gray-100 py-3"
            : "bg-white py-4"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">

            {/* Logo — always visible, never moves */}
            <Link href="/" className="flex items-center gap-3">
              <img
                src={`${import.meta.env.BASE_URL}images/logo.png`}
                alt="Heritage Oak Dental"
                className="h-10 md:h-12 w-auto object-contain"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0">
              <NavItem href="/" label="Home" />
              <NavItem
                href="/about"
                label="About"
                dropdown={
                  <>
                    {ABOUT_LINKS.map((l) => (
                      <DropdownLink key={l.href} href={l.href}>{l.label}</DropdownLink>
                    ))}
                  </>
                }
              />
              <NavItem
                href="/resources/newpatient"
                label="Resources"
                dropdown={
                  <>
                    {RESOURCE_LINKS.map((l) => (
                      <DropdownLink key={l.href} href={l.href}>{l.label}</DropdownLink>
                    ))}
                  </>
                }
              />
              <NavItem href="/specials/savingsplan" label="Specials" />
              <NavItem
                href="/services"
                label="Services"
                dropdown={
                  <>
                    <DropdownLink href="/services">All Services</DropdownLink>
                    <div className="h-px bg-gray-100 my-1 mx-2" />
                    {SERVICES.map((s) => (
                      <DropdownLink key={s.id} href={`/services/${s.id}`}>{s.title}</DropdownLink>
                    ))}
                  </>
                }
              />
            </nav>

            <div className="hidden lg:flex items-center">
              <a
                href="tel:9166264050"
                className="flex items-center gap-2 px-6 py-3 bg-[#1B89C5] text-white font-semibold rounded-full hover:bg-[#1578ad] transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call (916) 626-4050
              </a>
            </div>

            {/* Mobile hamburger / X — stays in place, logo stays in place */}
            <button
              className="lg:hidden p-2 text-[#101828]"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu drawer — drops down below the header, no duplicate logo */}
      <div
        className={cn(
          "fixed left-0 right-0 bottom-0 z-40 bg-white overflow-y-auto lg:hidden transition-all duration-300",
          isOpen
            ? "top-[64px] opacity-100 pointer-events-auto"
            : "top-[64px] opacity-0 pointer-events-none"
        )}
      >
        <div className="px-6 py-4 border-t border-gray-100">
          <div className="flex flex-col gap-0 text-base">
            <Link href="/" className="py-3 border-b border-gray-100 font-semibold text-[#101828]">Home</Link>

            <div className="border-b border-gray-100">
              <p className="py-3 font-semibold text-[#101828]">About</p>
              <div className="flex flex-col gap-2 pl-4 pb-3">
                {ABOUT_LINKS.map((l) => (
                  <Link key={l.href} href={l.href} className="text-gray-600 py-1">{l.label}</Link>
                ))}
              </div>
            </div>

            <div className="border-b border-gray-100">
              <p className="py-3 font-semibold text-[#101828]">Resources</p>
              <div className="flex flex-col gap-2 pl-4 pb-3">
                {RESOURCE_LINKS.map((l) => (
                  <Link key={l.href} href={l.href} className="text-gray-600 py-1">{l.label}</Link>
                ))}
              </div>
            </div>

            <Link href="/specials/savingsplan" className="py-3 border-b border-gray-100 font-semibold text-[#101828]">Specials</Link>

            <div className="border-b border-gray-100">
              <p className="py-3 font-semibold text-[#101828]">Services</p>
              <div className="flex flex-col gap-2 pl-4 pb-3">
                {SERVICES.map((s) => (
                  <Link key={s.id} href={`/services/${s.id}`} className="text-gray-600 py-1">{s.title}</Link>
                ))}
              </div>
            </div>

            <Link href="/contact" className="py-3 border-b border-gray-100 font-semibold text-[#101828]">Contact</Link>
            <Link href="/faq" className="py-3 border-b border-gray-100 font-semibold text-[#101828]">FAQ</Link>
          </div>

          <div className="pt-8 pb-4">
            <a
              href="tel:9166264050"
              className="flex items-center justify-center gap-2 w-full py-4 bg-[#1B89C5] text-white font-semibold rounded-full hover:bg-[#1578ad] transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call (916) 626-4050
            </a>
          </div>
        </div>
      </div>

      {/* Backdrop to close menu on outside tap */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
