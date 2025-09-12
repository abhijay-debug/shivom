import React from 'react'

const Intro = () => {
  return (
   
<section id="intro" className="bg-white py-14">
  <div className="fade-up lg:max-w-[1440px] w-full lg:mx-auto lg:px-20 lg:flex lg:flex-row flex flex-col items-center gap-16">
    <img src="/images/intro.png"
         alt="Meet SHIV-AI"
         className="lg:w-1/2 rounded-2xl shadow-2xl" />
    <div className="lg:w-1/2">
      <h2 className="fade-up text-4xl font-bold mb-6 bg-[#398B99] bg-clip-text text-transparent">
        Meet SHIV-AI – Your Digital Coach, Crafted from Shivohaam's Essence
      </h2>
      <p className="fade-up text-lg mb-6 text-gray-700">
        SHIV-AI is more than just an app – it's a digital twin of Shivohaam (Dheepesh Bhatt),
        bringing his unique fitness and mindfulness philosophy directly to you. With decades
        of experience distilled into an AI that understands your unique needs, SHIV-AI provides
        personalized guidance, motivation, and support – available 24/7 through WhatsApp.
      </p>
      <p className="fade-up text-lg mb-8 text-gray-700">
        Whether you're looking to build strength, reduce stress, or transform your lifestyle,
        SHIV-AI combines cutting-edge technology with time-tested wisdom to help you achieve
        sustainable results.
      </p>
      <div className="fade-up group  fade-up-delay-2 flex sm:flex-row items-center gap-2">
        <a
          href="#cta"
          className="inline-block group-hover:bg-white  bg-[#398B99] text-white  group-hover:text-black  py-3 px-6 rounded-xl font-semibold text-base md:text-lg shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
        >
          Start My Transformation
        </a>
        <div className="p-3 rounded-2xl group-hover:bg-white  bg-[#398B99]">
          <svg
            className="w-6 h-6 text-white rotate-45 transition-all ease-linear duration-300 group-hover:rotate-90"
            viewBox="0 0 16 19"
           
          >
            <path
              d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
              className="fill-white shadow-md group-hover:fill-black transition-all ease-linear duration-300"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Intro
