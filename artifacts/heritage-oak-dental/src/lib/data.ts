export type Procedure = { title: string; content: string };

export type Service = {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  intro: string;
  whyUs: string;
  relatedIds: string[];
  procedures: Procedure[];
};

export const SERVICES: Service[] = [
  {
    id: "cosmetic",
    title: "Cosmetic Dentistry",
    subtitle: "Transform your smile with our advanced cosmetic dental treatments",
    icon: "✦",
    description: "Enhance your smile with professional teeth whitening, veneers, bonding, and total smile makeovers.",
    intro: "There has been a dramatic interest in cosmetic dentistry. We all understand that having a healthy, bright, and beautiful smile enhances our appearance and allows us to smile with confidence. Thanks to the advances in modern cosmetic dentistry, we are able to improve our teeth and smiles with quick, painless and surprisingly affordable treatments that do not destroy the underlying healthy tooth structure!",
    whyUs: "Heritage Oak Dental combines artistry with science to deliver cosmetic results that look natural and last. Dr. Douglas uses advanced CAD/CAM technology, high-quality porcelain materials, and a meticulous eye for aesthetics to create smiles that complement each patient's unique features. We take time to understand your goals and create a personalized treatment plan that achieves the results you envision.",
    relatedIds: ["general", "restorative", "sedation"],
    procedures: [
      {
        title: "Composite Fillings",
        content: "Composite fillings are tooth-colored restorations made from a mixture of plastic and fine glass particles. They are used to repair teeth affected by decay, cracks, or fractures. Unlike silver amalgam fillings, composite fillings are matched to the color of your existing teeth, creating a more natural appearance. The procedure involves removing the decayed portion of the tooth, cleaning the affected area, and placing the composite filling material in layers. A special light is used to harden each layer before the next is applied. Once the filling is in place, it is shaped and polished to match your natural tooth. Composite fillings bond directly to the tooth structure, which can actually help support the remaining tooth and prevent breakage.",
      },
      {
        title: "Crowns or Caps",
        content: "A dental crown is a tooth-shaped cap that is placed over a damaged tooth to restore its shape, size, strength, and appearance. Crowns are recommended when a tooth is significantly decayed, cracked, weakened, or cosmetically flawed beyond what a filling can repair. At Heritage Oak Dental, we use advanced CAD/CAM technology and high-quality porcelain materials to create crowns that look, feel, and function like natural teeth. The process typically involves two visits: the first to prepare the tooth and take impressions, and the second to place the permanent crown. Temporary crowns are provided between visits. With proper care, a well-placed crown can last 10–15 years or more.",
      },
      {
        title: "Inlays",
        content: "Dental inlays are custom-made restorations used to repair mild to moderate tooth decay or damage that is too extensive for a simple filling but doesn't require a full crown. An inlay fits within the cusps (bumps) on the chewing surface of the tooth. They are fabricated from durable materials such as porcelain, composite resin, or gold, and are bonded directly to the tooth surface. Inlays are created in a dental laboratory from impressions taken of your tooth, ensuring a precise fit. Because they are made outside the mouth and then bonded in, inlays are stronger and more durable than traditional fillings. They preserve more tooth structure than a crown and can last 10–30 years with proper care.",
      },
      {
        title: "Onlays",
        content: "Dental onlays, sometimes called partial crowns, are similar to inlays but extend over one or more of the cusps of the tooth. They are used when the damage or decay is more extensive than what an inlay can address but not severe enough to warrant a full crown. Onlays are a conservative restoration option because they preserve more of the natural tooth structure than a crown. They are fabricated from porcelain, composite resin, or gold and are custom-made in a dental laboratory. Onlays are extremely durable and can withstand the forces of chewing. The procedure typically requires two appointments — one for preparation and impressions, and one for bonding the completed restoration.",
      },
      {
        title: "Prepless Veneers",
        content: "Prepless veneers are ultra-thin porcelain shells that are bonded to the front surface of teeth with little to no removal of the existing tooth structure. Unlike traditional veneers, prepless veneers do not require the dentist to grind down or reshape the natural teeth, making the procedure reversible and minimally invasive. They are an excellent option for patients who want to improve the appearance of their smile — correcting minor chips, gaps, discoloration, or slight misalignment — without permanently altering their natural teeth. Prepless veneers are custom-crafted to blend seamlessly with adjacent teeth and deliver a bright, even, natural-looking smile. Not all patients are candidates — your dentist will evaluate your bite, tooth size, and goals to determine if prepless veneers are appropriate for you.",
      },
      {
        title: "Porcelain Veneers",
        content: "Porcelain veneers are thin, custom-made shells designed to cover the front surface of teeth to improve their appearance. They are permanently bonded to the teeth and can dramatically change the color, shape, size, and length of your teeth. Veneers are an excellent solution for teeth that are severely discolored, worn down, chipped, broken, misaligned, uneven, or irregularly shaped, or that have gaps between them. The procedure requires removing a small amount of enamel from the tooth surface — typically 0.5 mm — to accommodate the veneer. Impressions are taken and sent to a dental laboratory, where your custom veneers are crafted. Temporary veneers are placed while permanent ones are being made. With proper care, porcelain veneers can last 10–15 years.",
      },
      {
        title: "Teeth Whitening",
        content: "Teeth whitening (or bleaching) is a simple, non-invasive dental treatment used to change the color of natural tooth enamel and is an ideal way to enhance the beauty of your smile. Since teeth whitening only works on natural tooth enamel, it is important to evaluate replacement of any old fillings, crowns, etc. before treatment — replacement of any restorations will be done at least 2 weeks after bleaching so they will match the newly bleached teeth. Teeth whitening is not permanent; a touch-up may be needed every several years, and more often if you smoke or drink coffee, tea, or wine.\n\nHome whitening requires two visits. At the first appointment, impressions are made to fabricate custom, clear plastic trays. At the second appointment, you try on the trays for proper fit and receive the whitening solution to use at home — worn twice a day for 30 minutes or overnight for a couple of weeks depending on the degree of staining and desired level of whitening.\n\nIn-office whitening involves a protective resin applied to the gums, followed by application of a professional-strength whitening gel and blue light for 20-minute intervals. Note: Women who are pregnant or lactating should not seek bleaching treatment.",
      },
    ],
  },
  {
    id: "general",
    title: "General Dentistry",
    subtitle: "Comprehensive preventive care to preserve your natural teeth and maintain optimal oral health",
    icon: "",
    description: "Comprehensive care including routine cleanings, fillings, digital x-rays, and preventative treatments.",
    intro: "General dentistry encompasses a broad range of preventive and restorative dental services designed to maintain your oral health throughout every stage of life. At Heritage Oak Dental, our general dentistry services focus on preventing dental problems before they start, diagnosing issues early, and providing effective treatments that preserve your natural teeth. Regular visits are the foundation of a healthy smile, and we make every effort to ensure your experience is comfortable and thorough.",
    whyUs: "Heritage Oak Dental treats general dentistry as the cornerstone of long-term oral health. Our team invests in the latest diagnostic technology — including digital X-rays, 3D imaging, and intraoral cameras — to give you the most thorough, accurate evaluation possible. We take time to explain findings in plain language, educate patients about prevention, and design personalized care plans that fit real lifestyles and budgets.",
    relatedIds: ["cosmetic", "restorative", "pediatric"],
    procedures: [
      {
        title: "Comprehensive Oral Exams",
        content: "A comprehensive oral exam is your first step toward optimal dental health. During this thorough evaluation, the dentist examines your teeth, gums, jaw joints, bite alignment, and oral tissues. Digital X-rays may be taken to detect issues not visible to the naked eye, such as decay between teeth, bone loss, abscesses, or tumors. The exam includes an oral cancer screening, periodontal assessment, and evaluation of existing dental work. Based on the findings, a personalized treatment plan is created that addresses all current needs and preventive goals. We recommend comprehensive exams for all new patients and periodically for established patients.",
      },
      {
        title: "Professional Teeth Cleaning (Prophylaxis)",
        content: "Professional cleanings are essential for maintaining oral health and preventing gum disease. Even with diligent brushing and flossing at home, plaque and tartar can build up in hard-to-reach areas. During a cleaning, a dental hygienist uses specialized instruments to remove plaque and calculus (hardened tartar) from above and below the gum line. The teeth are then polished to remove surface stains and smooth the enamel. Fluoride treatment may be applied to strengthen teeth against decay. We recommend professional cleanings every 6 months for most patients — or every 3–4 months for patients with a history of gum disease.",
      },
      {
        title: "Digital X-Rays",
        content: "Heritage Oak Dental uses state-of-the-art digital radiography to capture detailed images of your teeth, bone, and surrounding tissues. Digital X-rays use significantly less radiation than traditional film X-rays — up to 90% less — making them safer for patients. Images appear instantly on a chairside monitor, allowing the dentist to identify cavities, bone loss, infections, developmental abnormalities, and other conditions that are invisible during a visual examination. These images can be enhanced, enlarged, and easily shared with specialists if needed. We use bitewing X-rays for routine cavity detection and panoramic X-rays for a broad view of your entire oral structure.",
      },
      {
        title: "Fluoride Treatment",
        content: "Fluoride treatments help strengthen tooth enamel and protect against decay. The treatment involves applying a concentrated fluoride solution, gel, foam, or varnish to the teeth. Fluoride works by remineralizing weakened enamel and making teeth more resistant to acid attacks from bacteria and sugars. Professional fluoride treatments are especially beneficial for patients who are at higher risk of developing cavities, including children, patients with dry mouth, those with gum disease or recession, and patients undergoing radiation therapy near the head and neck. The treatment is quick, painless, and takes only a few minutes.",
      },
      {
        title: "Dental Sealants",
        content: "Dental sealants are thin, protective coatings applied to the chewing surfaces of the back teeth (premolars and molars), where most cavities in children and teens are found. The sealant quickly bonds into the grooves and depressions of the teeth, forming a protective shield over the enamel. The application is painless, quick, and can effectively protect teeth from decay for up to 10 years. Sealants are particularly recommended for children and teenagers as soon as their permanent back teeth come in, but adults without decay or fillings in their molars can also benefit. No drilling or anesthesia is needed.",
      },
      {
        title: "Oral Cancer Screening",
        content: "Oral cancer screening is a routine part of every dental examination at Heritage Oak Dental. The dentist carefully examines the lips, tongue, throat, tissues, and gums for any signs of abnormalities, including sores, discolorations, lumps, or rough patches. Early detection is critical — when caught early, oral cancer has a significantly higher survival rate. Risk factors include tobacco use, heavy alcohol consumption, excessive sun exposure, and HPV. We recommend annual screenings for all patients, and more frequent monitoring for high-risk individuals. If any suspicious area is found, a biopsy may be recommended.",
      },
      {
        title: "Night Guards and Mouth Guards",
        content: "Custom-fitted night guards protect your teeth from the damaging effects of bruxism (teeth grinding and clenching) that commonly occurs during sleep. Over time, bruxism can cause tooth wear, fractures, jaw pain, headaches, and TMJ disorders. A custom night guard is fabricated from impressions of your teeth, providing a precise and comfortable fit that over-the-counter options cannot match. We also create custom sports mouth guards that offer superior protection for athletes of all ages. A properly fitted mouth guard reduces the risk of broken teeth, lip and cheek injuries, and concussions during contact sports.",
      },
      {
        title: "Emergency Dental Care",
        content: "Dental emergencies can happen at any time, and Heritage Oak Dental is committed to providing prompt care when you need it most. Common dental emergencies include severe toothaches, knocked-out teeth, broken or chipped teeth, lost fillings or crowns, abscesses, and soft tissue injuries. If you experience a dental emergency, call our office immediately at (916) 626-4050. Quick action can often save a damaged or knocked-out tooth. We reserve time in our schedule to accommodate emergency patients and strive to see you the same day whenever possible.",
      },
    ],
  },
  {
    id: "implant",
    title: "Implant Dentistry",
    subtitle: "Restore missing teeth permanently with state-of-the-art dental implants",
    icon: "",
    description: "Restore missing teeth permanently with state-of-the-art dental implants that look and function naturally.",
    intro: "Dental implants are the gold standard for replacing missing teeth. They are titanium posts that are surgically placed into the jawbone, where they serve as artificial tooth roots. Once the implant integrates with the bone — a process called osseointegration — a custom crown, bridge, or denture is attached, creating a restoration that looks, feels, and functions like natural teeth. At Heritage Oak Dental, Dr. Douglas has advanced training in dental implant placement, allowing us to handle the entire implant process in-house.",
    whyUs: "Dr. Douglas has advanced training in dental implant placement and restoration, allowing Heritage Oak Dental to provide comprehensive implant care under one roof without referring patients to outside specialists. We use 3D CBCT imaging for precise surgical planning, the highest quality implant systems, and CAD/CAM technology for natural-looking crowns and restorations. Our goal is to restore your smile with results that are indistinguishable from natural teeth.",
    relatedIds: ["oral", "restorative", "sedation"],
    procedures: [
      {
        title: "Single Tooth Implants",
        content: "A single dental implant replaces one missing tooth without affecting the adjacent healthy teeth. The implant consists of three parts: the titanium post placed in the jawbone, an abutment that connects the post to the restoration, and a custom porcelain crown that matches your natural teeth. The procedure is typically completed in two phases over 3–6 months. First, the implant post is placed and allowed to heal and integrate with the bone. Then the abutment and crown are attached. Single tooth implants have a success rate of over 95% and with proper care can last a lifetime. They prevent bone loss that occurs when a tooth is missing and maintain the natural spacing of your teeth.",
      },
      {
        title: "Implant-Supported Bridges",
        content: "When multiple adjacent teeth are missing, an implant-supported bridge provides a fixed, permanent solution without requiring an implant for every missing tooth. Typically, two implants are placed at either end of the gap, and a bridge of connected crowns spans the space between them. This approach is more conservative and cost-effective than placing individual implants for each missing tooth. Implant-supported bridges preserve jawbone density, restore full chewing function, and eliminate the need for removable partial dentures. They look and function like natural teeth and do not require the grinding down of adjacent healthy teeth that traditional bridges demand.",
      },
      {
        title: "Implant-Supported Dentures",
        content: "For patients who are missing all or most of their teeth, implant-supported dentures offer a revolutionary alternative to traditional removable dentures. By anchoring a full denture to 4–6 strategically placed implants, patients experience dramatically improved stability, comfort, and chewing ability. There are two types: fixed (permanently attached, removable only by a dentist) and removable (snap-on overdentures that click onto implant attachments for easy cleaning). Implant-supported dentures eliminate common complaints about traditional dentures — slipping, clicking, sore spots, and restricted diet. They also preserve jawbone structure, preventing the facial collapse that occurs with long-term denture wear.",
      },
      {
        title: "Bone Grafting",
        content: "Bone grafting is a procedure that rebuilds or regenerates jawbone that has been lost due to tooth extraction, gum disease, injury, or long-term denture wear. Adequate bone volume and density are essential for successful dental implant placement. During a bone graft, bone material — which may come from your own body, a donor, an animal source, or synthetic materials — is placed in the area of bone deficiency. Over several months, the graft material integrates with your natural bone, creating a strong foundation for implant placement. Modern bone grafting techniques have made implant treatment possible for many patients who were previously told they didn't have enough bone.",
      },
      {
        title: "All-on-4 / All-on-6 Implants",
        content: "The All-on-4 and All-on-6 concepts are innovative treatment approaches that provide a full arch of fixed teeth supported by just four or six strategically angled implants. This technique often eliminates the need for bone grafting by utilizing the available bone more efficiently. Patients can frequently receive a temporary set of fixed teeth on the same day as implant placement. The final prosthesis is a custom-designed, permanent bridge that is indistinguishable from natural teeth. This approach offers a faster, more affordable path to a full smile restoration compared to placing individual implants for each missing tooth.",
      },
      {
        title: "Mini Dental Implants",
        content: "Mini dental implants (MDIs) are smaller-diameter implants that can be used in situations where standard implants may not be feasible due to insufficient bone width or other anatomical limitations. They are commonly used to stabilize lower dentures, replace small teeth, or serve as temporary anchorage devices during orthodontic treatment. MDIs can often be placed in a single visit with minimal invasiveness, faster healing times, and lower cost than conventional implants. While they may not be suitable for all situations, mini implants provide an excellent option for patients seeking improved denture stability or who cannot undergo more extensive surgical procedures.",
      },
    ],
  },
  {
    id: "oral",
    title: "Oral & Maxillofacial Surgery",
    subtitle: "Expert surgical care performed with precision and compassion",
    icon: "",
    description: "Expert surgical care including extractions, wisdom teeth removal, and advanced jaw procedures.",
    intro: "Oral and maxillofacial surgery encompasses surgical procedures involving the mouth, jaw, face, and skull. At Heritage Oak Dental, we provide a range of oral surgery services in the comfort of our modern office, with sedation options available to ensure your comfort throughout any procedure. Dr. Douglas has advanced training in oral surgery techniques, allowing us to handle many surgical needs without referring patients to outside specialists.",
    whyUs: "Many dental offices refer oral surgery cases to outside specialists, but Heritage Oak Dental handles a wide range of surgical procedures in-house. This means greater continuity of care, a familiar environment, and the convenience of a single trusted team managing your treatment from start to finish. We utilize advanced 3D imaging for precise surgical planning and offer multiple sedation options to ensure your comfort.",
    relatedIds: ["implant", "sedation", "general"],
    procedures: [
      {
        title: "Wisdom Teeth Extraction",
        content: "Wisdom teeth, or third molars, are the last teeth to develop and often don't have adequate room to emerge properly. Impacted wisdom teeth can grow sideways, partially emerge, or remain trapped beneath the gum and bone, potentially causing pain, infection, cyst formation, damage to adjacent teeth, and gum disease. Our team evaluates wisdom teeth using advanced 3D imaging to plan precise, minimally invasive extractions. The procedure is performed under local anesthesia, conscious sedation, or IV sedation depending on the complexity and patient preference. Most patients recover within 3–5 days with proper aftercare.",
      },
      {
        title: "Surgical Tooth Extraction",
        content: "Some teeth require surgical extraction due to severe decay, fracture below the gum line, impaction, or complex root anatomy. Unlike a simple extraction where the tooth is loosened and removed with forceps, surgical extraction may involve making an incision in the gum tissue, removing bone around the tooth, or sectioning the tooth into pieces for easier removal. Heritage Oak Dental uses gentle techniques and advanced technology to minimize trauma and promote faster healing. Various sedation options are available to ensure your comfort during the procedure.",
      },
      {
        title: "Bone Grafting and Ridge Preservation",
        content: "After a tooth is extracted, the surrounding bone begins to resorb and shrink. Ridge preservation is a bone grafting procedure performed at the time of extraction to maintain the bone volume and shape of the jaw ridge. Bone graft material is placed into the empty socket and covered with a protective membrane. This procedure is especially important when a dental implant is planned for the extraction site, as it preserves the bone needed for successful implant placement. Without ridge preservation, significant bone loss can occur within weeks to months after extraction, potentially requiring more extensive grafting later.",
      },
      {
        title: "Frenectomy",
        content: "A frenectomy is a minor surgical procedure to remove or modify a frenum — the small fold of tissue that connects the lips, cheeks, or tongue to the gum area. An abnormally tight or thick frenum can cause issues such as tongue-tie (restricted tongue movement affecting speech and eating), lip-tie (which can create a gap between the front teeth), and gum recession. The procedure is quick, typically taking 15–30 minutes, and can be performed with a dental laser for minimal bleeding and faster healing. Frenectomies are commonly performed on infants, children, and adults.",
      },
      {
        title: "Pre-Prosthetic Surgery",
        content: "Pre-prosthetic surgery is performed to prepare the mouth for the placement of a prosthesis such as dentures. For a denture to fit properly, the bone ridge must be the proper shape and size. When teeth are extracted, the underlying bone may heal irregularly, creating sharp edges, bumps, or uneven areas that make denture wearing uncomfortable. Pre-prosthetic surgery smooths and reshapes the bone, removes excess gum tissue, or reduces bony ridges to create an ideal foundation for comfortable, stable dentures.",
      },
      {
        title: "Biopsy and Oral Pathology",
        content: "Any unusual growth, sore, discoloration, or lesion in the mouth that persists for more than two weeks should be evaluated. A biopsy involves removing a small sample of tissue for laboratory analysis to determine whether a growth is benign, precancerous, or cancerous. Early detection of oral pathology is essential for successful treatment outcomes. Heritage Oak Dental performs biopsies in-office and works closely with oral pathology laboratories to ensure accurate and timely diagnosis.",
      },
    ],
  },
  {
    id: "orthodontics",
    title: "Orthodontics",
    subtitle: "Straighten your smile with modern orthodontic solutions for all ages",
    icon: "",
    description: "Straighten your smile with traditional braces, clear ceramic braces, or invisible aligners like Invisalign.",
    intro: "A straight, properly aligned smile isn't just about aesthetics — it's about health. Misaligned teeth can lead to difficulty cleaning, increased risk of decay and gum disease, abnormal wear, jaw pain, and speech difficulties. Heritage Oak Dental offers comprehensive orthodontic solutions for patients of all ages, from traditional braces to modern clear aligner systems like Invisalign. Dr. Douglas has advanced training in orthodontics with both braces and clear aligners.",
    whyUs: "Heritage Oak Dental is a one-stop destination for orthodontic care, eliminating the need to visit a separate orthodontic office. Dr. Douglas has completed advanced training in orthodontics and stays current with the latest techniques and aligner technology. We offer CareCredit financing with up to 18 months interest-free specifically for Invisalign treatment, making orthodontic care more accessible than ever.",
    relatedIds: ["cosmetic", "pediatric", "general"],
    procedures: [
      {
        title: "Traditional Metal Braces",
        content: "Traditional metal braces remain one of the most effective methods for correcting complex orthodontic issues. Modern metal braces are smaller, more comfortable, and more efficient than ever before. They consist of high-grade stainless steel brackets bonded to each tooth and connected by an archwire that guides teeth into proper alignment. Elastic bands (ligatures) hold the wire to the brackets and can be customized in various colors. Metal braces are ideal for treating severe crowding, significant bite issues, and complex tooth movements. Treatment time varies from 12–36 months depending on the severity of the case.",
      },
      {
        title: "Clear Ceramic Braces",
        content: "Clear ceramic braces function identically to metal braces but use tooth-colored or clear brackets that blend with the natural tooth color, making them far less noticeable. They are a popular choice for adult patients and older teens who want the effectiveness of traditional braces with a more discreet appearance. Ceramic braces are strong and durable, though they require more careful maintenance to prevent staining of the clear elastic ties. Treatment time is comparable to metal braces, and they can address the same range of orthodontic issues.",
      },
      {
        title: "Invisalign Clear Aligners",
        content: "Invisalign uses a series of custom-made, virtually invisible plastic aligners to gradually shift teeth into their desired positions. Each set of aligners is worn for approximately 1–2 weeks before moving to the next set in the series. Invisalign aligners are removable, allowing you to eat, drink, brush, and floss normally — a significant advantage over fixed braces. They are ideal for treating mild to moderate crowding, spacing issues, and certain bite problems. Heritage Oak Dental offers Invisalign for both adults and teens. Treatment time typically ranges from 6–18 months. CareCredit financing with up to 18 months interest-free is available for Invisalign treatment.",
      },
      {
        title: "Retainers",
        content: "After active orthodontic treatment is complete, retainers are essential to maintain your new smile. Without retention, teeth have a natural tendency to shift back toward their original positions. Heritage Oak Dental provides both fixed (bonded) retainers and removable retainers depending on your specific needs. Fixed retainers are thin wires bonded to the back of the front teeth and provide continuous retention without any patient compliance required. Removable retainers can be clear (Essix-style) or traditional (Hawley-style with a wire and acrylic). Wearing your retainer as directed is critical for long-term orthodontic success.",
      },
      {
        title: "Early Orthodontic Treatment (Phase I)",
        content: "The American Association of Orthodontists recommends that children receive their first orthodontic evaluation by age 7. Early treatment, also called Phase I or interceptive orthodontics, addresses developing problems before they become more serious. By guiding jaw growth and tooth eruption, early intervention can create room for crowded teeth, correct bite problems, reduce the need for tooth extraction, and shorten the duration of later orthodontic treatment. Not all children need early treatment, but a timely evaluation allows us to monitor development and intervene at the optimal time if needed.",
      },
    ],
  },
  {
    id: "pediatric",
    title: "Pediatric Dentistry",
    subtitle: "Gentle, friendly dental care for your children in a welcoming environment",
    icon: "",
    description: "Specialized gentle dental care tailored for children of all ages, making every visit comfortable and fun.",
    intro: "We believe that positive dental experiences in childhood create a foundation for lifelong oral health. Heritage Oak Dental provides gentle, compassionate dental care for infants, children, and adolescents in a warm, welcoming environment. Our office features a dedicated kids' play area to help young patients feel comfortable and at ease. We recommend that children visit the dentist by their first birthday or within six months of their first tooth erupting.",
    whyUs: "At Heritage Oak Dental, we love our young patients. We've designed our office with kids in mind — from our colorful play area to our patient, encouraging team. We take the time to explain every step of treatment in age-appropriate terms and never rush young patients. Our goal is to make every visit so positive that children actually look forward to coming to the dentist.",
    relatedIds: ["general", "orthodontics", "sedation"],
    procedures: [
      {
        title: "First Dental Visit",
        content: "A child's first dental visit is an important milestone that sets the tone for their relationship with dental care. At Heritage Oak Dental, we make first visits fun and low-pressure. The appointment typically includes a gentle examination of your child's teeth, jaws, bite, gums, and oral tissues. We check for cavities and assess growth and development. We also discuss oral hygiene practices, diet recommendations, fluoride needs, and habits such as thumb-sucking or pacifier use. Parents are welcome and encouraged to accompany their child during the appointment.",
      },
      {
        title: "Children's Teeth Cleaning",
        content: "Professional cleanings for children are similar to adult cleanings but tailored to be gentle, educational, and engaging. The hygienist removes plaque and tartar buildup, polishes the teeth, and applies fluoride treatment. These visits are also an opportunity to teach children proper brushing and flossing techniques in a fun, interactive way. Regular cleanings every six months help prevent cavities, catch problems early, and establish healthy habits that will benefit your child for life.",
      },
      {
        title: "Dental Sealants for Kids",
        content: "Children's molars have deep grooves and pits where food particles and bacteria easily become trapped, making them highly susceptible to cavities. Dental sealants are thin, protective coatings painted onto the chewing surfaces of the back teeth. The sealant flows into the grooves and hardens, creating a smooth barrier that prevents food and bacteria from getting stuck. The application is quick, painless, and does not require any drilling or numbing. Sealants can reduce the risk of molar cavities by up to 80% and are recommended as soon as permanent molars erupt, typically around ages 6 and 12.",
      },
      {
        title: "Fluoride Treatments for Children",
        content: "Professional fluoride treatments are an important part of pediatric preventive care. Children's developing teeth are especially vulnerable to decay, and fluoride strengthens enamel and helps repair early stages of tooth decay before cavities form. During a professional treatment, a concentrated fluoride varnish, gel, or foam is applied to the teeth. The treatment is quick and painless. We may recommend fluoride treatments every 3–6 months depending on your child's cavity risk. We also provide guidance on appropriate fluoride use at home, including toothpaste selection and supplementation if needed.",
      },
      {
        title: "Space Maintainers",
        content: "When a baby tooth is lost prematurely — due to decay, injury, or extraction — the surrounding teeth can shift into the empty space, potentially blocking the permanent tooth from erupting properly. A space maintainer is a custom-made appliance that holds the space open until the permanent tooth is ready to come in. Space maintainers can be fixed (cemented in place) or removable, and they are designed to be comfortable and unobtrusive. This simple preventive measure can avoid the need for more complex and costly orthodontic treatment later.",
      },
      {
        title: "Habit Counseling",
        content: "Prolonged oral habits such as thumb-sucking, finger-sucking, tongue-thrusting, and pacifier use can affect the development of the teeth and jaws if they continue beyond age 3–4. Heritage Oak Dental provides gentle, positive habit counseling for children and parents. We assess the impact of the habit on dental development and provide age-appropriate strategies and appliances when needed to help children break the habit before permanent damage occurs. Our approach is always encouraging and supportive — never punitive.",
      },
    ],
  },
  {
    id: "periodontics",
    title: "Periodontics",
    subtitle: "Protect your gums and the foundation of your smile",
    icon: "",
    description: "Expert gum care including scaling, root planing, and periodontal maintenance to keep your gums healthy.",
    intro: "Periodontics focuses on the prevention, diagnosis, and treatment of diseases affecting the gums and supporting structures of the teeth. Gum disease (periodontal disease) is one of the most common dental conditions and a leading cause of tooth loss in adults. At Heritage Oak Dental, we provide comprehensive periodontal care ranging from preventive maintenance to advanced surgical treatments. Dr. Douglas has specialized training in tissue grafting and other periodontal procedures.",
    whyUs: "Heritage Oak Dental treats periodontal health as inseparable from overall dental wellness. We use advanced diagnostic tools — including digital X-rays, 3D imaging, and detailed periodontal charting — to catch and treat gum disease early. Dr. Douglas has advanced training in tissue grafting and periodontal surgical procedures, allowing us to provide comprehensive care in-house.",
    relatedIds: ["general", "implant", "restorative"],
    procedures: [
      {
        title: "Scaling and Root Planing (Deep Cleaning)",
        content: "Scaling and root planing is a non-surgical procedure used to treat gum disease. It is essentially a deeper, more thorough cleaning that goes below the gum line. Scaling involves removing plaque and tartar (calculus) from the tooth surfaces and beneath the gums. Root planing smooths the root surfaces, which helps the gums reattach to the teeth and eliminates rough areas where bacteria tend to accumulate. The procedure is typically performed under local anesthesia for comfort and may be completed in one or multiple visits depending on the severity of the disease. Most patients experience significant improvement in gum health following treatment.",
      },
      {
        title: "Periodontal Maintenance",
        content: "After active periodontal treatment such as scaling and root planing, ongoing periodontal maintenance is essential to prevent disease recurrence. Periodontal maintenance visits are more thorough than routine cleanings and are typically scheduled every 3–4 months. During these visits, the hygienist measures periodontal pocket depths, removes plaque and calculus above and below the gum line, polishes the teeth, and evaluates the overall health of the gums. Consistent periodontal maintenance has been shown to significantly reduce tooth loss and maintain the results achieved through initial treatment.",
      },
      {
        title: "Gum Grafting (Tissue Grafting)",
        content: "Gum recession exposes the tooth roots, which can cause sensitivity, increase the risk of root decay, and create an unaesthetic appearance. Gum grafting is a surgical procedure that covers exposed roots by transplanting gum tissue to the affected areas. There are several types of gum grafts: connective tissue grafts (the most common, using tissue from under the palate), free gingival grafts (using tissue directly from the palate), and pedicle grafts (using tissue from near the affected tooth). Dr. Douglas has advanced training in tissue grafting procedures and uses modern techniques to minimize discomfort and promote optimal healing.",
      },
      {
        title: "Crown Lengthening",
        content: "Crown lengthening is a surgical procedure that reshapes or removes gum tissue and sometimes bone to expose more of a tooth's structure. It is performed for both restorative and cosmetic purposes. Restoratively, crown lengthening may be needed when a tooth is decayed, broken below the gum line, or has insufficient tooth structure for a crown or bridge. Cosmetically, it is used to correct a \"gummy smile\" where excessive gum tissue covers the teeth, making them appear short. The procedure creates a more balanced, aesthetically pleasing gum line and provides the dentist with adequate tooth structure for successful restorations.",
      },
      {
        title: "Pocket Reduction Surgery",
        content: "When periodontal disease has progressed to the point where deep pockets have formed between the teeth and gums, scaling and root planing alone may not be sufficient. Pocket reduction surgery (also called flap surgery or osseous surgery) involves folding back the gum tissue, removing disease-causing bacteria and tartar from the deep pockets, and then securing the tissue into a position that reduces pocket depth. In some cases, irregular bone surfaces are smoothed to eliminate areas where bacteria can hide. Reducing pocket depth makes it easier for patients and dental professionals to keep the area clean, halting the progression of disease.",
      },
      {
        title: "Laser Gum Treatment",
        content: "Heritage Oak Dental utilizes dental laser technology for various periodontal procedures. Laser treatment can be used to remove diseased gum tissue, reshape the gum line, eliminate bacteria from periodontal pockets, and promote tissue regeneration. Advantages of laser gum treatment include reduced bleeding, less swelling, minimized discomfort, faster healing times, and often no need for sutures. Laser therapy can be used as a standalone treatment or in conjunction with traditional periodontal procedures for enhanced results.",
      },
    ],
  },
  {
    id: "restorative",
    title: "Restorative Dentistry",
    subtitle: "Rebuild your smile with natural-looking, long-lasting restorations",
    icon: "",
    description: "Restore damaged or missing teeth with natural-looking crowns, bridges, dentures, and fillings.",
    intro: "Restorative dentistry focuses on repairing and restoring damaged, decayed, or missing teeth to their full function and appearance. Whether you need a simple filling or a complete smile reconstruction, Heritage Oak Dental uses the latest materials, techniques, and technology — including CAD/CAM, digital impressions, and 3D imaging — to deliver durable, natural-looking results. Our goal is always to preserve as much natural tooth structure as possible while creating restorations that look and feel like your own teeth.",
    whyUs: "Heritage Oak Dental uses advanced CAD/CAM technology and high-quality materials to create restorations that look and feel completely natural. We take a conservative approach — always trying to preserve as much natural tooth structure as possible — while using durable materials that stand the test of time. Our in-house technology often allows us to complete restorations in fewer visits than traditional methods require.",
    relatedIds: ["cosmetic", "implant", "general"],
    procedures: [
      {
        title: "Dental Fillings",
        content: "When a tooth develops a cavity, the decayed portion must be removed and replaced with a filling material to restore the tooth's shape and function. Heritage Oak Dental primarily uses tooth-colored composite resin fillings that blend seamlessly with your natural teeth. Composite fillings are bonded directly to the tooth structure, which can actually strengthen the remaining tooth. The procedure is typically completed in a single visit and involves removing the decay, cleaning the area, and applying the composite material in layers. Each layer is hardened with a special curing light before the final shaping and polishing.",
      },
      {
        title: "Dental Crowns",
        content: "A dental crown completely covers and encases a damaged tooth, restoring its shape, size, strength, and appearance. Crowns are recommended for teeth with large cavities that can't support fillings, cracked or weakened teeth, teeth that have had root canal treatment, severely worn or misshapen teeth, and teeth supporting dental bridges. Heritage Oak Dental uses advanced CAD/CAM technology to design and create precise, natural-looking porcelain crowns. The process typically requires two visits — one for preparation and impressions, and one for final placement.",
      },
      {
        title: "Dental Bridges",
        content: "A dental bridge literally bridges the gap created by one or more missing teeth. A traditional bridge consists of crowns placed on the teeth on either side of the gap (abutment teeth) with an artificial tooth (pontic) suspended between them. Bridges restore your ability to chew and speak properly, maintain facial shape, prevent remaining teeth from shifting, and distribute bite forces correctly. Heritage Oak Dental also offers implant-supported bridges for patients who prefer not to modify adjacent healthy teeth. With proper care and oral hygiene, bridges can last 10–15 years or longer.",
      },
      {
        title: "Dentures (Full and Partial)",
        content: "Dentures are removable appliances that replace missing teeth and surrounding tissues. Full dentures replace all teeth in an arch and rest directly on the gums, while partial dentures replace some missing teeth and are held in place by clasps that attach to remaining natural teeth. Modern dentures are more comfortable, natural-looking, and functional than ever before. Heritage Oak Dental creates custom dentures that are precisely fitted to your mouth for optimal comfort, appearance, and function. We also offer implant-supported dentures for dramatically improved stability and chewing ability.",
      },
      {
        title: "Root Canal Therapy",
        content: "Root canal therapy is a procedure to save a tooth that is severely infected or damaged at its core. Inside each tooth is a soft tissue called the pulp, which contains nerves and blood vessels. When the pulp becomes infected due to deep decay, repeated dental procedures, cracks, or trauma, it can cause severe pain and lead to an abscess. During root canal therapy, the infected pulp is removed, the inside of the tooth is cleaned and disinfected, and the space is filled and sealed. A crown is typically placed afterward to protect and restore the tooth. Contrary to popular belief, modern root canal therapy is no more uncomfortable than having a filling placed.",
      },
      {
        title: "Inlays and Onlays",
        content: "Inlays and onlays are indirect restorations used when a tooth has too much damage for a filling but not enough to require a full crown. An inlay fits within the cusps of the tooth, while an onlay extends over one or more cusps. They are custom-fabricated in a dental laboratory from porcelain, composite resin, or gold, ensuring a precise fit and natural appearance. Inlays and onlays are bonded to the tooth, providing a strong, long-lasting restoration that preserves more natural tooth structure than a crown. They are sometimes called partial crowns and represent a conservative, tooth-preserving approach to restoration.",
      },
      {
        title: "Full Mouth Reconstruction",
        content: "Full mouth reconstruction is a comprehensive treatment plan that addresses all aspects of dental health simultaneously — combining restorative, cosmetic, periodontal, and sometimes orthodontic treatments to completely rebuild the smile. This approach is recommended for patients with multiple missing teeth, severely worn dentition, extensive decay, trauma, or bite problems. The process begins with a thorough evaluation, diagnostic records, and a detailed treatment plan. Treatment may include crowns, bridges, implants, veneers, gum treatment, and orthodontics, all coordinated for optimal functional and aesthetic results.",
      },
    ],
  },
  {
    id: "sedation",
    title: "Sedation Dentistry",
    subtitle: "Relax and feel completely comfortable during any dental treatment",
    icon: "",
    description: "Experience relaxed, anxiety-free visits with safe and effective oral, nitrous, and IV sedation options.",
    intro: "We understand that many patients experience anxiety about dental visits, and we never want fear to prevent anyone from receiving the care they need. Heritage Oak Dental offers multiple levels of sedation to ensure every patient can receive comfortable, stress-free dental care. Dr. Douglas has advanced training in IV sedation, and our team is experienced in monitoring patients throughout sedation procedures. Whether you need help relaxing during a routine cleaning or require deeper sedation for a surgical procedure, we have options to meet your needs.",
    whyUs: "Heritage Oak Dental is one of the few general dental offices in the Rocklin area to offer full IV sedation in-house, thanks to Dr. Douglas's advanced sedation training. This means patients don't need to be referred to a hospital or surgery center for complex procedures requiring deeper sedation. Our team monitors all vital signs throughout every sedation procedure, ensuring the highest standards of safety and comfort.",
    relatedIds: ["general", "oral", "pediatric"],
    procedures: [
      {
        title: "Nitrous Oxide (Laughing Gas)",
        content: "Nitrous oxide, commonly known as laughing gas, is the mildest form of sedation available. It is administered through a small mask placed over the nose and takes effect within minutes. Patients remain fully conscious and able to respond to instructions, but feel relaxed, calm, and less aware of the dental procedure. One of the biggest advantages of nitrous oxide is that its effects wear off almost immediately after the mask is removed — patients can drive themselves home and resume normal activities right away. Nitrous oxide is safe for both adults and children and can be used for any dental procedure.",
      },
      {
        title: "Oral Sedation",
        content: "Oral sedation involves taking a prescribed medication (typically a benzodiazepine such as triazolam) before your appointment. The medication produces a moderate level of sedation — patients feel drowsy and deeply relaxed but remain conscious. Some patients become drowsy enough to fall asleep during the procedure, though they can be easily awakened. Oral sedation is ideal for patients with moderate dental anxiety, those undergoing lengthy procedures, or patients with a strong gag reflex. Because the medication takes time to take effect, it is typically taken about an hour before the appointment. A responsible adult must drive you to and from the office.",
      },
      {
        title: "IV Sedation",
        content: "IV (intravenous) sedation delivers sedative medication directly into the bloodstream through a small needle in the arm or hand. This allows the dentist to precisely control the level of sedation throughout the procedure. IV sedation produces a deeper level of relaxation than oral sedation, and most patients have little to no memory of the procedure afterward. Patients remain in a semi-conscious state and can still respond to verbal commands, but feel deeply relaxed and unaware of the dental work being performed. Dr. Douglas has advanced training in IV sedation administration and monitoring, ensuring the highest level of safety and comfort. IV sedation is ideal for patients with severe dental anxiety, those undergoing extensive procedures, and patients who need multiple treatments completed in a single visit.",
      },
      {
        title: "General Anesthesia",
        content: "General anesthesia produces a state of complete unconsciousness and is reserved for the most complex surgical procedures or for patients who cannot tolerate treatment under lighter forms of sedation. Under general anesthesia, patients are completely asleep and unaware of the procedure. Heritage Oak Dental provides this option for appropriate cases, with full patient monitoring throughout the procedure including heart rate, blood pressure, oxygen levels, and breathing. Strict fasting requirements apply — patients must not eat or drink for 8 hours before the procedure. A responsible adult must accompany the patient and provide transportation and supervision for 24 hours following the procedure.",
      },
      {
        title: "Sedation for Children",
        content: "Some children experience significant anxiety about dental treatment, have difficulty sitting still for extended procedures, or have special needs that make traditional dental care challenging. Heritage Oak Dental offers age-appropriate sedation options for pediatric patients, including nitrous oxide and, when necessary, deeper sedation. Our team takes extra care to ensure young patients are safe and comfortable throughout any sedation procedure. Parents are fully informed about the sedation process, receive detailed pre- and post-operative instructions, and are welcome to be present during treatment.",
      },
    ],
  },
];

export const RESOURCES = [
  { id: "newpatient", title: "New Patient Forms" },
  { id: "finance", title: "Finance" },
  { id: "pretreatment", title: "Pre-Treatment Instructions" },
  { id: "posttreatment", title: "Post-Treatment Instructions" },
];

export const TEAM = [
  {
    id: "shane-douglas",
    name: "Dr. Shane Douglas",
    role: "Lead Dentist",
    image: "dr-douglas.png",
    bio: "Dr. Shane Douglas is committed to providing exceptional dental care with a gentle touch. He continually invests in advanced education to bring the latest techniques and technologies to Heritage Oak Dental.",
  },
  {
    id: "ben-kloss",
    name: "Dr. Ben Kloss",
    role: "Associate Dentist",
    image: "dr-kloss.png",
    bio: "Dr. Ben Kloss focuses on patient comfort and comprehensive care. His personalized approach ensures every patient feels heard and receives treatments tailored to their specific oral health goals.",
  },
];
