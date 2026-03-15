import { useState } from "react";
import { ChevronDown } from "lucide-react";

function Accordion({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden mb-3">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-[#101828] uppercase tracking-wide text-sm">{title}</span>
        <ChevronDown className={`w-5 h-5 text-[#1B89C5] transition-transform flex-shrink-0 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-6 pb-5 bg-white text-gray-700 text-sm leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

export function MeetTheDoctors() {
  return (
    <div>
      <div className="bg-[#E8F4FA] py-16 text-center px-4">
        <h1 className="text-5xl font-bold text-[#101828] mb-4">Meet Our Dentists</h1>
        <p className="text-xl text-gray-600">Experienced, caring dental professionals serving Rocklin, CA</p>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

        {/* Dr. Shane Douglas */}
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div className="flex flex-col items-center text-center">
            <img
              src="/images/dr-douglas.png"
              alt="Dr. Shane Douglas, DDS — Dentist in Rocklin CA"
              className="w-48 h-48 rounded-full object-cover object-top border-4 border-[#1B89C5] mb-5 shadow-lg"
            />
            <h2 className="text-2xl font-bold text-[#101828]">Dr. Shane Douglas, D.D.S.</h2>
            <p className="text-[#1B89C5] font-medium mt-1">Lead Dentist</p>
          </div>
          <div className="md:col-span-2">
            <blockquote className="bg-[#E8F4FA] rounded-xl p-6 text-gray-700 italic mb-6 text-lg leading-relaxed border-l-4 border-[#1B89C5]">
              "As my patient, you can expect thorough, lasting, and honest dental care. I will help address your needs and wants while improving your oral health. I want to exceed your expectations as your dentist, friend, and neighbor!"
            </blockquote>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Dr. Douglas enjoys kiteboarding, wakeboarding and spending time with his wife, Kristen, and their four children, Noah, Camden, Everly, and Ashlyn.
            </p>

            <Accordion title="Education">
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>DDS – University of California, San Francisco, CA</li>
                <li>BA, Physics – Point Loma Nazarene University, San Diego, CA</li>
              </ul>
            </Accordion>

            <Accordion title="Advanced Training">
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>IV Sedation</li>
                <li>Orthodontics with Braces &amp; Clear Aligners</li>
                <li>Oral Surgery</li>
                <li>Tissue Grafting</li>
                <li>Dental Implants</li>
              </ul>
            </Accordion>

            <Accordion title="Professional Associations">
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>American Dental Association</li>
                <li>California Dental Association</li>
                <li>Sacramento District Dental Society</li>
                <li>Academy of General Dentistry</li>
                <li>American Academy of Implant Dentistry</li>
                <li>American Academy of Cosmetic Dentistry</li>
                <li>American Orthodontic Society</li>
              </ul>
            </Accordion>

            <Accordion title="Publications &amp; Research">
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>SPIE Digital Library: "Imaging Natural Occlusal Caries Lesions with Optical Coherence Tomography"</li>
                <li>Lasers in Surgery and Medicine: "Non-Destructive Clinical Assessment of Occlusal Caries Lesions using Near-IR Imaging Methods"</li>
                <li>Cone Beam Computed Tomography: "CBCT Analysis of Upper Cervical Vertebrae Anomalies in Individuals with Craniofacial Anomalies and in Controls"</li>
              </ul>
            </Accordion>
          </div>
        </div>

        <hr className="border-gray-200" />

        {/* Dr. Ben Kloss */}
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div className="flex flex-col items-center text-center">
            <img
              src="/images/dr-kloss.png"
              alt="Dr. Ben Kloss, DMD — Dentist in Rocklin CA"
              className="w-48 h-48 rounded-full object-cover object-top border-4 border-[#1B89C5] mb-5 shadow-lg"
            />
            <h2 className="text-2xl font-bold text-[#101828]">Dr. Ben Kloss, D.M.D.</h2>
            <p className="text-[#1B89C5] font-medium mt-1">Associate Dentist</p>
          </div>
          <div className="md:col-span-2">
            <blockquote className="bg-[#E8F4FA] rounded-xl p-6 text-gray-700 italic mb-6 text-lg leading-relaxed border-l-4 border-[#1B89C5]">
              "As my patient, you can expect to feel safe and comfortable while receiving the best that modern dentistry provides. I am committed to providing quality, evidence-based dentistry, which is why I am dedicated to taking excellent continuing education to stay relevant in the latest dental techniques. I love what I do! I look forward to partnering with you and your oral health."
            </blockquote>

            <Accordion title="Education">
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>DMD – Midwestern University College of Dental Medicine, AZ</li>
                <li>BA, Biological Sciences – California State University Sacramento</li>
              </ul>
            </Accordion>

            <Accordion title="Professional Associations">
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>American Dental Association</li>
                <li>California Dental Association</li>
                <li>Sacramento Dental Association</li>
                <li>Academy of General Dentistry</li>
                <li>American Academy of Cosmetic Dentistry</li>
                <li>American Academy of Laser Dentistry</li>
                <li>SPEAR Education</li>
              </ul>
            </Accordion>
          </div>
        </div>

      </div>
    </div>
  );
}
