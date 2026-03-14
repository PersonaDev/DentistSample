const TOPICS = [
  "Deep Cleaning",
  "Denture Care",
  "Filling or Restorations",
  "Fluoride Tray At-Home Use",
  "Fluoride Varnish and Gel",
  "Immediate Denture",
  "Oral Rinses or Mouthwash",
  "Orthodontics",
  "Root Canal Therapy",
  "Socket Preservation",
  "Sinus Precautions",
  "Surgical Instructions",
  "Temporary Crown Care",
  "Tooth Extraction",
  "Veneers, Crowns & Bridges",
  "Tooth Whitening",
];

export function PostTreatment() {
  return (
    <div>
      <div className="bg-[#E8F4FA] py-16 text-center px-4">
        <h1 className="text-5xl font-bold text-[#101828] mb-4">Post Treatment Instructions</h1>
        <p className="text-xl text-gray-600">Follow these guidelines for optimal healing and comfort</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-lg text-gray-700 mb-10">
          These instructions are here to help our patients after they have received excellent dental treatment at Heritage Oak Dental. Please refer to these post-operative instructions in regards to your dental treatment and after care.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14">
          {TOPICS.map((topic) => (
            <div key={topic} className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl hover:border-[#1B89C5] hover:bg-blue-50/30 transition-all cursor-pointer">
              <svg className="w-5 h-5 text-[#1B89C5] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd"/>
              </svg>
              <span className="font-medium text-[#101828]">{topic}</span>
            </div>
          ))}
        </div>

        <div className="bg-[#E8F4FA] rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-[#101828] mb-3">Questions or Concerns?</h3>
          <p className="text-gray-600 mb-2">
            If you have any questions about your post-treatment care or experience any complications, please contact our office immediately.
          </p>
          <p className="text-gray-600 mb-4">Call us at:</p>
          <a href="tel:9166264050" className="inline-block bg-[#1B89C5] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#1578ad] transition-colors">
            (916) 626-4050
          </a>
          <p className="text-gray-500 text-sm mt-4">Our team is here to help ensure your recovery is smooth and comfortable.</p>
        </div>
      </div>
    </div>
  );
}
