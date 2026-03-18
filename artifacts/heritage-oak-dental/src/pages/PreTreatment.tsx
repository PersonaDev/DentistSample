import { SEOHead } from "@/components/SEOHead";

export function PreTreatment() {
  return (
    <>
      <SEOHead
        title="Pre-Treatment Instructions | Heritage Oak Dental Rocklin"
        description="Pre-treatment instructions from Heritage Oak Dental in Rocklin, CA. Prepare for your dental procedure with guidance from our experienced team. Call (916) 626-4050."
        keywords="pre treatment dental instructions Rocklin, before dental procedure Rocklin, Heritage Oak Dental instructions"
        canonicalPath="/resources/pretreatment"
      />
    <div>
      <div className="bg-[#E8F4FA] py-16 text-center px-4">
        <h1 className="text-5xl font-bold text-[#101828] mb-4">Pre-Treatment Instructions</h1>
        <p className="text-xl text-gray-600">
          Preparing for your dental procedure helps ensure the best outcome
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-lg text-gray-700 mb-10">
          These instructions are here to help our patients before they even show up for the appointment. Please refer to these pre-operative instructions in regards to sedation dentistry.
        </p>

        {/* General Pre-Op */}
        <section className="mb-12 border-b border-gray-200 pb-12">
          <h2 className="text-2xl font-bold text-[#101828] mb-4">General Pre-Operative Instructions</h2>
          <p className="text-gray-700 mb-4">
            Unless otherwise instructed, take all medications that your physician, as well as your dentist have prescribed with a small sip of water.
          </p>
          <p className="text-gray-700 mb-4">
            Please brush your teeth before each appointment and refrain from eating immediately before. You will always be given local anesthesia (numbing medicine) for your dental surgery unless requested not too. If you are unclear about anything, please ask your doctor.
          </p>
          <p className="text-gray-700">
            Our goal is to provide you with a safe, pleasant and effective anesthetic. In order to do this, it is imperative that we have your full cooperation. Please feel free to ask any questions concerning your dental surgery and/or anesthetic.
          </p>
        </section>

        {/* Conscious Sedation */}
        <section className="mb-12 border-b border-gray-200 pb-12">
          <h2 className="text-2xl font-bold text-[#101828] mb-2">Conscious Sedation</h2>
          <p className="text-gray-500 italic mb-6">Conscious sedation is often referred to as sleep or twilight dentistry</p>
          <h3 className="text-lg font-semibold text-[#101828] mb-4">In preparation:</h3>
          <ul className="flex flex-col gap-3">
            {[
              "Do not eat any solid foods for 6 hours prior to your appointment.",
              "You may drink small amounts of clear liquids up to 3 hours prior to your appointment. (apple juice, clear broth, water)",
              "Take any medications you normally would take with a small amount of water.",
              "Wear comfortable, loose fitting clothing with short sleeves.",
              "Leave jewelry and watches at home.",
              "No contact lenses.",
              "A responsible adult will need to escort you home from the office.",
              "Arrange to have the entire day off. Limit your activities for the day. Make arrangements to have help with children or pets.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700">
                <svg className="w-5 h-5 text-[#1B89C5] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-gray-700 mt-6">
            Your comfort, convenience and safety are our primary concerns. Following these instructions will allow you to have the best experience. If you have any questions, please call the office.
          </p>
        </section>

        {/* IV or General Anesthesia */}
        <section className="mb-12 border-b border-gray-200 pb-12">
          <h2 className="text-2xl font-bold text-[#101828] mb-6">IV or General Anesthesia</h2>
          <ul className="flex flex-col gap-3">
            {[
              "Do not eat or drink anything for 8 hours before your scheduled surgery. Your previous meal should be light and easily digestible.",
              "Diabetic patients should consult with their doctor about specific directions regarding insulin dosage.",
              "Please wear a short-sleeve shirt and loose-fitting clothes. Dress as comfortably as possible and bring a sweater for after surgery.",
              "If you wear contact lenses, bring a container and remove them prior to your surgery.",
              "Please remove all jewelry prior to arriving.",
              "You may, under no circumstances, drive an automobile until 24 hours after the surgery.",
              "Be sure a responsible person comes with you on the day of your surgical appointment.",
              "Minors must be accompanied by parents or legal guardian. Plan to have someone stay with you all day after the surgery.",
              "If you are taking any prescription or non-prescription medications, inform the doctor.",
              "You should take your normal medication unless otherwise instructed by your doctor.",
              "Take any medication that the doctor has prescribed for you at the designated time.",
              "Dentures must be removed at the time of surgery.",
              "Do not smoke or consume alcohol 24 hours before your appointment.",
              "Do not plan to fly or scuba dive within the week following your surgery.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700">
                <svg className="w-5 h-5 text-[#1B89C5] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <div className="bg-[#E8F4FA] rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-[#101828] mb-3">Questions About Your Procedure?</h3>
          <p className="text-gray-600 mb-4">If you have any questions or concerns about your upcoming procedure, please don't hesitate to contact us.</p>
          <a href="tel:9166264050" className="inline-block bg-[#1B89C5] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#1578ad] transition-colors">
            (916) 626-4050
          </a>
        </div>
      </div>
    </div>
    </>
  );
}
