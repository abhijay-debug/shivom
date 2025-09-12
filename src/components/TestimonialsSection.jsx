import React from 'react'

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="bg-white py-24">
  <div className="max-w-[1440px] mx-auto px-6 md:px-20">
    <h2 className="fade-up text-5xl break-words   font-bold text-center mb-6 bg-[#398B99] bg-clip-text text-transparent">
      Transformations with SHIV-AI
    </h2>
    <p className="fade-up text-xl text-center text-gray-700 max-w-2xl mx-auto mb-16">
      Hear from people who unlocked their true potential with SHIV-AI coaching.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      
      {/* <!-- Testimonial 1 --> */}
      <div className="fade-up text-white bg-[radial-gradient(circle_at_center,#398B99_10%,transparent_120%)] p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
        <p className="fade-up text-white mb-6 italic">
          “I struggled with PCOS and felt helpless after trying random diets. With Shivohaam’s 
program, I lost 12 kg, my PCOS symptoms eased, and I finally feel in control of my 
body!” –
        </p>
        <div className="flex items-center space-x-4">
          {/* <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="User" className="w-14 h-14 rounded-full object-cover" /> */}
          <div>
            <h4 className="fade-up font-semibold text-lg">Priya , 26</h4>
            <p className="fade-up text-gray-900 text-sm">Entrepreneur</p>
          </div>
        </div>
      </div>

      {/* <!-- Testimonial 2 --> */}
      <div className="fade-up text-white bg-[radial-gradient(circle_at_center,#398B99_10%,transparent_120%)] p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
        <p className=" fade-up text-white mb-6 italic">
                    “At 45, my diabetes was worsening and every workout felt exhausting. SHIV-AI 
          adjusted everything to my pace. In 2 months I dropped 10 kg and my blood sugar is 
          down by 25%! My doctor was amazed — and so am I.” 
        </p>
        <div className="fade-up flex items-center space-x-4">
          {/* <img src="https://randomuser.me/api/portraits/men/33.jpg" alt="User" className="w-14 h-14 rounded-full object-cover" /> */}
          <div>
            <h4 className="fade-up font-semibold text-lg">Rohit , 45 </h4>
            <p className="fade-up text-gray-900 text-sm">Software Engineer</p>
          </div>
        </div>
      </div>

      {/* <!-- Testimonial 3 --> */}
      <div className=" fade-up bg-[radial-gradient(circle_at_center,#398B99_10%,transparent_120%)] p-8 rounded-2xl text-white shadow-md hover:shadow-xl transition-all duration-300">
        <p className="fade-up text-white mb-6 italic">
          “I signed up 3 months before my wedding, hoping to tone up. The results blew me 
away – 8 kg lighter, stronger and full of confidence. I walked down the aisle feeling 
like the best version of myself. Thank you, Shivohaam and SHIV-AI, for making it 
happen!” 
        </p>
        <div className="fade-up flex items-center space-x-4">
          {/* <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="User" className="w-14 h-14 rounded-full object-cover" /> */}
          <div>
            <h4 className="fade-up font-semibold text-lg">Arayan , 30</h4>
            <p className="fade-up text-gray-900 text-sm">Marketing Manager</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
  )
}

export default TestimonialsSection
