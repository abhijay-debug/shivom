import React from 'react'

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-white py-6">
  <div className="max-w-[1440px] mx-auto px-6 md:px-20">
    <h2 className="fade-up text-3xl lg:text-5xl font-bold text-center mb-6 bg-[#398B99] bg-clip-text text-transparent">
      How It Works
    </h2>
    <p className=" fade-up text-xl text-center text-gray-700 max-w-2xl mx-auto mb-16">
      Get started with SHIV-AI in just three simple steps
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      {/* <!-- Step 1 --> */}
      <div className="text-center">
        <div className=" fade-up w-20 h-20 rounded-full bg-[linear-gradient(90deg,#398B99_10%,transparent_100%)] flex items-center justify-center mx-auto mb-6 shadow-lg">
          <span className=" fade-up text-white text-3xl font-bold">1</span>
        </div>
        <h3 className="fade-up text-2xl font-semibold mb-4">Connect on WhatsApp</h3>
        <p className="fade-up text-black">
          Start your journey by messaging SHIV-AI directly on WhatsApp – your personal AI coach is always just a text away.
        </p>
      </div>
      {/* <!-- Step 2 --> */}
      <div className="text-center">
        <div className=" fade-up w-20 h-20 rounded-full bg-[linear-gradient(90deg,#398B99_10%,transparent_100%)] flex items-center justify-center mx-auto mb-6 shadow-lg">
          <span className=" fade-up text-white text-3xl font-bold">2</span>
        </div>
        <h3 className="fade-up text-2xl font-semibold mb-4">Get Personalized Guidance</h3>
        <p className="fade-up text-gray-600">
                      Get your exercises with proper technique 
            cues. Unsure about a movement? Upload a video for form feedback and avoid 
            injury while maximizing results.
        </p>
      </div>
      {/* <!-- Step 3 --> */}
      <div className="text-center">
        <div className="fade-up w-20 h-20 rounded-full bg-[linear-gradient(90deg,#398B99_10%,transparent_100%)] flex items-center justify-center mx-auto mb-6 shadow-lg">
          <span className=" fade-up text-white text-3xl font-bold">3</span>
        </div>
        <h3 className="fade-up text-2xl font-semibold mb-4">24/7 Q&A and Support</h3>
        <p className="fade-up text-gray-600">
                      Have a question about a food choice late at night? 
            Struggling with motivation before a workout? SHIV-AI is available round the clock 
            to answer questions, give pep talks, or modify your program. It’s real-time support 
            whenever you need it.
        </p>
      </div>
      {/* <!-- Step 4 --> */}
      <div className="text-center">
        <div className="fade-up w-20 h-20 rounded-full bg-[linear-gradient(90deg,#398B99_10%,transparent_100%)] flex items-center justify-center mx-auto mb-6 shadow-lg">
          <span className=" fade-up text-white text-3xl font-bold">4</span>
        </div>
        <h3 className="fade-up text-2xl font-semibold mb-4">Meal Logging & Nutrition Coaching</h3>
        <p className="fade-up text-gray-600">
                      Simply snap photos of your meals for SHIV-AI 
            to analyze. You’ll get instant feedback and adjustments, so you learn exactly how to 
            eat for your goals. No more diet confusion – just clear, personalized nutrition advice.
        </p>
      </div>
        {/* <!-- Step 6 --> */}
      <div className="text-center">
        <div className="fade-up w-20 h-20 rounded-full bg-[linear-gradient(90deg,#398B99_10%,transparent_100%)] flex items-center justify-center mx-auto mb-6 shadow-lg">
          <span className=" fade-up text-white text-3xl font-bold">5</span>
        </div>
        <h3 className="fade-up text-2xl font-semibold mb-4">Progress Tracking & Adjustments</h3>
        <p className="fade-up text-gray-600">
                    Every week, SHIV-AI reviews your progress – 
        weight, measurements, energy levels, mood – and adapts your plan. Stalled on a 
        plateau? We’ll tweak your calories or switch up your routine. Progress speeding 
        ahead? Great – we’ll set new goals. You’ll also receive regular “report cards” to see 
        how far you’ve come.
        </p>
      </div>
        {/* <!-- Step 6 --> */}
       <div className="text-center">
        <div className="fade-up w-20 h-20 rounded-full bg-[linear-gradient(90deg,#398B99_10%,transparent_100%)]  flex items-center justify-center mx-auto mb-6 shadow-lg">
          <span className=" fade-up text-white text-3xl font-bold">6</span>
        </div>
        <h3 className="fade-up text-2xl font-semibold mb-4">Mindset & Motivation</h3>
        <p className="fade-up text-gray-600">
                    Expect regular doses of motivation and mindset coaching. 
          I’ve always said that fitness is a mental game as much as physical. SHIV-AI 
          brings in my coaching tips on discipline, habit-building, and even shares a bit of 
          tough love when you need it. We celebrate wins together and strategize through 
          struggles, keeping you consistent even when life gets busy.
        </p>
      </div>
    </div>
  </div>
</section>
  )
}

export default HowItWorks
