import React from 'react'

const Benifit = () => {
  return (
//    <!-- Benefits Section -->
<section id="benefits" className="bg-white py-24">
  <div className="lg:max-w-[1440px] lg:mx-auto lg:px-20">
    <h2 className="fade-up text-5xl font-bold text-center mb-6 bg-[#398B99] bg-clip-text text-transparent">
      What You'll Achieve
    </h2>
    <p className=" fade-up text-xl text-center text-gray-700 max-w-2xl mx-auto mb-16">
      SHIV-AI guides you toward holistic transformation through these key outcomes
    </p>
    <div className="grid  grid-cols-1 md:grid-cols-2 gap-8">
      {/* <!-- Card 1 --> */}
      <div className="fade-up overflow-hidden text-white lg:flex max-sm:flex-col gap-4 bg-[linear-gradient(270deg,#b3d8e6_10%,transparent_70%)] text-black rounded-2xl p-10 shadow-lg hover:-translate-y-2 transition-all duration-300">
        <div className='lg:w-[60vh]  bg-green p-2'>
          <img src="/images/one2.jpg" className='bg-cover rounded-xl h-full w-full' alt="" />
        </div>
       <div>
         <div className='w-10 mb-8  '>
        <svg viewBox="0 0 24 24" fill="none" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 6.00011L14 8.00011L10 10.0001L13 13.0001M12 6.00011C10.2006 3.90309 7.19377 3.25515 4.93923 5.17539C2.68468 7.09563 2.36727 10.3062 4.13778 12.5772C5.60984 14.4655 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9816C11.9483 20.0063 12.0393 20.0063 12.1225 19.9816C12.2178
         19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4655 19.8499 12.5772C21.6204 10.3062 21.3417 7.07543 19.0484 5.17539C16.7551 3.27535 13.7994 3.90309 12 6.00011Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </div>
        <h3 className="fade-up text-2xl text-black font-semibold mb-3">Build a Stronger Body</h3>
        <p className=" text-black fade-up ">
          Personalized fitness routines that adapt to your progress, helping you build
          strength, flexibility, and endurance at your own pace.
        </p>
       </div>
      </div>
     
      <div className="fade-up text-black lg:flex gap-4  bg-[linear-gradient(270deg,#b3d8e6_10%,transparent_70%)] rounded-2xl p-10 shadow-lg hover:-translate-y-2 transition-all duration-300">
         <div className='lg:w-[60vh]  bg-green p-2'>
          <img src="/images/two.jpg" className='bg-cover rounded-xl h-full w-full' alt="" />
        </div>
        <div>
          <div className='w-10 mb-8 '>
            <svg height="" width="" version="1.1" id="Icons"  viewBox="0 0 32 32" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> 
                 <path d="M19.1,11.1c-0.1-0.2-0.3-0.3-0.4-0.3c-0.9,0.2-1.7,0-2-0.5c-0.3-0.5-0.1-1.3,0.6-2c0.1-0.1,0.1-0.4,0-0.5 c-0.9-0.9-2-1.6-3.3-1.9c-0.2-0.1-0.4,0.1-0.5,0.3C13.2,7,12.6,7.6,12,7.6S10.8,7,10.5,6.1c-0.1-0.2-0.3-0.3-0.5-0.3 c-1.3,0.3-2.4,1-3.3,1.9c-0.1,0.1-0.1,0.4,0,0.5c0.6,0.7,0.9,1.5,0.6,2c-0.3,0.5-1.1,0.7-2,0.5c-0.2,0-0.4,0.1-0.4,0.3 c-0.2,0.6-0.3,1.3-0.3,1.9s0.1,1.3,0.3,1.9c0.1,0.2,0.3,0.3,0.4,0.3c0.9-0.2,1.7,0,2,0.5c0.3,0.5,0.1,1.3-0.6,2 c-0.1,0.1-0.1,0.4,0,0.5c0.9,0.9,2,1.6,3.3,1.9c0,0,0.1,0,0.1,0c0.2,0,0.3-0.1,0.4-0.3c0.3-0.9,0.8-1.5,1.5-1.5s1.2,0.6,1.5,1.5 c0.1,0.2,0.3,0.3,0.5,0.3c1.3-0.3,2.4-1,3.3-1.9c0.1-0.1,0.1-0.4,0-0.5c-0.6-0.7-0.9-1.5-0.6-2c0.3-0.5,1.1-0.7,2-0.5 c0.2,0,0.4-0.1,0.4-0.3c0.2-0.6,0.3-1.3,0.3-1.9S19.3,11.7,19.1,11.1z M12.9,13.4c-0.1,0.1-0.1,0.2-0.2,0.3C12.5,13.9,12.3,14,12,14 c-0.1,0-0.3,0-0.4-0.1c-0.1-0.1-0.2-0.1-0.3-0.2c-0.1-0.1-0.2-0.2-0.2-0.3c0-0.1-0.1-0.3-0.1-0.4c0-0.1,0-0.3,0.1-0.4 c0.1-0.1,0.1-0.2,0.2-0.3c0.4-0.4,1-0.4,1.4,0c0.1,0.1,0.2,0.2,0.2,0.3c0,0.1,0.1,0.3,0.1,0.4C13,13.1,13,13.3,12.9,13.4z"></path> <path d="M28.9,17.6L26,11.8C25.9,6.4,21.4,2,16,2c-2.4,0-4.6,0.8-6.4,2.3C10.4,4.1,11.2,4,12,4c5,0,9,4,9,9c0,5-4,9-9,9 c-1.1,0-2.1-0.2-3-0.5V27c0,0.5,0.3,0.9,0.8,1l10,2c0.1,0,0.1,0,0.2,0c0.2,0,0.5-0.1,0.6-0.2c0.2-0.2,0.4-0.5,0.4-0.8v-4h2 c1.7,0,3-1.3,3-3v-3h2c0.3,0,0.7-0.2,0.9-0.5S29,17.9,28.9,17.6z"></path> </g></svg>
        </div>
        <h3 className="fade-up text-2xl font-semibold mb-3">Reduce Stress</h3>
        <p className=" fade-up ">
          Mindfulness practices and breathing techniques derived from Shivohaam's
          philosophy to calm your mind and build resilience against daily stressors.
        </p>
        </div>
      </div>
      {/* <!-- Card 3 --> */}
      <div className="fade-up text-black lg:flex gap-4 bg-[linear-gradient(270deg,#b3d8e6_10%,transparent_70%)] rounded-2xl p-10 shadow-lg hover:-translate-y-2 transition-all duration-300">
         <div className='lg:w-[60vh]  bg-green p-2'>
          <img src="/images/three.jpg" className='bg-cover rounded-xl h-full w-full' alt="" />
        </div>
        <div>
          <div className='w-10 mb-8'>
        <svg fill="#000000" height="" width="" version="1.2" baseProfile="tiny" id="_x31_" viewBox="0 0 128 128" xml:space="preserve">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier"> <g> <path d="M77.9,21.7c0.1-1.2-0.1-2.3-0.1-2.4c-0.1-0.6-0.7-1-1.4-0.9c-0.6,0.1-1,0.7-0.9,1.4c0,0,0.5,2.6-0.8,3.5 c-0.2,0.1-0.5,0.3-0.7,0.4c-2,1.1-4.1,2.5-3.6,5.5c0.1,0.6,0.6,1,1.1,1c0.1,0,0.1,0,0.2,0c0.6-0.1,1-0.7,0.9-1.3 c-0.2-1.3,0.5-1.9,2.5-3.1c0.2-0.1,0.5-0.3,0.7-0.4c0.5-0.3,0.9-0.7,1.1-1.1c3.3-0.6,5.2,2.2,5.2,2.3c0.2,0.3,0.6,0.5,1,0.5 c0.2,0,0.4-0.1,0.6-0.2c0.5-0.3,0.7-1,0.4-1.7C83.3,23.9,81.1,21.7,77.9,21.7z"></path> <path d="M100.2,24.4c-0.6-1.3-1.4-2.2-2.4-2.7c-0.1-1.3-0.6-2.5-1.7-3.5c-1.1-1.1-2.8-1.9-4.4-1.9c-2-2.3-6.7-3.6-10.6-3.1 c-2-0.9-4.4-0.9-6.2-0.9c-0.2,0-0.4,0-0.6,0H74c-2.1,0-5.6-0.1-7.5,1.7c-1.9-0.7-4.9-0.4-7.3,0.3c-3,0.9-5.1,2.4-5.8,4.1 c-2,0.5-4.4,2.3-5.9,4.3c-1.1,1.7-2.3,4.1-1.2,7.3c-1.1,2.9-0.5,6.1,1.7,8.7c2.3,2.6,5.6,3.7,8.6,2.9c1.7,0.2,2.9,0.1,3.7-0.1 c0.2,1.4,0.7,3.3,2.4,4.8c0.6,1.5,2,2.7,3.6,3.1c1.9,0.5,4,0.2,5.6-0.9c0.6-0.1,1.2-0.1,2-0.2c-0.1,1.1,0,2.3,0.3,3.2 c0.1,0.5,0.5,1.3,1.3,2c0,0,2.6,1.8,2.5,1.5c1.3,0.5,2.8,0.7,4.6,0.7c1.4,0,2.6-0.1,3.7-0.2c0,0.1,2.2-0.3,2.2-0.3 c1-0.2,2-0.6,2.9-1c1.3,0,2.7-0.5,3.7-1.5s1.5-2.3,1.7-3.6c3.2-2.3,4.9-7.2,3.9-12.2C102,33.5,101.8,27.9,100.2,24.4z M93.8,37.4 c-0.7,0-1.4,0-2.3,0.1c-3.6,0.3-5.3,3.9-5.4,4.1c-0.3,0.6,0,1.3,0.6,1.5c0.2,0.1,0.3,0.1,0.5,0.1c0.5,0,0.9-0.2,1-0.7 c0,0,1.2-2.5,3.5-2.8c0.6-0.1,1.3-0.1,2.1-0.1c1.5,0,3.3,0,4.8-0.8c0.1,3.7-1.2,7.1-3.6,8.5c-0.4,0.2-0.6,0.6-0.6,1 c0.1,1-0.3,2-0.9,2.6c-0.6,0.6-1.3,0.9-2.2,0.9c-3.1-1.1-3-3.7-2.9-4c0.1-0.6-0.4-1.2-1-1.3c-0.6-0.1-1.2,0.4-1.3,1 c-0.2,1.2,0.2,3.6,2.4,5.3c-1.4,0.4-3.3,0.6-5.9,0.6c-2.8,0-4.8-0.6-5.7-1.9c-0.7-0.9-0.9-2.2-0.6-3.7c3.5-0.6,4.5,0.9,4.6,1 c0.2,0.3,0.6,0.6,1,0.6c0.2,0,0.4-0.1,0.6-0.2c0.6-0.3,0.7-1,0.5-1.5c-0.1-0.1-2.1-3.4-7.9-2.1c-1.1,0.2-2.3,0.3-3.1,0.4 c-2.5-3-0.7-5.2-0.5-5.4c0.5-0.5,0.4-1.2-0.1-1.7c-0.5-0.5-1.2-0.4-1.7,0c-1.2,1.2-2.6,4.4-0.1,7.9c-0.8,0.3-1.9,0.3-2.7,0.1 c-0.7-0.2-1.8-0.7-2.2-2c-0.1-0.2-0.2-0.4-0.4-0.5c-2.2-1.5-1.9-4.4-1.8-5c0.4-1.1,1.8-3.8,5.4-4.9c1.7-0.5,3-0.2,4.6,0.1 c0.5,0.1,1,0.2,1.5,0.3c0.6,4.2,5.1,5.8,5.3,6c0.1,0.1,0.2,0.1,0.4,0.1c0.5,0,0.9-0.3,1.1-0.7c0.2-0.6-0.1-1.3-0.7-1.4 c-0.1,0-2.9-1-3.6-3.5c3.9-0.1,5.3-3.1,5.5-4.6c0.1-0.6-0.3-1.2-1-1.3c-0.6-0.1-1.2,0.3-1.3,1c-0.1,0.2-0.5,2.6-3.4,2.6 c-1.1,0-2.3-0.2-3.2-0.4c-1.8-0.3-3.6-0.7-5.8-0.1C64.7,33.4,63,35,62,36.4c-0.7-1-1.9-1.8-2.8-2.3c-0.6-0.3-1.3-0.7-1.8-1.1 c-1-1,0.2-3.2,0.2-3.2c0.3-0.5,0.2-1.3-0.4-1.5c-0.7-0.5-1.4-0.3-1.8,0.2c-0.8,1.4-1.8,4.2,0.2,6.2c0.6,0.6,1.4,1.1,2.3,1.5 c1.5,0.9,2.5,1.4,2.5,3c-0.3,0.2-1.1,0.6-3.7,0.3c-0.2,0-0.3,0-0.5,0.1c-2.2,0.6-4.6-0.2-6.4-2.2c-1.8-2-2.2-4.4-1.1-6.6 c0.1-0.3,0.1-0.6,0-0.9c-0.9-2.4-0.1-4.3,0.8-5.6c0.7-1.1,1.9-2,2.7-2.6c0.3,0.2,0.6,0.2,0.9,0.2c3-0.7,5,2.7,5.2,2.9 c0.2,0.4,0.6,0.6,1,0.6c0.2,0,0.4-0.1,0.6-0.2c0.6-0.3,0.7-1,0.5-1.5c-0.1-0.2-1.8-3.1-4.8-4c0.4-1.1,2.1-2.3,4.4-2.9 c3.1-0.9,5.5-0.7,6-0.3c1.9,2.6,0.7,4-0.7,6c-0.3,0.4-0.6,0.7-0.9,1.1c-2.4,3.5-0.6,6.2,0.6,7.1c0.2,0.2,0.5,0.2,0.7,0.2 c0.3,0,0.7-0.2,0.9-0.5c0.4-0.5,0.3-1.2-0.2-1.7c-0.3-0.2-1.8-1.5-0.1-3.9c0.2-0.3,0.5-0.7,0.7-1c1.3-1.8,3.4-4.3,1.2-8 c1.3-0.9,4.4-0.9,5.8-0.9h0.2c0.2,0,0.4,0,0.6,0c1.5,0,4,0,5.4,0.7c0.2,0.1,0.5,0.2,0.8,0.1c3.3-0.6,7.1,0.6,8.6,2 c-0.6,1.3-1.8,4.1-1.1,6.9c0.7,3.2,0.8,4-1.8,5c-0.6,0.2-0.9,0.9-0.7,1.5c0.2,0.5,0.6,0.7,1.1,0.7c0.1,0,0.3,0,0.4-0.1 c1.8-0.6,2.7-1.4,3.2-2.4c0.3,0.1,0.5,0.3,0.6,0.5c0.8,1,0.7,3,0.6,3.6c-0.1,0.6,0.3,1.2,1,1.3c0.1,0,0.1,0,0.2,0 c0.6,0,1-0.4,1.1-1c0.1-0.3,0.5-3.4-1.1-5.5c-0.5-0.7-1.2-1.1-2.1-1.4c-0.1-0.9-0.2-2-0.5-2.9c-0.5-2.1,0.5-4.3,0.9-5.4 c1,0.1,2,0.5,2.7,1.1c0.7,0.7,1,1.7,0.9,2.6c-0.1,0.6,0.3,1.1,0.9,1.3c0.6,0.1,1.2,0.7,1.8,1.8c1.4,2.8,1.7,7.5,0.5,10.3 C97.4,37.3,96,37.4,93.8,37.4z"></path>
         <path d="M69.5,2.2c-22.6,0-43.5,17-47.8,35.7C20.7,42.1,19.6,53,19.6,53L9.3,79.3c-0.2,0.5-0.3,0.9-0.3,1.5c0,2.3,1.8,4,4,4h6.7 v13.9c0,10.8,8.8,19.6,19.6,19.6h7.9v8.3h53.2V91.4c11.7-9.1,19.1-23.4,19.1-39.3C119.4,24.5,97.1,2.2,69.5,2.2z M31.9,63 c-3,0-5.6-2.5-5.6-5.6c0-3,2.5-5.6,5.6-5.6s5.6,2.5,5.6,5.6S35,63,31.9,63z M102.1,80.3c0,0,1.2-14.2-11.4-20.3 c-0.3-0.3-8.3-2.5-11.1-2.7c-0.2-0.1-3.6-0.2-3.5-0.1C38,55.9,38.5,22,38.5,22c7.9-8.4,19-13.6,31.4-13.6 c23.8,0,43.2,19.3,43.2,43.2C113.1,62.5,108.9,72.6,102.1,80.3z"></path> </g> </g></svg>
        </div>
        <h3 className="fade-up text-2xl font-semibold mb-3">Heal Old Habits</h3>
        <p className="fade-up ">
          Break free from patterns that no longer serve you with guided habit
          transformation and personalized behavioral coaching.
        </p>
        </div>
      </div>
     
      <div className="fade-up text-black lg:flex gap-4 bg-[linear-gradient(270deg,#b3d8e6_10%,transparent_70%)] rounded-2xl p-10 shadow-lg hover:-translate-y-2 transition-all duration-300">
        
        <div className='lg:w-[60vh]  bg-green p-2'>
          <img src="/images/four.jpg" className='bg-cover rounded-xl h-full w-full' alt="" />
        </div>
       <div>
         <div className='w-10 mb-8'>
        <svg viewBox="-1 0 22 22" version="1.1"  fill="#0000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>profile_plus [#1337]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="white" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-340.000000, -2159.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M298,2005 C298,2002.794 296.206,2001 294,2001 C291.794,2001 290,2002.794 290,2005 C290,2007.206 291.794,2009 294,2009 C296.206,2009 298,2007.206 298,2005 L298,2005 Z M304,2019 L299,2019 L299,2017 L301.784,2017 C300.958,2013.214 297.785,2011 294,2011 C290.215,2011 287.042,2013.214 286.216,2017 L289,2017 L289,2019 L284,2019 C284,2014.445 286.583,2011.048 290.242,2009.673 C288.876,2008.574 288,2006.89 288,2005 C288,2001.686 290.686,1999 294,1999 C297.314,1999 300,2001.686 300,2005 C300,2006.89 299.124,2008.574 297.758,2009.673 C301.417,2011.048 304,2014.445 304,2019 L304,2019 Z M295,2017 L297,2017 L297,2019 L295,2019 L295,2021 L293,2021 L293,2019 L291,2019 L291,2017 L293,2017 L293,2015 L295,2015 L295,2017 Z" id="profile_plus-[#1337]"> </path> </g> </g> </g> </g></svg>
        </div>
        <h3 className="fade-up text-2xl font-semibold mb-3">Move Closer to Your Best Self</h3>
        <p className="fade-up  ">
          Holistic guidance that integrates physical, mental, and spiritual well-being
          to help you become the person you aspire to be.
        </p>
       </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Benifit
