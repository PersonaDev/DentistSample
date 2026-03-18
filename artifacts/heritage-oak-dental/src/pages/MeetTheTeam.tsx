import { SEOHead } from "@/components/SEOHead";

const IMG = (hash: string) => `${import.meta.env.BASE_URL}images/${hash}`;

const DOCTORS = [
  {
    img: "afb144b4d318edc0936f93647fac10206466d794.png",
    name: "Shane Douglas, D.D.S.",
    quote: '"As my patient, you can expect thorough, lasting, and honest dental care. I will help address your needs and wants while improving your oral health. I want to exceed your expectations as your dentist, friend, and neighbor!"',
    bio: "Dr. Douglas enjoys kiteboarding, wakeboarding and spending time with his wife, Kristen, and their four children, Noah, Camden, Everly, and Ashlyn.",
    sections: ["EDUCATION", "ADVANCED TRAINING", "PROFESSIONAL ASSOCIATIONS", "PUBLICATIONS & RESEARCH"],
  },
  {
    img: "f5272bb67644c08003a9fb77b5dc7ad6eabde392.png",
    name: "Ben Kloss, D.M.D.",
    quote: "As my patient, you can expect to feel safe and comfortable while receiving the best that modern dentistry provides. I am committed to providing quality, evidence-based dentistry, which is why I am dedicated to taking excellent continuing education to stay relevant in the latest dental techniques. I love what I do! I look forward to partnering with you and your oral health.",
    bio: "",
    sections: ["EDUCATION", "PROFESSIONAL ASSOCIATIONS"],
  },
];

const STAFF = [
  {
    img: "d2aad138062fe25eb94e3b431cd45d923b464d2f.png",
    name: "Marion",
    title: "Office Manager",
    bio: "Marion began her dental career over 30 years ago as a Registered Dental Assistant and later moved to the administrative side of dentistry. Marion is committed to making our patient experience in our office a positive one. Her goal is to incorporate her wealth of knowledge and customer service acquired over the years, to equip the team to best serve our patients. In her free time Marion enjoys photography and spending time with family and friends.",
  },
  {
    img: "f9e966de106aea8f89e4328f288ca7394d0bae3d.png",
    name: "Blair",
    title: "Treatment Coordinator/Patient Advocate",
    bio: "Blair loves to help patients remove barriers to treatment. In her free time, she enjoys going to concerts, hiking and spending time with her husband Boyd and their dog Birdee.",
  },
  {
    img: "2a7b4664f638ab59e60d523ba2ca77024e27878d.png",
    name: "Lindsay",
    title: "Registered Dental Hygienist",
    bio: "Lindsay has been working in the dental field for 15 years. She is committed to building relationships with her patients and partnering in their dental hygiene needs. When not caring for her patients' smiles, Lindsay enjoys spending time with friends and family, her husband Nate and children Brynn and Lucas.",
  },
  {
    img: "5f549c64abf6457a7542cffb4da2ec809af8586d.png",
    name: "Samira",
    title: "Registered Dental Hygienist",
    bio: "Samira has been a dental hygienist for 7 years. She is passionate about educating her patients on how to achieve a healthy and happy smile and loves to make her patients laugh. In her spare time, she enjoys spending time outdoors.",
  },
];

export function MeetTheTeam() {
  return (
    <div>
      <SEOHead
        title="Meet Our Dental Team | Heritage Oak Dental Rocklin, CA"
        description="Meet the caring dental team at Heritage Oak Dental in Rocklin, CA. Our experienced doctors, hygienists, and staff are dedicated to providing exceptional dental care to families in Rocklin, Roseville & Granite Bay."
        keywords="Heritage Oak Dental team, dental team Rocklin CA, dentist staff Rocklin, dental hygienist Rocklin"
        canonicalPath="/about/meettheteam"
      />
      {/* Page Hero */}
      <div className="bg-[#E8F4FA] py-16 text-center">
        <h1 className="text-5xl font-bold text-[#101828]">Meet Your Rocklin, CA Dental Team</h1>
      </div>

      {/* Doctors Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {DOCTORS.map((doc, i) => (
          <div key={i} className="mb-20">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="flex-shrink-0 flex flex-col items-center md:items-start">
                <img
                  src={IMG(doc.img)}
                  alt={doc.name}
                  className="w-64 h-64 object-cover object-top rounded-lg"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-[#101828] mb-4">{doc.name}</h2>
                <p className="text-lg text-[#101828] italic mb-4">{doc.quote}</p>
                {doc.bio && <p className="text-base text-gray-600 mb-6">{doc.bio}</p>}
                <div className="flex flex-wrap gap-3 mt-4">
                  {doc.sections.map((s) => (
                    <button
                      key={s}
                      className="px-5 py-2 bg-[#E8F4FA] text-[#101828] text-sm font-semibold rounded-none hover:bg-[#d0e8f5] transition-colors"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Team Section */}
      <div className="bg-[#E8F4FA] py-4">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-4xl font-bold text-[#101828] text-center mb-12">Meet The Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {STAFF.map((member, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 flex flex-col items-center text-center shadow-sm">
                <img
                  src={IMG(member.img)}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover object-top mb-4"
                />
                <h3 className="text-xl font-bold text-[#101828] mb-1">{member.name}</h3>
                <p className="text-[#1B89C5] font-semibold text-sm mb-3">{member.title}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
