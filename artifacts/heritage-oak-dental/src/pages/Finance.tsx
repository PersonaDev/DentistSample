const NETWORKS = [
  "Active Duty Dental Program United Concordia Tricare",
  "Ameriben Solutions",
  "America's Choice Healthplans",
  "Ameritas",
  "Anthem BCBS (Multiple States)",
  "Assurant Employee Benefits",
  "Blue Cross of Idaho",
  "Cigna",
  "Delta Dental PPO & Premier",
  "Guardian",
  "Humana",
  "Metlife",
  "Principal",
  "United Concordia",
  "UnitedHealthcare (Optum Health)",
  "And many more...",
];

const SMILE_CLUB_BENEFITS = [
  "No Claim Forms",
  "No Deductibles",
  "No Annual Maximums",
  "No Waiting Period",
  "No Limitations",
  "Specialty Discounts",
];

export function Finance() {
  return (
    <div>
      <div className="bg-[#E8F4FA] py-16 text-center px-4">
        <h1 className="text-5xl font-bold text-[#101828] mb-4">Finance</h1>
        <p className="text-xl text-gray-600">Convenient payment options to help you get the care you need</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <p className="text-lg text-gray-700 mb-12">
          To help you get the care you need, we have a number of convenient payment options. Before we get started with treatment, we'll discuss your needs and make payment arrangements that work for you. We accept most dental plans, and will coordinate with your provider to help you to get the most out of you dental insurance benefits. We also accept MasterCard, Visa, and Discover Card. We extend cash discounts courtesy for payment in full by cash. Our office policy is to collect your portion at the time of service.
        </p>

        {/* Financial Policy */}
        <section className="mb-12 border-b border-gray-200 pb-12">
          <h2 className="text-2xl font-bold text-[#101828] mb-4">Financial Policy</h2>
          <p className="text-gray-700 mb-4">
            Many of our patients find it convenient to spread out treatment costs into low monthly payments. We work with a number of different financing companies, and each offers extended payment plans. We'll go over all the options to find the plan that works for you. Once we decide on the plan, we'll process the application and make a decision for you in minutes. It's that simple to get started on your beautiful healthy smile today!
          </p>
          <a
            href="https://www.heritageoakdental.com/wp-content/uploads/2019/04/HOD-Financial-Policy.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#1B89C5] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#1578ad] transition-colors"
          >
            Download Financial Policy PDF
          </a>
        </section>

        {/* Smile Club */}
        <section className="mb-12 border-b border-gray-200 pb-12">
          <h2 className="text-2xl font-bold text-[#101828] mb-4">Heritage Oak Dental Smile Club</h2>
          <p className="text-gray-700 mb-6">
            The Heritage Dental Plan is a flexible alternative to insurance. Enroll today and enjoy no claim forms, no deductibles, no annual maximums, no waiting period, no limitations, and specialty service discounts! To learn more please call{" "}
            <a href="tel:9166264050" className="text-[#1B89C5] hover:underline">(916) 626-4050</a>!
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {SMILE_CLUB_BENEFITS.map((b) => (
              <div key={b} className="bg-[#E8F4FA] rounded-xl p-4 text-center font-semibold text-[#101828] text-sm">
                {b}
              </div>
            ))}
          </div>
        </section>

        {/* Dental Insurance */}
        <section className="mb-12 border-b border-gray-200 pb-12">
          <h2 className="text-2xl font-bold text-[#101828] mb-4">Dental Insurance</h2>
          <p className="text-gray-700 mb-4">
            For your convenience, we will submit initial insurance claims pertaining to charges for care provided in our office. However, please be aware that our primary financial relationship is with our patients and their families and not with their respective insurance companies.
          </p>
          <p className="text-gray-700 mb-4">
            Our philosophy, high standard of care, customer service, and ethics are not compatible with the restrictive nature of many managed care plans (HMOs). Accordingly, our office is not a contracted provider with any HMO or DHMO plans.
          </p>
          <div className="flex flex-col gap-3 mb-4">
            <p className="text-gray-700"><strong>Traditional benefit ("indemnity") plans</strong> do not stipulate where you can go. You can see any dentist (including us!) and receive the full benefits of the policy.</p>
            <p className="text-gray-700"><strong>If your benefit plan is a PPO</strong>, you are allowed to select any provider you see fit. Heritage Oak Dental is a "preferred provider" for MOST PPO insurance plans (see the Network List below).</p>
            <p className="text-gray-700"><strong>If your plan is an HMO/DMO</strong>, you will receive benefits only if you see a dentist on their very restrictive list of contracted providers. Naturally, it will be our pleasure to serve you; however, your HMO plan will not cover any of your costs at our office.</p>
          </div>
          <p className="text-gray-700 mb-4">We will never compromise your care based on what an insurance company says. Our commitment is to serve you rather than insurance companies. Ultimately, your insurance company is responsible to you. We cannot make any guarantees or promises on behalf of your insurance company.</p>
          <ul className="list-disc pl-6 flex flex-col gap-2 text-gray-700 text-sm">
            <li>Know what your benefits are before treatment starts. If you are not sure, contact your insurance company so that you know exactly how much you can expect to be paid and when to expect payment.</li>
            <li>If you would like our office to submit claim forms prior to treatment, we ask that you provide us with the name, address and telephone number of your insurance carrier.</li>
            <li>We cannot provide services on the assumption that our charges will be paid by an insurance carrier. However, for your convenience, we will accept payments from your insurance company assigned to us by the insured. Such payments will be credited accordingly to your account.</li>
          </ul>
        </section>

        {/* CareCredit */}
        <section className="mb-12 border-b border-gray-200 pb-12">
          <h2 className="text-2xl font-bold text-[#101828] mb-4">CareCredit</h2>
          <p className="text-gray-700">
            CareCredit has a number of affordable plans, including up to 18 months interest free for Invisalign treatment.
          </p>
          <p className="text-gray-700 mt-3">
            We also offer in-house financing in the form of monthly payments after a down payment for dental treatment with 0% financing for the length of treatment.
          </p>
        </section>

        {/* Network List */}
        <section>
          <h2 className="text-2xl font-bold text-[#101828] mb-4">Network List</h2>
          <p className="text-gray-700 mb-6">Heritage Oak Dental is a preferred provider for the following insurance networks:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
            {NETWORKS.map((n) => (
              <div key={n} className="flex items-center gap-2 text-gray-700">
                <svg className="w-4 h-4 text-[#1B89C5] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                {n}
              </div>
            ))}
          </div>
          <p className="text-gray-600 italic">Contact our office to verify if we accept your specific plan.</p>
        </section>
      </div>
    </div>
  );
}
