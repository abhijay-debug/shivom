import React from 'react'

const Pricing = () => {
  return (
    <section className="py-24 bg-white" id="pricing">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="fade-up text-4xl md:text-5xl font-bold text-center mb-6 bg-[#398B99] bg-clip-text text-transparent">
      Investment in Your Transformation
    </h2>
    <p className="fade-up text-lg text-center text-gray-600 max-w-2xl mx-auto mb-16">
      Choose the plan that fits your journey and commitment to change
    </p>

    <div className=" flex flex-col md:flex-row justify-center gap-10">
      {/* Card 1 */}
       <div className="fade-up w-full md:w-[400px] bg-white rounded-2xl p-10 shadow-lg border border-gray-200 hover:-translate-y-2 hover:shadow-2xl transition">
        <h3 className=" fade-up text-2xl font-semibold text-center mb-4">One-Time Plan</h3>
        <div className="fade-up text-5xl font-bold text-center text-[#789DBC] mb-8">₹2,999</div>
        <div className="space-y-4 mb-8">
          <div className="fade-up flex items-center gap-3 text-gray-700">
            <i className=" ri-check-line text-indigo-600"></i>
            <span>One-time custom workout & diet plan</span>
          </div>
          <div className="fade-up flex items-center gap-3 text-gray-700">
            <i className=" ri-check-line text-indigo-600"></i>
            <span>Includes detailed assessment</span>
          </div>
          <div className="fade-up flex items-center gap-3 text-gray-700">
            <i className=" ri-check-line text-indigo-600"></i>
            <span>1 follow-up consultation</span>
          </div>
          <div className="fade-up flex items-center gap-3 text-gray-700">
            <i className=" ri-check-line text-indigo-600"></i>
            <span>No ongoing daily coaching</span>
          </div>
          <div className="fade-up flex items-center gap-3 text-gray-700">
            <i className=" ri-check-line text-indigo-600"></i>
            <span>Access to meditation library</span>
          </div>
        </div>
        <a
          href="#cta"
          className=" fade-up block w-full text-center py-3 px-6 hover:bg-white hover:text-black  rounded-md font-semibold text-lg shadow-md bg-[#398B99] text-white hover:shadow-xl hover:-translate-y-1 transition"
        >
          Get Started
        </a>
      </div>
      <div className="fade-up w-full md:w-[400px] bg-white rounded-2xl p-10 shadow-lg border border-gray-200 hover:-translate-y-2 hover:shadow-2xl transition">
        <h3 className=" fade-up text-2xl font-semibold text-center mb-4">Monthly Plan</h3>
        <div className="fade-up text-5xl font-bold text-center text-[#789DBC] mb-8">₹7,999</div>
        <div className="space-y-4 mb-8">
          <div className="fade-up flex items-center gap-3 text-gray-700">
            <i className=" ri-check-line text-indigo-600"></i>
            <span>4-week full SHIV-AI access</span>
          </div>
          <div className="fade-up flex items-center gap-3 text-gray-700">
            <i className=" ri-check-line text-indigo-600"></i>
            <span>Personalized workouts & meal plans</span>
          </div>
          <div className="fade-up flex items-center gap-3 text-gray-700">
            <i className=" ri-check-line text-indigo-600"></i>
            <span>Daily guidance & motivation</span>
          </div>
          <div className="fade-up flex items-center gap-3 text-gray-700">
            <i className=" ri-check-line text-indigo-600"></i>
            <span>24/7 WhatsApp support</span>
          </div>
          <div className="fade-up flex items-center gap-3 text-gray-700">
            <i className=" ri-check-line text-indigo-600"></i>
            <span>Access to meditation library</span>
          </div>
        </div>
        <a
          href="#cta"
          className=" fade-up block w-full text-center py-3 px-6 hover:bg-white hover:text-black  rounded-md font-semibold text-lg shadow-md bg-[#398B99] text-white hover:shadow-xl hover:-translate-y-1 transition"
        >
          Get Started
        </a>
      </div>

      {/* Card 3*/}
      <div className="fade-up w-full md:w-[400px] bg-[radial-gradient(circle_at_center,#398B99_10%,transparent_100%)] rounded-2xl p-10 shadow-lg border border-gray-200 hover:-translate-y-2 hover:shadow-2xl transition">
        <h3 className="fade-up text-2xl font-semibold  text-white text-center mb-4">Three-Month Plan</h3>
        <div className="fade-up text-5xl font-bold text-center text-white mb-8">₹20,999</div>
        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-3 text-white">
            <i className=" ri-check-line text-indigo-600"></i>
            <span>12-week transformation program</span>
          </div>
          <div className="fade-up flex items-center gap-3 text-white">
            <i className=" ri-check-line text-indigo-600"></i>
            <span>All One-Month features included</span>
          </div>
          <div className="fade-up flex items-center gap-3 text-white">
            <i className=" ri-check-line text-indigo-600"></i>
            <span>Deeper tracking & progress adjustments</span>
          </div>
          <div className="fade-up flex items-center gap-3 text-white">
            <i className=" ri-check-line text-indigo-600"></i>
            <span>Support for PCOS, diabetes & lifestyle goals</span>
          </div>
       
        </div>
        <a
          href="#cta"
          className="fade-up block w-full text-center py-3 px-6 rounded-md hover:bg-white hover:text-black font-semibold text-lg shadow-md bg-[#398B99] text-white hover:shadow-xl hover:-translate-y-1 transition"
        >
          Best Value
        </a>
      </div>
    </div>
  </div>
</section>
  )
}

export default Pricing
