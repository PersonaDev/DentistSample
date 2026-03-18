export type Procedure = { title: string; content: string };

export type Block =
  | string
  | { bullets: string[] }
  | { numbered: string[] }
  | { sub: string; blocks: Block[] };

export type PageSection = {
  title?: string;
  variant?: "default" | "yellow";
  blocks: Block[];
};

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
  pageSections?: PageSection[];
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
        content: "A composite is a tooth colored filling that is used to repair a tooth that is affected by decay, cracks, fractures, etc. The decayed or affected portion of the tooth will be removed and then filled with a composite filling.\n\nBecause composite fillings are tooth colored, they can be closely matched to the color of existing teeth, and are more aesthetically suited for use in front teeth or the more visible areas of the teeth.\n\nComposite fillings are usually placed in one appointment. While the tooth is numb, your dentist will remove decay as necessary. The space will then be thoroughly cleaned and carefully prepared before the new filling is placed. If the decay was near the nerve of the tooth, a special medication will be applied for added protection. The composite filling will then be precisely placed, shaped, and polished, restoring your tooth to its original shape and function.\n\nReasons for composite fillings: Chipped teeth, closing space between two teeth, cracked or broken teeth, decayed teeth, worn teeth.",
      },
      {
        title: "Crowns or Caps",
        content: "A dental crown is a tooth-shaped cap that is placed over a damaged tooth to restore its shape, size, strength, and appearance. Crowns are recommended when a tooth is significantly decayed, cracked, weakened, or cosmetically flawed beyond what a filling can repair. At Heritage Oak Dental, we use advanced CAD/CAM technology and high-quality porcelain materials to create crowns that look, feel, and function like natural teeth. The process typically involves two visits: the first to prepare the tooth and take impressions, and the second to place the permanent crown.",
      },
      {
        title: "Inlays",
        content: "Dental inlays are custom-made restorations used to repair mild to moderate tooth decay or damage that is too extensive for a simple filling but doesn't require a full crown. An inlay fits within the cusps (bumps) on the chewing surface of the tooth. They are fabricated from durable materials such as porcelain, composite resin, or gold, and are bonded directly to the tooth surface.",
      },
      {
        title: "Onlays",
        content: "Dental onlays, sometimes called partial crowns, are similar to inlays but extend over one or more of the cusps of the tooth. They are used when the damage or decay is more extensive than what an inlay can address but not severe enough to warrant a full crown. Onlays are a conservative restoration option because they preserve more of the natural tooth structure than a crown.",
      },
      {
        title: "Prepless Veneers",
        content: "Prepless veneers are ultra-thin porcelain shells that are bonded to the front surface of teeth with little to no removal of the existing tooth structure. Unlike traditional veneers, prepless veneers do not require the dentist to grind down or reshape the natural teeth, making the procedure reversible and minimally invasive. They are an excellent option for patients who want to improve the appearance of their smile without permanently altering their natural teeth.",
      },
      {
        title: "Porcelain Veneers",
        content: "Porcelain veneers are thin, custom-made shells designed to cover the front surface of teeth to improve their appearance. They are permanently bonded to the teeth and can dramatically change the color, shape, size, and length of your teeth. Veneers are an excellent solution for teeth that are severely discolored, worn down, chipped, broken, misaligned, uneven, or irregularly shaped, or that have gaps between them.",
      },
      {
        title: "Teeth Whitening",
        content: "Teeth whitening (or bleaching) is a simple, non-invasive dental treatment used to change the color of natural tooth enamel and is an ideal way to enhance the beauty of your smile. Because having whiter teeth has now become the number one aesthetic concern of most patients, there are a number of ways to whiten teeth.\n\nTeeth whitening is not permanent. A touch-up may be needed every several years, and more often if you smoke, drink coffee, tea, or wine.\n\nThis type of teeth whitening usually requires two visits. At the first appointment, impressions (molds) will be made of your teeth to fabricate custom, clear plastic, trays. At your second appointment, you will try on the trays for proper fit, and adjustments will be made if necessary. The trays are worn with special whitening solution either twice a day for 30 minutes or overnight for a couple of weeks.",
      },
    ],
  },
  {
    id: "general",
    title: "General Dentistry",
    subtitle: "Comprehensive preventive care to preserve your natural teeth and maintain optimal oral health",
    icon: "",
    description: "Comprehensive care including routine cleanings, fillings, digital x-rays, and preventative treatments.",
    intro: "A preventive program is a cooperative effort by the patient, dentist, and dental team to preserve the natural dentition and supporting structures by preventing the onset, progress, and recurrence of dental diseases and conditions. At Heritage Oak Dental we want to preserve your natural dentition because we know it will provide you the best long term service when compared to even the most modern restorative dental procedures.",
    whyUs: "Heritage Oak Dental treats general dentistry as the cornerstone of long-term oral health. Our team invests in the latest diagnostic technology — including digital X-rays, 3D imaging, and intraoral cameras — to give you the most thorough, accurate evaluation possible.",
    relatedIds: ["cosmetic", "restorative", "pediatric"],
    procedures: [],
    pageSections: [
      {
        title: "Dental X-Rays",
        blocks: [
          "X-rays (Dental Radiographs) are essential, preventative, diagnostic tools that provide valuable information not visible during a regular dental exam. Dentists and dental hygienists use this information to safely and accurately detect hidden dental abnormalities and complete an accurate treatment plan. Without x-rays, problem areas would go undetected until the problem was causing greater damage.",
          {
            sub: "Dental Radiographs help reveal:",
            blocks: [
              {
                bullets: [
                  "Abscesses or cysts",
                  "Bone loss",
                  "Cancerous malignant and non-cancerous benign tumors",
                  "Decay between the teeth",
                  "Developmental abnormalities",
                  "Poor tooth and root positions",
                  "Problems inside a tooth or below the gum line",
                ],
              },
            ],
          },
          "Detecting and treating dental problems at an early stage can save your teeth! It can also help save time, money, and unnecessary discomfort.",
          {
            sub: "Are Dental X-Rays Safe?",
            blocks: [
              "The amount of radiation exposure from a full mouth series of x-rays is equal to the amount a person receives in a single day from natural sources. We do everything possible to minimize the amount of radiation exposure for our patients. We have invested in equipment and learned techniques that properly shield and limit your exposure. Dental x-rays at Heritage Oak Dental are safe!",
              "Dental x-rays produce a low level of radiation and are considered safe. Dentists take necessary precautions to limit the patient's exposure to radiation when taking dental x-rays. These precautions include using lead apron shields to protect the body and using modern digital x-rays that cuts down the radiation and exposure time of each x-ray.",
            ],
          },
          {
            sub: "How Often Should Dental X-Rays Be Taken?",
            blocks: [
              "The need for dental x-rays depends on each patient's individual dental health needs. Your dentist and dental hygienist will recommend necessary x-rays based on the review of your medical and dental history, dental exam, signs and symptoms, age consideration, and risk for disease.",
              "A full mouth series of dental x-rays is recommended for new patients. A full series is usually good for three to five years. Bite-wing x-rays are taken at recall (check-up) visits and are recommended once or twice a year to detect new dental problems.",
            ],
          },
          {
            sub: "What if I'm pregnant?",
            blocks: [
              "A radiograph may be needed for dental treatment that can't wait until after the baby is born. Because untreated dental infections can pose a risk to the fetus, dental treatment may be necessary. A leaded apron minimizes exposure to the abdomen and should be used when any dental radiograph is taken. A leaded thyroid collar can also protect the thyroid from radiation.",
            ],
          },
        ],
      },
      {
        title: "Digital X-Rays",
        blocks: [
          "Digital radiography (digital x-ray) is the latest technology used to take dental x-rays. This technique uses an electronic sensor or CCD instead of x-ray film. The sensor then captures and stores the digital image on a computer. This image can be instantly viewed and enlarged helping the dentist and dental hygienist detect problems easier.",
          "Digital x-rays reduce radiation 80-90% compared to the already low exposure of traditional dental x-rays and allow for higher resolution and manipulation by the operator.",
        ],
      },
      {
        title: "3D Imaging (CBCT Scans)",
        blocks: [
          "Modern dentists now use a 3D digital x-ray technique known as cone beam computed tomography or CBCT. The advantage that 3D imaging holds over regular dental x-rays is that the bone structure, bone density, tissues and nerves can be viewed clearly in their proper anatomical location.",
          "CBCT scans can be completed in less than half a minute. This means that far less radiation enters the body than if a regular set of bitewing x-rays were taken. The main use for CBCT scans is as an aid to plan dental implant treatment, root canal procedures, and other oral surgery.",
          "At Heritage Oak Dental implants can be placed in a single visit because of this unique type of imaging. CBCT has already greatly reduced the amount of discomfort and morbidity associated with dental surgery.",
          {
            sub: "How Are CBCT Scans Used?",
            blocks: [
              {
                bullets: [
                  "Assess the quality of the jawbone where the implant will be placed",
                  "Determine where nerves are located",
                  "Diagnose tumors and disease in the early stages",
                  "Measure the density of the jawbone",
                  "Pinpoint the most effective placement for implants",
                  "View exact orientation and position of each tooth",
                  "View the morphology of the root canal system",
                ],
              },
            ],
          },
        ],
      },
      {
        title: "Dental Exams & Cleanings",
        blocks: [
          {
            sub: "Comprehensive Dental Exam",
            blocks: [
              "A comprehensive dental exam will be performed by your dentist at your initial dental visit. At regular check-up exams, your dentist and hygienist will include the following:",
              {
                bullets: [
                  "Examination of diagnostic x-rays: Essential for detection of decay, tumors, cysts, and bone loss",
                  "Oral cancer screening: Check the face, neck, lips, tongue, throat, tissues, and gums",
                  "Gum disease evaluation: Check the gums and bone around the teeth",
                  "Examination of tooth decay: All tooth surfaces checked for decay",
                  "Examination of existing restorations: Check current fillings, crowns, etc.",
                ],
              },
            ],
          },
          {
            sub: "Professional Dental Cleaning",
            blocks: [
              "Professional dental cleanings (dental prophylaxis) are performed by Registered Dental Hygienists. Your cleaning appointment will include a dental exam and the following:",
              {
                bullets: [
                  "Removal of calculus (tartar): Hardened plaque that can only be removed with special dental instruments",
                  "Removal of plaque: Sticky film of bacteria, food debris, and saliva that inflames gums",
                  "Teeth polishing: Remove stain and plaque not removed during brushing and scaling",
                ],
              },
            ],
          },
        ],
      },
      {
        title: "Oral Cancer Exam",
        blocks: [
          "According to research conducted by the American Cancer society, more than 30,000 cases of oral cancer are diagnosed each year. More than 7,000 of these cases result in the death of the patient. The good news is that oral cancer can easily be diagnosed with an annual oral cancer exam, and effectively treated when caught in its earliest stages.",
          "Around 75 percent of oral cancers are linked with modifiable behaviors such as smoking, tobacco use, and excessive alcohol consumption. When oral cancer is diagnosed in its earliest stages, treatment is generally very effective.",
          {
            sub: "The following signs will be investigated during a routine oral cancer exam:",
            blocks: [
              {
                bullets: [
                  "Red patches and sores: Red patches on the floor of the mouth, tongue, or slow healing sores that bleed easily",
                  "Leukoplakia: Hardened white or gray, slightly raised lesion that can be cancerous",
                  "Lumps: Soreness, lumps or thickening of tissue anywhere in the throat or mouth",
                  "Altered Sensation: Changes in sensation of areas of the head and neck",
                ],
              },
            ],
          },
          "During bi-annual check-ups, the dentist and hygienist will thoroughly look for changes and lesions in the mouth, but a dedicated comprehensive oral cancer screening should be performed at least once each year.",
        ],
      },
      {
        title: "Fluoride Treatment",
        blocks: [
          "Fluoride is the most effective agent available to help prevent tooth decay. It is an ion that is naturally present in varying amounts in almost all foods and water supplies. The benefits of fluoride have been well known for over 50 years and are supported by many health and professional organizations.",
          {
            sub: "Fluoride works in two ways:",
            blocks: [
              {
                bullets: [
                  "Fluoride is incorporated into the tooth structure to make it more resistant to acid products made by bacteria",
                  "It has the ability to help destroy bacteria",
                ],
              },
            ],
          },
          "Topical fluoride strengthens the teeth once they have erupted by seeping into the outer surface of the tooth enamel. We gain topical fluoride by using fluoride containing dental products such as toothpaste, mouth rinses, and gels.",
          "Systemic fluoride strengthens the teeth that have erupted as well as those that are developing under the gums. We gain systemic fluoride from most foods and our community water supplies.",
          "Remember, fluoride alone will not prevent tooth decay! It is important to brush at least twice a day, floss regularly, eat balanced meals, reduce sugary snacks, and visit our office on a regular basis for a professional cleaning.",
        ],
      },
      {
        title: "Sealants",
        blocks: [
          "A sealant is a thin, plastic coating applied to the chewing surface of molars, premolars and any deep grooves (called pits and fissures) of teeth. More than 75% of dental decay begins in these deep grooves. A sealant protects the tooth by sealing deep grooves, creating a smooth, easy to clean surface.",
          {
            sub: "Who should get sealants?",
            blocks: [
              {
                bullets: [
                  "Children and teenagers: As soon as the six-year molars appear or any time throughout the cavity prone years of 6–16",
                  "Adults: Tooth surfaces without decay that have deep grooves or depressions",
                  "Baby teeth: Occasionally done if teeth have deep grooves and child is cavity prone",
                ],
              },
            ],
          },
          {
            sub: "What Do Sealants Involve?",
            blocks: [
              "Sealants are easily applied by our office and the process takes only a couple of minutes per tooth. The teeth to be sealed are thoroughly cleaned and then isolated to keep the area dry. A special solution is applied to help the sealant bond to the teeth. The teeth are then rinsed and dried. Sealant material is carefully painted onto the enamel surface to cover the deep grooves or depressions.",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "implant",
    title: "Implant Dentistry",
    subtitle: "The most sophisticated solution for replacing missing teeth with natural-looking, long-lasting results",
    icon: "",
    description: "Restore missing teeth permanently with state-of-the-art dental implants that look and function naturally.",
    intro: "A dental implant is a \"root\" device, usually made of titanium, used in dentistry to support restorations that resemble a tooth or group of teeth to replace missing teeth.\n\nThe bone of the jaw accepts and is osseointegrated with the titanium post. Dental implants can be used to support a number of dental prostheses, including crowns, implant-supported bridges or dentures. While high-tech in nature, dental implants are actually more tooth-saving than traditional bridgework, since implants do not rely on neighboring teeth for support.",
    whyUs: "Heritage Oak Dental uses 3D CBCT imaging for precise surgical planning, the highest quality implant systems, and CAD/CAM technology for natural-looking crowns and restorations.",
    relatedIds: ["oral", "restorative", "sedation"],
    procedures: [],
    pageSections: [
      {
        title: "Why Choose Dental Implants?",
        blocks: [
          "Dental implants are so natural-looking and feeling, you may forget you ever lost a tooth. You know that your confidence about your teeth affects how you feel about yourself, both personally and professionally. Perhaps you hide your smile because of spaces from missing teeth. Maybe your dentures don't feel secure. Perhaps you have difficulty chewing.",
          "If you are missing one or more teeth and would like to smile, speak and eat again with comfort and confidence, there is good news! Dental implants are teeth that can look and feel just like your own! Under proper conditions and diligent patient maintenance, implants can last a lifetime.",
        ],
      },
      {
        title: "Advantages of Dental Implants Over Dentures or a Bridge",
        blocks: [
          {
            sub: "Esthetic",
            blocks: [
              "Dental implants look and feel like your own teeth! Since dental implants integrate into the structure of your bone, they prevent the bone loss and gum recession that often accompany bridgework and dentures. No one will ever know that you have a replacement tooth.",
            ],
          },
          {
            sub: "Tooth Saving",
            blocks: [
              "Dental implants don't sacrifice the quality of your adjacent teeth like a bridge does because neighboring teeth are not altered to support the implant. More of your own teeth are left untouched, a significant long-term benefit to your oral health!",
            ],
          },
          {
            sub: "Confidence",
            blocks: [
              "Dental implants will allow you to once again speak and eat with comfort and confidence! They are secure and offer freedom from the irksome clicks and wobbles of dentures. Say goodbye to worries about misplaced dentures and messy pastes and glues.",
            ],
          },
          {
            sub: "Reliable",
            blocks: [
              "The success rate of dental implants is highly predictable. They are considered an excellent option for tooth replacement.",
            ],
          },
        ],
      },
      {
        title: "Are You a Candidate for Dental Implants?",
        blocks: [
          "The ideal candidate for a dental implant is in good general and oral health. Adequate bone in your jaw is needed to support the implant, and the best candidates have healthy gum tissues that are free of periodontal disease.",
          "Dental implants are intimately connected with the gum tissues and underlying bone in the mouth. Patients are not candidates for implant procedures with uncontrolled systemic or localized disease processes. Implants are considered an elective procedure and therefore come secondary to your health.",
        ],
      },
      {
        title: "Treatment Options",
        blocks: [
          {
            sub: "Single Missing Tooth",
            blocks: [
              "If you are missing a single tooth, one implant and a crown can replace it. A dental implant replaces both the lost natural tooth and its root. Single tooth implants are strong, require less care than dentures, and look and feel natural. With new techniques and proper case selection, you may be a candidate for immediate implant placement. You don't have to go a day without your tooth.",
            ],
          },
          {
            sub: "Multiple Missing Teeth",
            blocks: [
              "If you are missing several teeth, implant-supported bridges can replace them. Dental implants will replace both your lost natural teeth and some of the roots. When more than one tooth is missing, the benefits of implant supported teeth are even more obvious compared to traditional tooth supported bridges or removable partial dentures.",
            ],
          },
          {
            sub: "Complete Denture / All Teeth Missing",
            blocks: [
              "If you are missing all of your teeth, an implant-supported full bridge or full denture can replace them. An implant-supported denture is more stable than a regular denture. You will find it easier to speak and you won't have to worry about the denture becoming loose or falling out of your mouth.",
              "Two types available: Bar-retained dentures (a thin metal bar attached to 2–5 implants) and Ball-retained dentures (each implant holds a ball-shaped metal attachment that fits into sockets on the denture).",
            ],
          },
        ],
      },
      {
        title: "Advanced Procedures",
        blocks: [
          {
            sub: "Sinus Augmentation",
            blocks: [
              "A key to implant success is the quantity and quality of the bone where the implant is to be placed. Sinus augmentation can help correct insufficient bone by raising the sinus floor and developing bone for the placement of dental implants.",
            ],
          },
          {
            sub: "Ridge Modification",
            blocks: [
              "Deformities in the upper or lower jaw can leave you with inadequate bone. The defect is filled with bone or bone substitute to build up the ridge. Ridge modification has been shown to greatly improve appearance and increase your chances for successful implants.",
            ],
          },
        ],
      },
      {
        title: "Suffering from Poor Fitting Dentures?",
        variant: "yellow",
        blocks: [
          "Many denture wearers are unable to enjoy the simple pleasures of life. Chewing becomes difficult and frustrating. Diet will consist mainly of soft foods that lack nutrients and fiber. Loose or ill-fitting partials or dentures can also affect your general health. Many traditional denture wearers mumble or slur their words due to slipping from ill-fitting devices or lack of bone support.",
          "Dental implants can restore the quality of life for people who wear dentures. The boost in self-esteem and confidence that accompany a smile restored with dental implants can drastically improve the overall health of patients who previously suffered from loose or ill-fitting partials or dentures.",
        ],
      },
      {
        title: "What Can I Expect After Treatment?",
        blocks: [
          "As you know, your own teeth require conscientious at-home oral care and regular dental visits. Dental implants are like your own teeth and will require the same care. In order to keep your implant clean and plaque-free, brushing and flossing still apply!",
          "After treatment, we will develop the best care plan for you. Periodic follow-up visits will be scheduled to monitor your implant, teeth and gums to make sure they are healthy.",
        ],
      },
      {
        title: "Are Implants for Everyone?",
        blocks: [
          "Dental implants are popular among dentists and are usually the recommended choice for the replacement of missing teeth. They provide a long-term solution unlike dentures and fixed bridges, which may need to be replaced over time. Dental implants can last a lifetime if maintained well. However, dental implants are not suitable for everyone:",
          {
            bullets: [
              "Implants require strong bone support. People with bone loss may need additional bone grafting surgery",
              "Children and teenagers are rarely considered because they are not finished growing",
              "People with uncontrolled systemic or localized diseases need to be managed before implants",
              "Heavy smokers and alcohol drinkers have a higher failure rate",
              "Implants require regular cleaning and care to prevent infection",
            ],
          },
        ],
      },
      {
        title: "Know What You're Paying For",
        blocks: [
          "At Heritage Oak Dental we offer a wide array of dental implant treatment plans that are designed to fit your dental and financial needs. We don't offer a one size fits all treatment and involve you in the selection of the design, materials, and restorative treatment modalities.",
          "Here are specific factors that directly alter the cost of treatment:",
          {
            bullets: [
              "Bone grafting",
              "Soft tissue grafting and contouring",
              "The number of implants placed",
              "The number of teeth replaced",
              "Restorative material for the teeth",
              "Supporting structural material",
              "Substructure materials",
              "Patient expectations",
            ],
          },
        ],
      },
      {
        title: "Long Term Care",
        blocks: [
          "Just like the tires on your car and roof over your head, nothing lasts forever and everything requires maintenance. We recommend that you have your treatment completed by people who you trust, stand by their work, and will be around to provide you the service to keep your dental implants healthy. At Heritage Oak Dental we provide long term maintenance and know what it takes to care for your implant from the placement throughout the rest of your life.",
        ],
      },
    ],
  },
  {
    id: "oral",
    title: "Oral Surgery",
    subtitle: "Expert surgical solutions for a wide variety of dental and facial conditions",
    icon: "",
    description: "Expert surgical care including extractions, wisdom teeth removal, and advanced jaw procedures.",
    intro: "A dental surgeon can diagnose and treat a wide variety of conditions. Our experienced team provides comprehensive oral surgery services including wisdom teeth extractions, dental implants, bone grafting, corrective jaw surgery, and treatment for TMJ disorders, facial pain, and oral pathology.",
    whyUs: "Heritage Oak Dental handles a wide range of surgical procedures in-house. This means greater continuity of care, a familiar environment, and the convenience of a single trusted team managing your treatment from start to finish.",
    relatedIds: ["implant", "sedation", "general"],
    procedures: [],
    pageSections: [
      {
        title: "Wisdom Teeth Extractions",
        blocks: [
          "Third molars, commonly referred to as wisdom teeth, are usually the last four of 32 teeth to erupt (surface) in the mouth, generally making their appearance between the ages of 17 to 25. They are located at the back of the mouth (top and bottom), near the entrance to the throat.",
          "In most cases, inadequate space in the mouth does not allow the wisdom teeth to erupt properly and become fully functional. When this happens, the tooth can become impacted (stuck) in an undesirable or potentially harmful position. If left untreated, impacted wisdom teeth can contribute to infection, damage to other teeth, and possibly cysts or tumors.",
          {
            sub: "Types of Impaction:",
            blocks: [
              {
                bullets: [
                  "Soft Tissue Impaction: The crown has penetrated through the bone, but the gum is covering part or all of the tooth's crown",
                  "Partial Bony Impaction: The tooth has partially erupted, but a portion remains submerged below the gum and jawbone",
                  "Complete Bony Impaction: The tooth is completely encased by jawbone, requiring more complex removal techniques",
                ],
              },
            ],
          },
          {
            sub: "Reasons to Remove Wisdom Teeth:",
            blocks: [
              {
                bullets: [
                  "Damage to nearby teeth: Second molars can be adversely affected, resulting in tooth decay, periodontal disease and bone loss",
                  "Disease: Cysts and tumors can occur in areas surrounding impacted wisdom teeth",
                  "Infection: Bacteria and food can become trapped under the gum tissue, causing considerable pain and danger",
                ],
              },
            ],
          },
          {
            sub: "What Does Removal Involve?",
            blocks: [
              "Wisdom teeth removal is a common procedure, generally performed under local anesthesia, intravenous (IV) sedation, or general anesthesia by a specially trained dentist in an office surgery suite. The surgery does not require an overnight stay, and you will be released with post-operative instructions and medication (if necessary), to help manage any swelling or discomfort.",
            ],
          },
        ],
      },
      {
        title: "Apicoectomy (Root-End Surgery)",
        blocks: [
          "The teeth are held firmly in place by strong roots that extend into the jawbone. The end or tip of each root is termed the apex. When inflammation or infection persists after a root canal treatment, an apicoectomy may be required. An apicoectomy is essentially the removal of the apex (or root tip), followed by a filling procedure to seal the root from further infection.",
          {
            sub: "Reasons For An Apicoectomy:",
            blocks: [
              {
                bullets: [
                  "Small Adjoining Root Branches: Tiny branches that cannot be cleaned and sealed during root canal treatment",
                  "Blocked Root Canal: Unable to effectively clean due to a fractured file or other obstruction",
                  "Narrow or Curved Root Canals: Poorly shaped canals that prevent files from reaching the root tip",
                ],
              },
            ],
          },
          {
            sub: "What Does Getting an Apicoectomy Involve?",
            blocks: [
              "The dentist will make a small incision in the gum and expose the root by lifting away the gum. The edge of the root tip and any infected connective tissue will be removed using ultrasonic instruments. The root will be sealed using a retrofill (filling material) and the dentist will suture the gum with several stitches. This surgery does not require an overnight stay.",
            ],
          },
        ],
      },
      {
        title: "Bone Grafting",
        blocks: [
          "Bone grafting is often closely associated with dental restorations such as bridge work and dental implants. In the majority of cases, the success of a restoration procedure can hinge on the height, depth, and width of the jawbone at the implant site. When the jawbone has receded or sustained significant damage, the implant(s) cannot be supported on this unstable foundation and bone grafting is usually recommended.",
          {
            sub: "Major factors that affect jaw bone volume:",
            blocks: [
              {
                bullets: [
                  "Periodontal Disease: Can permanently damage the jaw bone that supports the teeth",
                  "Tooth Extraction: Patients lose 40–60% of bone surrounding extraction site during the following three years",
                  "Injuries and Infections: Can cause the bone to recede",
                ],
              },
            ],
          },
          {
            sub: "Types of Bone Grafts:",
            blocks: [
              {
                bullets: [
                  "Autogenous Bone Graft: Harvested from the patient's own body (usually from the posterior part of the lower jaw or chin)",
                  "Allograft Bone Graft: Cadaver or synthetic bone is used",
                  "Xenograft: Cow bone is used in this type of graft",
                ],
              },
            ],
          },
          "The bone grafting procedure can often take several months to complete. The new bone will fuse with the existing bone and cell growth will soon remodel and replace the graft with your own native bone. Supplementing the jaw with bone will result in greater bone mass to help support and anchor the implant(s).",
        ],
      },
      {
        title: "Jaw (Orthognathic) Surgery",
        blocks: [
          "Orthognathic surgery refers to the surgical correction needed to fix substantial abnormalities of the maxilla (upper jaw), the mandible (lower jaw), or both. The abnormality may be a birth defect, a growth defect, or the result of traumatic injuries to the jaw area.",
          {
            sub: "Classifications of Malocclusion:",
            blocks: [
              {
                bullets: [
                  "Class I Occlusion: Lower anterior incisors sit directly behind upper anterior incisors when biting down",
                  "Class II Malocclusion (Overbite): Lower anterior incisors lie significantly behind the upper anterior incisors",
                  "Class III Malocclusion (Underbite): Lower anterior incisors and jaw positioned beyond the upper teeth",
                ],
              },
            ],
          },
          {
            sub: "Reasons for Orthognathic Surgery:",
            blocks: [
              "Malocclusion of the teeth can create greatly destructive forces among the five powerful muscles that control the jaw. Misalignment can seriously damage the function and aesthetic appearance of the teeth:",
              {
                bullets: [
                  "Tooth Wear: Pressure and wear not spread evenly, can lead to TMJ and headaches",
                  "Chronic Jaw, Muscle Pain & Headache: Misalignment alters facial muscle interaction",
                  "Loose Teeth: Uneven pressure causes teeth to become loose in sockets",
                  "Tooth Sensitivity: Thinning enamel reduces nerve protection",
                  "Difficulty Swallowing, Chewing, or Biting: Associated with muscle pain and/or poor jaw alignment",
                ],
              },
            ],
          },
          {
            sub: "What Does Surgery Involve?",
            blocks: [
              "Generally, orthodontic braces are necessary to align the arches and straighten the teeth prior to surgery. During maxillary surgery, the upper jaw is moved and may be secured using tiny plates, wires, rubber bands and screws. Surgery on the mandible is performed using bone grafts to align the lower jaw. Orthognathic surgery generally requires general anesthesia and a good deal of aftercare.",
            ],
          },
        ],
      },
      {
        title: "Impacted Canines",
        blocks: [
          "Canine teeth are sometimes referred to as cuspids, fangs, or \"eye teeth\" because of their direct positioning beneath the eyes. An impacted tooth essentially means that it is blocked, stuck, or unable to fully erupt and function properly. Third molars (wisdom teeth) most commonly fall victim to impaction, but the upper canine is the second most common tooth to become impacted.",
          {
            sub: "Why Impacted Canines Need Treatment:",
            blocks: [
              {
                bullets: [
                  "Closing Gaps: Canines close any unsightly gaps between other upper teeth",
                  "First Touch: They touch first when the jaw closes, guiding other teeth into position",
                  "Proper Alignment & Function: Essential to correct alignment of other teeth on the dental arch",
                ],
              },
            ],
          },
          {
            sub: "Causes of Impacted Canines:",
            blocks: [
              {
                bullets: [
                  "Extra Teeth: May directly block canine eruption or cause overcrowding",
                  "Overcrowding: Poor alignment of front teeth leaves no room for canines",
                  "Unusual Growths: Growths on gum tissue can restrict canine progress",
                ],
              },
            ],
          },
          "Early Detection is Key: It is important for the dentist to document the number of teeth present when the patient is around 7 years of age. The older the patient becomes, the less likely it is that an impacted canine tooth will erupt naturally.",
        ],
      },
      {
        title: "Cleft Lip & Palate Treatment",
        blocks: [
          "Cleft lip and cleft palate are two common but markedly different birth defects that affect about one in every 700 newborns. A cleft lip is essentially a separation of the two sides of the lip. A cleft palate occurs when the sides of the palate fail to \"fuse\" as the fetus is developing, which results in an opening in the roof of the mouth.",
          {
            sub: "Categories of Cleft Deformities:",
            blocks: [
              {
                bullets: [
                  "Unilateral Incomplete: Cleft on only one side that does not extend to the nostril",
                  "Unilateral Complete: Cleft on only one side that extends into the nostril",
                  "Bilateral Complete: Larger clefts affecting both sides extending to nostrils",
                  "Microform Cleft: Mild case forming a small bump or scar line",
                ],
              },
            ],
          },
          {
            sub: "Risks Without Treatment:",
            blocks: [
              {
                bullets: [
                  "Speech: Likely to experience speech problems affecting social and emotional development",
                  "Feeding: Problems drinking milk as liquids can pass to the nasal cavity",
                  "Hearing Loss & Ear Infections: Incorrectly positioned eustachian tubes can lead to infections",
                  "Dental Issues: Abnormalities can cause impacted or absent teeth and periodontal disease",
                ],
              },
            ],
          },
          "The prognosis for sufferers who receive corrective treatment is excellent. The dentist may implant teeth to fill gaps and/or place braces to correctly align the upper arch, restoring functionality and improving aesthetic appearance.",
        ],
      },
    ],
  },
  {
    id: "orthodontics",
    title: "Orthodontics",
    subtitle: "Straighten your teeth and perfect your smile with modern orthodontic solutions",
    icon: "",
    description: "Straighten your smile with traditional braces, clear ceramic braces, or invisible aligners like Invisalign.",
    intro: "Orthodontics is the practice in correcting misalignments of the teeth and jaw. There are many debilitating problems associated with misalignment, for example, speech defects, difficulties chewing and difficulty maintaining adequate oral hygiene.",
    whyUs: "Heritage Oak Dental is a one-stop destination for orthodontic care, offering traditional braces, Invisalign, ClearCorrect, and Damon® Braces — all in our comfortable Rocklin office.",
    relatedIds: ["cosmetic", "pediatric", "general"],
    procedures: [],
    pageSections: [
      {
        title: "Common Issues Orthodontics Successfully Solves",
        blocks: [
          {
            sub: "Anteroposterior deviations",
            blocks: [
              "Common examples include underbite (lower teeth positioned further forward than upper teeth) and overbite (upper teeth positioned further forward than lower teeth). Both can cause difficulty articulating and chewing.",
            ],
          },
          {
            sub: "Overcrowding",
            blocks: [
              "One of the most common problems orthodontics address. Lack of jawbone space means adult teeth cannot erupt in alignment with existing teeth. The orthodontist can realign the teeth using a number of unobtrusive devices and treatments.",
            ],
          },
          {
            sub: "Aesthetic issues",
            blocks: [
              "In some cases, the shape of the whole face is negatively impacted by malocclusions or a bad bite. The dentist can restructure and realign the jaw, lips and teeth to create a beautiful, even smile.",
            ],
          },
        ],
      },
      {
        title: "Why Straighten Teeth?",
        blocks: [
          "Straighter teeth perform chewing, biting and speaking functions more effectively than crooked teeth. In addition, a straight smile boosts confidence, is aesthetically pleasing to look at, and can help stave off a wide variety of dental ailments.",
          {
            sub: "Disorders Associated with Crooked Teeth:",
            blocks: [
              {
                bullets: [
                  "Periodontitis: Crooked teeth are hard to clean effectively, leading to plaque buildup and gum disease",
                  "TMJ Disorder: Improper jaw alignment causes painful conditions with severe headaches and jaw pain",
                  "Tooth injury: Crooked teeth are weaker and often protrude, making them more vulnerable to injury",
                  "Uneven wear: Some teeth work harder than others, leading to faster wear and damage",
                ],
              },
            ],
          },
        ],
      },
      {
        title: "Treatment Options",
        blocks: [
          {
            sub: "Traditional Braces",
            blocks: [
              "These braces are strong and tend not to stain the teeth. They are comprised of individual brackets which are cemented to each tooth and accompanied by an archwire which constantly asserts gentle pressure on the teeth. Traditional braces are generally metal but are also available in a clear synthetic material and \"tooth colored\" ceramic.",
              "The ceramic brackets are generally more comfortable than the metal alternative, but can become discolored by coffee, wine, smoking and certain foods. Not all patients are candidates for traditional braces.",
            ],
          },
          {
            sub: "Invisalign®",
            blocks: [
              "Invisalign is a series of clear, removable teeth aligners that dentists use as an alternative to traditional metal dental braces. Clear aligners are favored by many adults because they are both removable and invisible to onlookers.",
              "The aligners are clear trays that should be worn for the recommended amount of time each day for the quickest results. Aligners are more comfortable and less obtrusive than traditional braces, but also tend to extend treatment time and requires strict use. Not all patients are candidates for clear aligner technology.",
            ],
          },
          {
            sub: "ClearCorrect Invisible Braces",
            blocks: [
              "ClearCorrect invisible braces are the clear and simple way to straighten your teeth so you can show off your smile! With ClearCorrect, your dentist can straighten your teeth using a series of clear, custom, removable aligners. Each aligner moves your teeth just a little bit at a time until you eventually get straight teeth.",
              "Because ClearCorrect is so clear and easy to remove, treatment has low or no impact on the way you look and your daily routines. ClearCorrect can help you achieve your best smile whether your teeth are crowded or spaced.",
            ],
          },
          {
            sub: "Damon® Braces",
            blocks: [
              "The Damon® System is an innovative new way to straighten the teeth quickly and comfortably. Damon® Braces straighten teeth up to six months quicker than traditional braces and leave teeth healthy and beautiful.",
              "Damon® Braces utilize a unique type of technology to optimize the straightening process. Traditional archwires are replaced with lighter, shape-memory, self-ligating wires that need no tightening. There are no elastics, no ties and no palate expanders. The Damon® System reduces the amount of friction each tooth feels by incorporating a sliding mechanism.",
            ],
          },
          {
            sub: "Fast Smile System",
            blocks: [
              "The Fast Smile system offers quicker and more efficient treatment times than traditional dental braces. In fact, Fast Smile braces can reduce the overall treatment times by as much as 40%. The Fast Smile technologies allow the dentist to view the teeth in 3D from every angle, and then plan treatment accordingly. Treatment can be tailored to fit your needs including the upper teeth, lower teeth, or just the front teeth.",
            ],
          },
        ],
      },
      {
        title: "Braces for Children",
        blocks: [
          "Many children are ambivalent about getting braces. The good news is that the placement of orthodontic braces is not at all painful, and the end result will be a beautiful straight smile.",
          "Although patients of any age can benefit from orthodontic braces, they tend to work much quicker on pre-teens and teenagers since they are still experiencing jaw growth.",
          {
            sub: "Common Causes of Misalignment:",
            blocks: [
              {
                bullets: [
                  "Mouth breathing",
                  "Thumb or finger sucking",
                  "Prolonged pacifier use",
                  "Poor oral hygiene",
                  "Poor nutrition",
                ],
              },
            ],
          },
        ],
      },
      {
        title: "Braces for Adults",
        blocks: [
          "Orthodontic braces were historically associated with teenagers. Today, an increasing number of adults are choosing to wear braces to straighten their teeth and correct bad bites. In fact, it is now estimated that almost one third of all current orthodontic patients are adults.",
          "An adult can experience the same beautiful end results as a teenager, but treatment often takes longer due to the density of the bone and use of growth modification.",
          {
            sub: "Benefits of Straight Teeth:",
            blocks: [
              {
                bullets: [
                  "Reduction in general tooth decay",
                  "Decreased likelihood of periodontal disease",
                  "Decreased likelihood of tooth injury",
                  "Reduction in digestive disorders",
                  "Reduction in orofacial pain",
                ],
              },
            ],
          },
        ],
      },
      {
        title: "Retainers",
        blocks: [
          "When braces are removed, the \"retention\" phase begins. The objective is to ensure the teeth do not regress back to their previous position. A retainer is a fixed or removable dental appliance custom-made to fit the teeth.",
          {
            sub: "Hawley Retainer",
            blocks: [
              "Metal wire on an acrylic arch. The wire may be adjusted by the dentist to ensure teeth stay in desired position.",
            ],
          },
          {
            sub: "Essix Retainer",
            blocks: [
              "Clear PVC trays that fit over the entire arch. More affordable and less noticeable than Hawley retainers.",
            ],
          },
          {
            sub: "Fixed Retainers",
            blocks: [
              "A single wire affixed to the tongue side of teeth. Used when there has been rapid or substantial tooth movement.",
            ],
          },
          {
            sub: "Important Retainer Care Tips:",
            blocks: [
              {
                bullets: [
                  "Don't lose it: Always place in case while eating or brushing",
                  "Don't drink while wearing: Increases acid exposure to teeth",
                  "Don't eat while wearing: Can damage the device and trap food",
                  "Clean properly: Use toothbrush for Hawley, denture cleaner for clear retainers",
                  "Wear as directed: Critical for success. Failure can lead to teeth returning to original position",
                ],
              },
            ],
          },
        ],
      },
      {
        title: "The Three Phases of Orthodontic Treatment",
        blocks: [
          "Generally, orthodontic treatment takes between six and thirty months to complete. The treatment time will largely depend on the classification of malocclusion, the type of dental devices used, and the perseverance of the patient.",
          {
            sub: "Phase 1: The Planning Stage",
            blocks: [
              "The dentist makes an exact diagnosis to realign the teeth most effectively. First visits may include medical and dental evaluations, study models of your teeth, panoramic X-rays, computer generated images, and before/during/after photographs.",
            ],
          },
          {
            sub: "Phase 2: The Active Phase",
            blocks: [
              "Records are used to develop a customized treatment plan. The dentist will recommend custom orthodontic devices to gently move teeth into proper alignment. This may be fixed braces, removable devices like Invisalign, or headgear. Regular adjustments ensure adequate pressure is applied to the teeth.",
            ],
          },
          {
            sub: "Phase 3: The Retention Phase",
            blocks: [
              "When teeth are correctly aligned, braces are removed. A custom retainer ensures teeth don't shift back to original positions. The jawbone will reform around realigned teeth to fully stabilize them. Retention is the final and permanent phase, though the amount of time to wear can be as little as two nights a week.",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "pediatric",
    title: "Pediatric Dentistry",
    subtitle: "Comprehensive dental care for children from birth through adolescence",
    icon: "",
    description: "Specialized gentle dental care tailored for children of all ages, making every visit comfortable and fun.",
    intro: "Pediatric dentistry primarily focuses on children from birth through adolescence. At Heritage Oak Dental we want to care for your whole family. We are concerned with the oral care for all children and even those with special needs so please bring the whole family in.",
    whyUs: "At Heritage Oak Dental, we love our young patients. We've designed our office with kids in mind — from our colorful play area to our patient, encouraging team.",
    relatedIds: ["general", "orthodontics", "sedation"],
    procedures: [],
    pageSections: [
      {
        title: "When Should My Child First See a Dentist?",
        blocks: [
          "Dentists fulfill many important functions pertaining to the child's overall oral health and hygiene. They place particular emphasis on the proper maintenance and care of deciduous (baby) teeth, which are instrumental in facilitating good chewing habits, proper speech production, and also hold space for permanent teeth.",
          {
            sub: "Education",
            blocks: [
              "Dentists educate the child using models, computer technology, and child-friendly terminology; emphasizing the importance of keeping teeth strong and healthy.",
            ],
          },
          {
            sub: "Prevention",
            blocks: [
              "Helping establish sound eating and oral care habits, applying dental sealants and fluoride, and providing good demonstrations of brushing and flossing.",
            ],
          },
          {
            sub: "Monitoring Growth",
            blocks: [
              "By continuously tracking growth and development, dentists can anticipate dental issues and quickly intervene before they worsen.",
            ],
          },
          {
            sub: "Intervention",
            blocks: [
              "In cases of oral injury, malocclusion, or bruxism, space maintainers may be fitted, a nighttime mouth guard may be recommended, or reconstructive surgery may be scheduled.",
            ],
          },
        ],
      },
      {
        title: "Baby Bottle Tooth Decay",
        blocks: [
          "Maintaining the health of primary or baby teeth is exceptionally important. Baby teeth aid in speech development and enunciation, help the child to chew food correctly, maintain space in the jaw for adult teeth, and prevent the tongue from posturing abnormally in the mouth.",
          "Babies are at risk for tooth decay as soon as the first primary tooth emerges, usually around the age of six months. The American Academy of Pediatric Dentistry (AAPD) recommends a \"well baby check up\" with a dentist around the age of twelve months.",
          "The term \"baby bottle tooth decay\" refers to early childhood caries or cavities, which occur in infants and toddlers. The most prominent cause is frequent exposure to sweetened liquids including breast milk, baby formula, juice, and sweetened water — especially when used as a naptime or nighttime drink.",
          {
            sub: "Prevention at Home:",
            blocks: [
              {
                bullets: [
                  "Cleanse gums after every feeding with a clean washcloth or toothbrush",
                  "Try not to transmit bacteria via saliva exchange. Rinse pacifiers in clean water",
                  "Use appropriate toothbrush with ADA-approved toothpaste when teeth begin to emerge",
                  "Do not place sugary drinks in baby bottles. Only fill with water, breast milk, or formula",
                  "Do not allow child to take liquid-filled bottle to bed (use water only if necessary)",
                  "Clean your child's teeth until age seven when they can reach all areas",
                ],
              },
            ],
          },
        ],
      },
      {
        title: "Home Care for Your Child's Teeth",
        blocks: [
          "Pediatric oral care has two main components: preventative care at the dentist's office and preventative care at home. Beginning at the age of twelve months, the American Dental Association (ADA) recommends that children begin to visit the dentist for \"well baby\" checkups.",
          {
            sub: "Diet",
            blocks: [
              "Provide children with a nourishing, well-balanced diet. Very sugary diets should be modified and continuous snacking discouraged. Space out snacks and provide non-sugary alternatives like celery sticks, carrot sticks, and low-fat yogurt.",
            ],
          },
          {
            sub: "Oral Habits",
            blocks: [
              "Though pacifier use and thumb sucking generally cease over time, both can cause teeth to misalign. Choose an \"orthodontically\" correct pacifier model. Oral habits should be targeted for cessation around 2–4 years old.",
            ],
          },
          {
            sub: "Brushing",
            blocks: [
              "Children's teeth should be brushed a minimum of two times per day using a soft bristled brush. Parents should help with brushing until the child reaches age seven. For babies, rub the gum area with a clean cloth after each feeding.",
            ],
          },
          {
            sub: "Flossing",
            blocks: [
              "Cavities and tooth decay form more easily between teeth. The child is at risk for cavities wherever two adjacent teeth touch. The dentist can help demonstrate correct positioning during flossing.",
            ],
          },
        ],
      },
      {
        title: "Dental Emergencies",
        blocks: [
          "Although dental injuries and emergencies are often distressing, they are extremely common. Approximately one third of children have experienced some type of dental trauma. There are two peak risk periods: toddlerhood (18–40 months) and the preadolescent/adolescent period when sporting injuries become commonplace.",
          {
            sub: "Toothache",
            blocks: [
              "Cleanse area with warm water, check for impacted food, apply cold compress, contact dentist.",
            ],
          },
          {
            sub: "Knocked-Out Tooth",
            blocks: [
              "Recover the tooth (handle crown only, not roots). Rinse with water. For older children, reinsert in socket or place in cheek. For younger children, submerge in milk or saliva. Visit dentist immediately — time is critical!",
            ],
          },
          {
            sub: "Crown Fracture",
            blocks: [
              "Rinse mouth with warm water, place cold compress, offer pain relief, visit dentist. Any change in tooth color is an emergency warning sign.",
            ],
          },
          "For head trauma or fractured jaw, proceed immediately to the Emergency Room. For severe bleeding that doesn't stop with pressure, call a medical professional immediately.",
        ],
      },
      {
        title: "Teeth Grinding (Bruxism)",
        blocks: [
          "Bruxism, or the grinding of teeth, is remarkably common in children and adults. A wide range of psychological, physiological, and physical factors may lead children to brux. In particular, jaw misalignment (bad bite), stress, and traumatic brain injury are all thought to contribute to bruxism.",
          {
            sub: "Symptoms of Bruxism:",
            blocks: [
              {
                bullets: [
                  "Frequent complaints of headache",
                  "Injured teeth and gums",
                  "Loud grinding or clicking sounds",
                  "Rhythmic tightening or clenching of jaw muscles",
                  "Painful jaw muscles, especially in the morning",
                  "Unusual tooth sensitivity to hot and cold foods",
                ],
              },
            ],
          },
          "Bruxing spontaneously ceases by the age of thirteen in the majority of children. In the meantime, the dentist will continually monitor its effect on the child's teeth and may provide an interventional strategy. Treatment options include: correcting misaligned teeth, stress reduction, relaxation classes, muscle relaxants, or a specialized nighttime mouth guard to prevent grinding damage.",
        ],
      },
      {
        title: "Early Orthodontic Treatment",
        blocks: [
          "Orthodontic treatment is primarily used to prevent and correct \"bite\" irregularities. Crooked teeth hamper self-esteem and make good oral homecare difficult, whereas straight teeth help minimize the risk of tooth decay and childhood periodontal disease.",
          "Children should have an initial orthodontic evaluation before the age of eight.",
          {
            sub: "Benefits of Early Treatment:",
            blocks: [
              {
                bullets: [
                  "Enhanced self-confidence and esthetic appearance",
                  "Increased likelihood of proper jaw growth",
                  "Increased likelihood of properly aligned adult teeth",
                  "Reduced risk of bruxing (grinding of teeth)",
                  "Reduced risk of childhood cavities and periodontal disease",
                  "Reduced risk of protracted orthodontic treatments in later years",
                ],
              },
            ],
          },
        ],
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
        content: "After active periodontal treatment such as scaling and root planing, ongoing periodontal maintenance is essential to prevent disease recurrence. Periodontal maintenance visits are more thorough than routine cleanings and are typically scheduled every 3–4 months. During these visits, the hygienist measures periodontal pocket depths, removes plaque and calculus above and below the gum line, polishes the teeth, and evaluates the overall health of the gums.",
      },
      {
        title: "Gum Grafting (Tissue Grafting)",
        content: "Gum recession exposes the tooth roots, which can cause sensitivity, increase the risk of root decay, and create an unaesthetic appearance. Gum grafting is a surgical procedure that covers exposed roots by transplanting gum tissue to the affected areas. There are several types of gum grafts: connective tissue grafts (the most common, using tissue from under the palate), free gingival grafts (using tissue directly from the palate), and pedicle grafts (using tissue from near the affected tooth).",
      },
      {
        title: "Crown Lengthening",
        content: "Crown lengthening is a surgical procedure that reshapes or removes gum tissue and sometimes bone to expose more of a tooth's structure. It is performed for both restorative and cosmetic purposes. Restoratively, crown lengthening may be needed when a tooth is decayed, broken below the gum line, or has insufficient tooth structure for a crown or bridge. Cosmetically, it is used to correct a \"gummy smile\" where excessive gum tissue covers the teeth, making them appear short.",
      },
      {
        title: "Pocket Reduction Surgery",
        content: "When periodontal disease has progressed to the point where deep pockets have formed between the teeth and gums, scaling and root planing alone may not be sufficient. Pocket reduction surgery (also called flap surgery or osseous surgery) involves folding back the gum tissue, removing disease-causing bacteria and tartar from the deep pockets, and then securing the tissue into a position that reduces pocket depth.",
      },
      {
        title: "Laser Gum Treatment",
        content: "Heritage Oak Dental utilizes dental laser technology for various periodontal procedures. Laser treatment can be used to remove diseased gum tissue, reshape the gum line, eliminate bacteria from periodontal pockets, and promote tissue regeneration. Advantages of laser gum treatment include reduced bleeding, less swelling, minimized discomfort, faster healing times, and often no need for sutures.",
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
        title: "Composite Fillings",
        content: "When a tooth develops a cavity, the decayed portion must be removed and replaced with a filling material to restore the tooth's shape and function. Heritage Oak Dental primarily uses tooth-colored composite resin fillings that blend seamlessly with your natural teeth. Composite fillings are bonded directly to the tooth structure, which can actually strengthen the remaining tooth. The procedure is typically completed in a single visit and involves removing the decay, cleaning the area, and applying the composite material in layers.",
      },
      {
        title: "Dental Crowns",
        content: "A dental crown completely covers and encases a damaged tooth, restoring its shape, size, strength, and appearance. Crowns are recommended for teeth with large cavities that can't support fillings, cracked or weakened teeth, teeth that have had root canal treatment, severely worn or misshapen teeth, and teeth supporting dental bridges. Heritage Oak Dental uses advanced CAD/CAM technology to design and create precise, natural-looking porcelain crowns. The process typically requires two visits — one for preparation and impressions, and one for final placement.",
      },
      {
        title: "Dental Bridges",
        content: "A dental bridge literally bridges the gap created by one or more missing teeth. A traditional bridge consists of crowns placed on the teeth on either side of the gap (abutment teeth) with an artificial tooth (pontic) suspended between them. Bridges restore your ability to chew and speak properly, maintain facial shape, prevent remaining teeth from shifting, and distribute bite forces correctly. With proper care and oral hygiene, bridges can last 10–15 years or longer.",
      },
      {
        title: "Dentures (Full and Partial)",
        content: "Dentures are removable appliances that replace missing teeth and surrounding tissues. Full dentures replace all teeth in an arch and rest directly on the gums, while partial dentures replace some missing teeth and are held in place by clasps that attach to remaining natural teeth. Modern dentures are more comfortable, natural-looking, and functional than ever before. Heritage Oak Dental creates custom dentures that are precisely fitted to your mouth for optimal comfort, appearance, and function.",
      },
      {
        title: "Root Canal Therapy",
        content: "Root canal therapy is a procedure to save a tooth that is severely infected or damaged at its core. Inside each tooth is a soft tissue called the pulp, which contains nerves and blood vessels. When the pulp becomes infected due to deep decay, repeated dental procedures, cracks, or trauma, it can cause severe pain and lead to an abscess. During root canal therapy, the infected pulp is removed, the inside of the tooth is cleaned and disinfected, and the space is filled and sealed. A crown is typically placed afterward to protect and restore the tooth.",
      },
      {
        title: "CAD/CAM Same-Day Crowns",
        content: "Heritage Oak Dental uses advanced CAD/CAM (Computer-Aided Design/Computer-Aided Manufacturing) technology to design and mill custom crowns in a single visit. Traditional crown procedures require two appointments and a temporary crown while the permanent restoration is made at an outside lab. With CAD/CAM technology, a digital impression is taken, the crown is designed on-screen, and then milled from a solid block of porcelain — all in about 90 minutes. Same-day crowns are precise, durable, and completely tooth-colored.",
      },
      {
        title: "Full Mouth Reconstruction",
        content: "Full mouth reconstruction is a comprehensive treatment plan that addresses all aspects of dental health simultaneously — combining restorative, cosmetic, periodontal, and sometimes orthodontic treatments to completely rebuild the smile. This approach is recommended for patients with multiple missing teeth, severely worn dentition, extensive decay, trauma, or bite problems. The process begins with a thorough evaluation, diagnostic records, and a detailed treatment plan.",
      },
    ],
  },
  {
    id: "sedation",
    title: "Sedation Dentistry",
    subtitle: "Relax and feel comfortable during your dental visit with safe, effective sedation options",
    icon: "",
    description: "Experience relaxed, anxiety-free visits with safe and effective oral, nitrous, and IV sedation options.",
    intro: "The overwhelming fear of dental appointments can be a common cause of anxiety. Many people visualize a drill-wielding man in a white coat just waiting to cause pain and remove teeth. The reality, however, is very different.\n\nThe comfort, relaxation and happiness of the patient are embedded deep at the heart of any good dental practice. The staff at the practice will do whatever they can to reduce anxiety, allay fears and provide painless, quick treatments.",
    whyUs: "Heritage Oak Dental is one of the few general dental offices in the Rocklin area to offer full IV sedation in-house, thanks to Dr. Douglas's advanced sedation training.",
    relatedIds: ["general", "oral", "pediatric"],
    procedures: [],
    pageSections: [
      {
        title: "Modern Dental Technology",
        blocks: [
          "Recent technological advancements have meant that in many cases, dentists are able to replace noisy drills with painless laser beams. There are also a wide variety of safe anesthetics available to eliminate pain and reduce anxiety during routine appointments.",
        ],
      },
      {
        title: "Common Dental Fears",
        blocks: [
          {
            bullets: [
              "Fear of embarrassment about the condition of teeth",
              "Fear of gagging",
              "Fear of injections",
              "Fear of loss of control",
              "Fear of not becoming numb when injected with Novocain",
              "Fear of pain",
              "Fear of waking up from sedation during a procedure",
              "Fear of the dentist as a person",
              "Fear of the hand piece (or the drill)",
            ],
          },
        ],
      },
      {
        title: "Don't Let Fear Keep You Away",
        variant: "yellow",
        blocks: [
          "Dental anxiety and fear can become completely overwhelming. It is estimated that as many as 35 million people do not visit the dental office at all because they are too afraid.",
          "Receiving regular dental check ups and cleanings is incredibly important. Having regular routine check ups is the easiest way to maintain excellent oral hygiene and reduce the need for more complex treatments.",
        ],
      },
      {
        title: "Tips to Help Reduce Dental Fear and Anxiety",
        blocks: [
          {
            sub: "Talk to the Dentist",
            blocks: [
              "The dentist is not a mind reader. Though it can be hard to talk about irrational fears with a stranger, the dentist can take extra precautions during visits if fears and anxiety are communicated.",
            ],
          },
          {
            sub: "Bring a Portable Music Player",
            blocks: [
              "Music acts as a relaxant and also drowns out any fear-producing noises. Listening to calming music throughout the appointment will help to reduce anxiety.",
            ],
          },
          {
            sub: "Agree on a Signal",
            blocks: [
              "Many people are afraid that the dentist will not know they are in significant pain during the appointment. The best way to solve this problem is to agree on a \"stop\" hand signal with the dentist. Both parties can easily understand signals like raising the hand or tapping on the chair.",
            ],
          },
          {
            sub: "Spray the Throat",
            blocks: [
              "Throat sprays (for example, Vicks® Chloraseptic® Throat Spray) can actually control the gag reflex. Two or three sprays will usually keep the reflex under control for about an hour.",
            ],
          },
          {
            sub: "Ask About Alternatives",
            blocks: [
              "Advances in technology mean that dental microsurgery is now an option. Lasers can be used to prepare teeth for fillings, whiten teeth and remove staining. Discuss all the options with the dentist and decide on one that is effective and produces minimal anxiety.",
            ],
          },
        ],
      },
      {
        title: "Sedation Options",
        blocks: [
          "If there is no other way to cope, sedation offers an excellent option for many people. There are several types of sedation, but the general premise behind them is the same: the patient regains their faculties after treatment is complete but requires a designated driver in order to leave the office as operating heavy equipment is out of the question.",
          {
            sub: "Nitrous Oxide (Laughing Gas)",
            blocks: [
              "The mildest and most commonly used form of sedation. Administered through a small mask placed over the nose, nitrous oxide produces a relaxed, calm feeling within minutes. Patients remain fully conscious and able to respond. The effects wear off almost immediately after the mask is removed — patients can drive home and resume normal activities right away. Safe for both adults and children.",
            ],
          },
          {
            sub: "Oral Sedation",
            blocks: [
              "Involves taking a prescribed medication before your appointment. Produces moderate sedation — patients feel drowsy and deeply relaxed but remain conscious. Ideal for patients with moderate dental anxiety, those undergoing lengthy procedures, or patients with a strong gag reflex. A responsible adult must drive you to and from the office.",
            ],
          },
          {
            sub: "IV Sedation",
            blocks: [
              "Delivers sedative medication directly into the bloodstream for precise control throughout the procedure. Most patients have little to no memory of the procedure afterward. Dr. Douglas has advanced training in IV sedation administration and monitoring, ensuring the highest level of safety and comfort.",
            ],
          },
        ],
      },
    ],
  },
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
