const FORMS = [
  {
    title: "Adult Health History",
    desc: "Medical and dental history form for adult patients",
    url: "https://www.heritageoakdental.com/wp-content/uploads/2019/04/Adult-Medical-Dental-History.pdf",
  },
  {
    title: "Child Health History",
    desc: "Medical and dental history form for pediatric patients",
    url: "https://www.heritageoakdental.com/wp-content/uploads/2019/04/Child-Medical-Dental-History.pdf",
  },
  {
    title: "HIPAA",
    desc: "Health Insurance Portability and Accountability Act form",
    url: "https://www.heritageoakdental.com/wp-content/uploads/2019/04/HIPAA-updated1-3-21-18.pdf",
  },
  {
    title: "Dental Materials Fact Sheet",
    desc: "Information about dental materials used in treatment",
    url: "https://heritageoakdental.com/wp-content/uploads/2019/03/Dental-Materials-Fact-Sheet-1.pdf",
  },
  {
    title: "Financial Policy",
    desc: "Payment and insurance information",
    url: "https://www.heritageoakdental.com/wp-content/uploads/2019/04/HOD-Financial-Policy.pdf",
  },
];

export function NewPatient() {
  return (
    <div>
      <div className="bg-[#E8F4FA] py-16 text-center px-4">
        <h1 className="text-5xl font-bold text-[#101828] mb-4">New Patient Forms</h1>
        <p className="text-xl text-gray-600">
          Save time at your first appointment by completing these forms ahead of time
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-lg text-gray-700 mb-10 text-center">
          You can bring them with you or email them to us at{" "}
          <a href="mailto:contactus@heritageoakdental.com" className="text-[#1B89C5] hover:underline">
            contactus@heritageoakdental.com
          </a>
        </p>

        <h2 className="text-3xl font-bold text-[#101828] mb-8">Download Forms</h2>

        <div className="flex flex-col gap-4 mb-14">
          {FORMS.map((form) => (
            <a
              key={form.title}
              href={form.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-6 border border-gray-200 rounded-xl hover:border-[#1B89C5] hover:bg-blue-50/30 transition-all group"
            >
              <div>
                <h3 className="text-lg font-bold text-[#101828] group-hover:text-[#1B89C5] transition-colors">{form.title}</h3>
                <p className="text-gray-500 text-sm mt-1">{form.desc}</p>
              </div>
              <svg className="w-5 h-5 text-[#1B89C5] flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </a>
          ))}
        </div>

        <div className="bg-[#E8F4FA] rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-[#101828] mb-3">Need Help?</h3>
          <p className="text-gray-600 mb-4">If you have any questions about these forms, please don't hesitate to contact us.</p>
          <a
            href="tel:9166264050"
            className="inline-block bg-[#1B89C5] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#1578ad] transition-colors"
          >
            Call Us: (916) 626-4050
          </a>
        </div>
      </div>
    </div>
  );
}
