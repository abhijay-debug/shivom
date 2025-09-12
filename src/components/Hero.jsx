import React, { useEffect, useState } from "react";

export default function Hero() {

  return (
  <section id="hero" className="w-full  flex items-center overflow-hidden overflow-hidden mt lg:mt-2">
  <div className="fade-up overflow-hidden w-full lg:h-screen    overflow-hidden shadow-md rounded-md flex flex-col  lg:flex-row items-center justify-between  bg-[url('/images/heroimg.jpg')] bg-cover bg-center">
    
    {/* Left Content */}
    <div className=" z-20 flex flex-col overflow-hidden lg:h-screen w-full items-center justify-between    bg-[linear-gradient(90deg,#398B99_10%,transparent_150%)] lg:p-18 py-4 to-transparent lg:items-start text-center lg:text-left  ">
      <h1 className="fade-up text-6xl max-sm:text-4xl max-md:w-[70vw] lg:w-[50vw] max-md:text-5xl lg:text-6xl text-[#F2F2F2] font-bold leading-tight mb- drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
        Unleash Your Inner Strength with SHIV-AI 
      </h1>
      <p className="fade-up fade-up-delay-1 text-white text-base sm:text-lg md:text-xl mb-8 md:mb-10 w-full sm:max-w-md lg:max-w-[40vw] drop-shadow-[0_2px_5px_rgba(0,0,0,0.3)]">
        Your 24/7 Digital Coach, created from Shivohaam’s 19+ years of fitness & spiritual mastery.  
Transform your body, mind, and habits with guidance that never sleeps.
      </p>
      {/* CTA Button */}
      <p className="mb-6">
        <div className="flex  items-center gap-2 text-white mb-2">
          <div className="h-3 w-3 rounded-full bg-white"></div>
          <h4>Personalized Workouts </h4>
        </div>
         <div className="flex  items-center gap-2 text-white mb-2">
          <div className="h-3 w-3 rounded-full bg-white"></div>
          <h4>Mindfulness Training </h4>
        </div>
         <div className="flex  items-center gap-2 text-white mb-2">
          <div className="h-3 w-3 rounded-full bg-white"></div>
          <h4>24/7 Support  </h4>
        </div>
         <div className="flex  items-center gap-2 text-white mb-2">
          <div className="h-3 w-3 rounded-full bg-white"></div>
          <h4>Progress Tracking </h4>
        </div>

        </p>
      
      <div className="fade-up group  fade-up-delay-2 flex sm:flex-row items-center gap-2">
        <a
          href="#cta"
          className="inline-block group-hover:bg-white  bg-white  text-black  py-3 px-6 rounded-xl font-semibold text-base md:text-lg shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
        >
          Start My Transformation
        </a>
        <div className="p-3 rounded-2xl group-hover:bg-white  bg-white">
          <svg
            className="w-6 h-6 text-white rotate-45 transition-all ease-linear duration-300 group-hover:rotate-90"
            viewBox="0 0 16 19"
           
          >
            <path
              d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
              className="fill-black transition-all ease-linear duration-300"
            />
          </svg>
        </div>
      </div>
    </div>

    {/* Right Image */}
    
  </div>
</section>



  );
}
