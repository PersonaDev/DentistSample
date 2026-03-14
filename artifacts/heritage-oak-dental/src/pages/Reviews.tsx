const REVIEWS = [
  {
    text: "The office is always very clean and the staff is great. Dr. Douglas is wonderful. Very kind, trustworthy and patient.",
    author: "Michelle M.",
    source: "Google",
  },
  {
    text: "Absolutely love this office! Went today for my first visit and the office staff are all very upbeat, polite, professional, and most of all informative. They all seem very genuine and work well together. Scheduling the rest of my family for their visits.",
    author: "Cris T.",
    source: "Yelp",
  },
  {
    text: "Hands down the best dental experience. The office is beautiful and immaculate. I was so nervous (for something that wasn't wrong anyhow) and Dr. Kloss and his staff were beyond personable and down to earth. My kind of people. I highly recommend this office.",
    author: "Taryn D.",
    source: "Yelp",
  },
  {
    text: "It was my first time to visit Dr. Douglas. He and his entire staff are very friendly and professional. Dr. Douglas explained everything to me in detail, it wasn't a good visit for me because I found out I had to have a tooth extraction as well as place an implant. I had a terrible experience about a year ago having a different tooth extracted and as I explained to him how this last experience went.... he looked at me and said we will not do it that way, we will raise the bar for you! I liked that very much. He was open to new ideas. I appreciate his knowledge and understanding. Would highly recommend Heritage Oak Dental to everyone!",
    author: "Rosanne D.",
    source: "Yelp",
  },
  {
    text: "I was terrified! But they were all very nice. And Mary the office manager was the best! She was so nice and compassionate. I had a toothache for three months because I was so scared. But it was so easy. Thank you.",
    author: "Aimee K.",
    source: "Yelp",
  },
  {
    text: "Our daughter has special needs and required sedation dentistry for several procedures. Dr. Douglas and all of the staff at Heritage Oak Dental treated her with respect and encouragement and communicated with us in a warm, friendly fashion, making the whole stressful experience very anxiety-free. Thank you so much for your kind attention to our daughter's needs.",
    author: "Aladene S.",
    source: "Facebook",
  },
  {
    text: "Today's appointment was great, Annette kept me entertained, making me laugh while doing and excellent job cleaning my teeth, my teeth feel really good. Thanks also to Dr. Douglas, always a great visit. Staff is always friendly, office clean. Love this place.",
    author: "Marvin R.",
    source: "Facebook",
  },
  {
    text: "The staff here at Heritage Oak Dental is amazing! They always schedule our family on the same day so that we don't have to make multiple trips. Recently I needed some orthodontic treatment (braces) and knew I was in good hands. I absolutely love my new smile and wish I would have done it sooner. Heritage Oak Dental will be our lifetime dental office!",
    author: "Garret M.",
    source: "Facebook",
  },
  {
    text: "They have an amazing staff! We have enjoyed our care here as a family. They helped guide us through my husband's root canal, crowns and wisdom teeth removal and were great with my two children. Staff is friendly and helpful, as a mom with a newborn and a two year old who needed a cleaning, I wouldn't go anywhere else!",
    author: "Cortney M.",
    source: "Facebook",
  },
  {
    text: "I've posted before, but I can't help but post again. I've been a \"dentist hopper\" for decades & I found the best at Heritage Oak Dental. Annette is a hygienist sent from the heavens above - gentle, compassionate and really good at what she does. My teeth and gums are in the best condition they've ever been - thanks to Annette and Dr. Shane!",
    author: "Teresa E.",
    source: "Google",
  },
  {
    text: "I have to say I absolutely fell in love with Heritage Oak Dental's beautiful, state-of-the-art and clean office. The staff is super friendly & welcoming. Lindsey (hygienist) was fantastic, super kind. She provided comfort and safety, with the best care for me. She made my visit very enjoyable! I also met w/ Dr. Ben Kloss who popped in to greet me and looked at my teeth, he explained things so well. And I enjoyed working with Cara who took photos and X-rays of my teeth, she made the process so easy and her kind personality created a very comfortable experience for me. Thank you Heritage Oak Dental!!",
    author: "Victoria T.",
    source: "Google",
  },
  {
    text: "Great experience! I've used the Douglas family for 30 years and they never disappoint! Thanks guys!",
    author: "Krista D.",
    source: "Google",
  },
];

const sourceColor: Record<string, string> = {
  Google: "text-blue-600",
  Yelp: "text-red-500",
  Facebook: "text-blue-700",
};

export function Reviews() {
  return (
    <div>
      <div className="bg-[#E8F4FA] py-16 text-center px-4">
        <h1 className="text-5xl font-bold text-[#101828] mb-3">Reviews</h1>
        <p className="text-xl text-gray-600">Read our 5 star reviews</p>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {REVIEWS.map((r, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm flex flex-col gap-4">
              <div className="flex gap-1">
                {[1,2,3,4,5].map(s => (
                  <svg key={s} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed flex-1">"{r.text}"</p>
              <div className="flex items-center justify-between mt-2">
                <span className="font-semibold text-[#101828]">– {r.author}</span>
                <span className={`text-sm font-bold ${sourceColor[r.source] || "text-gray-500"}`}>{r.source}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
