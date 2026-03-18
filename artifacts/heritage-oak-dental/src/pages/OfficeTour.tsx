import { SEOHead } from "@/components/SEOHead";

const IMG = (hash: string) => `${import.meta.env.BASE_URL}images/${hash}`;

export function OfficeTour() {
  return (
    <div>
      <SEOHead
        title="Dental Office Tour | Heritage Oak Dental Rocklin, CA"
        description="Take a virtual tour of Heritage Oak Dental in Rocklin, CA. See our modern treatment rooms, welcoming waiting area, kids' play area & state-of-the-art dental technology. Serving Rocklin, Roseville & Granite Bay."
        keywords="Heritage Oak Dental office tour, dental office Rocklin CA, modern dental office Rocklin, dental facility Rocklin"
        canonicalPath="/about/officetour"
      />
      <div className="bg-[#E8F4FA] py-16 text-center px-4">
        <h1 className="text-5xl font-bold text-[#101828] mb-4">Tour Our Modern Rocklin Dental Office</h1>
        <p className="text-xl text-gray-600">
          Take a look at our modern, state-of-the-art dental facility designed for your comfort and care.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Welcoming Waiting Area */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#101828] text-center mb-8">Welcoming Waiting Area</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <img src={IMG("9b17b9cbf8d3f97c920e9b9f9cf4ef0116050ffe.png")} alt="Waiting room with comfortable seating" className="w-full h-48 object-cover rounded-lg" />
            <img src={IMG("e4399d2ba7b7964ecb0957ba49aacd49239fdb72.png")} alt="Waiting area entrance" className="w-full h-48 object-cover rounded-lg" />
            <img src={IMG("15961fd957b74c5f14cca9c8d81747c437d0734d.png")} alt="Waiting room with outdoor patio view" className="w-full h-48 object-cover rounded-lg" />
          </div>
          <p className="text-center text-gray-600">
            Our spacious waiting area features comfortable seating, natural light, and a relaxing atmosphere. Step outside to our peaceful patio area for fresh air before your appointment.
          </p>
        </section>

        {/* Kids Play Area */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#101828] text-center mb-8">Kids Play Area</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <img src={IMG("a6758d504bb117c420738db1478ee9000ba5bfbc.png")} alt="Children playing in kids area" className="w-full h-48 object-cover rounded-lg" />
            <img src={IMG("db6e50499d0e50178856effaf7fc05fb9fdf2230.png")} alt="Kids play area with toys and activities" className="w-full h-48 object-cover rounded-lg" />
            <img src={IMG("7eecb1f239c1d2471a87cf1669a5e0420ec9aa6b.png")} alt="Child enjoying video games" className="w-full h-48 object-cover rounded-lg" />
          </div>
          <p className="text-center text-gray-600">
            We've created a special space for our youngest patients with toys, games, and entertainment to make their visit fun and comfortable. Family-friendly dentistry is at the heart of what we do.
          </p>
        </section>

        {/* Modern Facilities */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#101828] text-center mb-8">Modern Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img src={IMG("3cde425874df775c67d52ded6a3a93d7a0b21122.png")} alt="Modern treatment room" className="w-full h-56 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-bold text-[#101828] mb-2">State-of-the-Art Treatment Rooms</h3>
              <p className="text-gray-600">Each treatment room is equipped with the latest dental technology and designed for your comfort during procedures.</p>
            </div>
            <div>
              <img src={IMG("a2a139a78dd7a6baafa9c2eea9cbc0d88ca734e5.png")} alt="Reception desk" className="w-full h-56 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-bold text-[#101828] mb-2">Friendly Reception</h3>
              <p className="text-gray-600">Our welcoming team is ready to assist you with scheduling, insurance, and any questions you may have.</p>
            </div>
          </div>
        </section>

        {/* Advanced Technology */}
        <section className="bg-[#E8F4FA] rounded-2xl p-10">
          <h2 className="text-3xl font-bold text-[#101828] text-center mb-4">Advanced Technology</h2>
          <p className="text-center text-gray-600 mb-8">
            Our office features the latest in dental technology including digital x-rays, intraoral cameras, 3D imaging, dental lasers, and CAD CAM technology to ensure you receive the most effective and efficient care possible.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-lg font-bold text-[#101828] mb-2">Digital X-Rays</h3>
              <p className="text-gray-500 text-sm">Less radiation, instant results</p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-lg font-bold text-[#101828] mb-2">3D Imaging</h3>
              <p className="text-gray-500 text-sm">Precise treatment planning</p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-lg font-bold text-[#101828] mb-2">CAD CAM</h3>
              <p className="text-gray-500 text-sm">Same-day crowns available</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
