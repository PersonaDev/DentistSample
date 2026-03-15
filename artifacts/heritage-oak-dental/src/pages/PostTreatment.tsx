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
        <span className="font-semibold text-[#101828]">{title}</span>
        <ChevronDown className={`w-5 h-5 text-[#1B89C5] transition-transform flex-shrink-0 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-6 pb-6 bg-white text-gray-700 text-sm leading-relaxed space-y-4">
          {children}
        </div>
      )}
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="font-semibold text-[#101828] mb-2">{title}</h4>
      {children}
    </div>
  );
}

function Callout({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
      <p className="font-semibold text-red-800 mb-1">{title}</p>
      <div className="text-red-700 text-sm">{children}</div>
    </div>
  );
}

const PLACEHOLDER = (
  <p>Please contact our office for specific post-treatment instructions for this procedure.</p>
);

export function PostTreatment() {
  return (
    <div>
      <div className="bg-[#E8F4FA] py-16 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-[#101828] mb-4">Post-Treatment Instructions</h1>
        <p className="text-xl text-gray-600">Follow these guidelines for optimal healing and comfort</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-gray-700 mb-10 text-lg leading-relaxed">
          These instructions are here to help our patients after they have received excellent dental treatment at Heritage Oak Dental. Please refer to these post-operative instructions in regards to your dental treatment and after care.
        </p>

        <Accordion title="Tooth Extraction">
          <Section title="Control Bleeding">
            <ul className="list-disc pl-5 space-y-1">
              <li>Bite firmly on the gauze pack over the surgical area for at least 1/2 hour; then discard it gently.</li>
              <li>Some blood will ooze from the area of surgery for several hours and it is normal.</li>
              <li>Do not spit, or suck through a straw, since it can cause dry socket or loss of the blood clot.</li>
              <li>When bleeding persists at home, place a gauze pad or cold wet tea bag over the area and bite firmly for 30 minutes.</li>
              <li>Avoid rubbing the area with your tongue.</li>
              <li>Keep your head elevated on several pillows or sit in a lounge chair for 12 hours.</li>
              <li><strong>DO NOT SMOKE</strong> for at least 24 hours after surgery because this will cause bleeding, pain and interfere with healing. It is recommended to not smoke for 7 days after surgery.</li>
            </ul>
          </Section>
          <Section title="Rinsing">
            <p>Do not rinse your mouth or brush your teeth for the first 6 hours after the surgical appointment. Then use warm salt water (1 teaspoon salt in 1 cup of warm water) after tooth-brushing and every 2 hours.</p>
          </Section>
          <Section title="Bacterial Plaque Control">
            <p>Brush the teeth gently. Avoid the surgical site.</p>
          </Section>
          <Section title="Rest">
            <p>Get plenty of rest, at least 8 to 10 hours of sleep each night. Avoid strenuous exercise during the first 24 hours, and keep the mouth from excessive movement.</p>
          </Section>
          <Section title="Diet">
            <ul className="list-disc pl-5 space-y-1">
              <li>Use a liquid or soft diet high in protein.</li>
              <li>Drink a large volume of water and fruit juices.</li>
              <li>Do not drink through a straw because this may promote bleeding.</li>
              <li>Avoid hot food for the first 24 hours after surgery.</li>
              <li>Eat a soft diet for the first 24 hours after tooth extraction.</li>
              <li>Avoid foods that require excessive chewing.</li>
              <li>You can resume a normal diet the day after tooth removal.</li>
            </ul>
          </Section>
          <Section title="Pain and Discomfort">
            <ul className="list-disc pl-5 space-y-1">
              <li>Some discomfort is normal after surgery. It can be controlled by taking the pain medication your dentist has prescribed or recommended.</li>
              <li>Start taking your pain pills before the numbing medication has worn off.</li>
              <li>Take your pain pill with an 8 oz. glass of water and/or a small amount of food to prevent nausea.</li>
            </ul>
          </Section>
          <Section title="Swelling and Ice-packs">
            <ul className="list-disc pl-5 space-y-1">
              <li>Swelling after surgery is a normal body reaction.</li>
              <li>Swelling reaches its maximum about 48 hours after surgery, and usually lasts 4–6 days.</li>
              <li>Applying ice packs over the area for the first 24 hours (no longer than 20 minutes at a time) helps control swelling.</li>
              <li>Heat is not used for swelling.</li>
            </ul>
          </Section>
          <Section title="Bruising">
            <p>You may experience some mild bruising. This is normal and will disappear in 7–14 days.</p>
          </Section>
          <Section title="Sutures or Stitches">
            <p>Your dentist will tell you if and when they need to be removed (usually in about 1 week). Many times stitches are self-dissolving (7–10 days).</p>
          </Section>
          <Section title="Wisdom Teeth / Surgical Extraction Additional Notes">
            <ul className="list-disc pl-5 space-y-1">
              <li>The surgical area will swell, peaking on the 2nd or 3rd postoperative day.</li>
              <li>Trismus (stiffness) of the muscles may cause difficulty in opening your mouth.</li>
              <li>You may have a slight earache or sore throat.</li>
              <li>Your other teeth may ache temporarily (referred pain).</li>
              <li>If the corners of the mouth are stretched they may dry and crack — keep lips moist.</li>
              <li>There will be a space where the tooth was removed — rinse after 24 hours with warm salt water.</li>
              <li>Slight temperature elevation for 24–48 hours is normal.</li>
            </ul>
          </Section>
          <Callout title="Call your Dentist or Emergency Room if:">
            <ul className="list-disc pl-5 space-y-1">
              <li>You experience discomfort you cannot control with pain pills.</li>
              <li>You have bleeding you cannot control by biting on gauze.</li>
              <li>You have increased swelling after the third day.</li>
              <li>You have a fever.</li>
            </ul>
          </Callout>
          <Section title="Keeping Infection Under Control">
            <p>The removal of teeth can allow germs to enter the bloodstream. You may need antibiotics if you have: bacterial endocarditis history, heart defects, artificial heart valves, artificial joints, diabetes/impaired immune system, or take steroids.</p>
          </Section>
        </Accordion>

        <Accordion title="Temporary Crown Care">
          <Section title="Care">
            <p>A temporary tooth-colored restoration may be placed to protect the tooth while your new restoration is being made. Avoid heavy chewing and sticky foods. If this temporary does dislodge before your next visit, call us! Do not attempt to place restoration back with anything other than Vaseline. Superglue is not healthy in the oral environment and will disturb the bonding process.</p>
          </Section>
          <Section title="Cleaning">
            <p>Brushing can be accomplished with a gentle motion on the sides of the tooth. When flossing is recommended, place it gently between the teeth, clean the gum areas, then release your inside finger and pull the floss through toward the cheek. Do not draw the floss back between the two teeth. Rinsing with mouthwash twice a day is also recommended.</p>
          </Section>
          <p className="italic text-gray-600">"You are on your way to receiving the most advanced, state-of-the-art cosmetic and structurally sound restorative dentistry available today. We are excited with what Heritage Oak Dental can do for you and your teeth."</p>
        </Accordion>

        <Accordion title="Orthodontics">
          <Section title="Oral Hygiene">
            <p>Good oral hygiene is vital to orthodontic success. Get used to: Brushing your teeth (not just the brackets) after every meal with an electric toothbrush e.g. Sonicare. Flossing daily as directed. Massaging your gums gently with your toothbrush. Avoiding foods that can damage your braces.</p>
          </Section>
          <Section title="Before Leaving the Office">
            <ul className="list-disc pl-5 space-y-1">
              <li>Check wire ends don't poke cheek or tongue</li>
              <li>Understand what to do until next appointment</li>
              <li>Have adequate supply of wax, cleaning aids, rubber bands</li>
              <li>Schedule next appointment before leaving</li>
            </ul>
          </Section>
          <Section title="Foods to Avoid">
            <p>Sticky gum, Taffy, Hard candy, Sticky candy (caramels, Sugar Daddies, Starbursts, caramelized apples, Sugar Babies, licorice, toffee, Tootsie Rolls, Now &amp; Laters), Popcorn, Peanuts, Ice, Taco chips, Whole apples and carrots (cut into pieces), Hard French bread crust, Spareribs, Corn-on-the-cob (cut off cob), Bagels, Pizza crusts, Uncooked carrots, Doritos, Pretzels. Plain chocolate is okay if you brush afterwards.</p>
          </Section>
          <Section title="Emergencies">
            <p>Call (916) 626-4050 ext 1 after hours. Instructions for: poking wire (use wax or wet cotton), loose band/bracket (save pieces in zip-lock bag), missing elastic/tie, pain (Tylenol recommended, 2–4 days normal), lost retainers.</p>
          </Section>
        </Accordion>

        <Accordion title="Deep Cleaning">{PLACEHOLDER}</Accordion>
        <Accordion title="Denture Care">{PLACEHOLDER}</Accordion>
        <Accordion title="Filling or Restorations">{PLACEHOLDER}</Accordion>
        <Accordion title="Fluoride Tray At-Home Use">{PLACEHOLDER}</Accordion>
        <Accordion title="Fluoride Varnish and Gel">{PLACEHOLDER}</Accordion>
        <Accordion title="Immediate Denture">{PLACEHOLDER}</Accordion>
        <Accordion title="Oral Rinses or Mouthwash">{PLACEHOLDER}</Accordion>
        <Accordion title="Root Canal Therapy">{PLACEHOLDER}</Accordion>
        <Accordion title="Socket Preservation">{PLACEHOLDER}</Accordion>
        <Accordion title="Sinus Precautions">{PLACEHOLDER}</Accordion>
        <Accordion title="Surgical Instructions">{PLACEHOLDER}</Accordion>
        <Accordion title="Veneers, Crowns &amp; Bridges">{PLACEHOLDER}</Accordion>
        <Accordion title="Tooth Whitening">{PLACEHOLDER}</Accordion>

        <div className="bg-[#E8F4FA] rounded-2xl p-8 text-center mt-8">
          <h3 className="text-xl font-bold text-[#101828] mb-3">Questions or Concerns?</h3>
          <p className="text-gray-600 mb-5">
            If you have any questions about your post-treatment care or experience any complications, please contact our office immediately.
          </p>
          <a href="tel:9166264050" className="inline-block bg-[#1B89C5] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#1578ad] transition-colors">
            Call (916) 626-4050
          </a>
        </div>
      </div>
    </div>
  );
}
