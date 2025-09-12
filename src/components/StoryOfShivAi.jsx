import React from 'react'

const StoryOfShivAi = () => {
  return (
    <section id="intro" className="bg-white px-4 py-4 lg:mt-24">
  <div className="fade-up lg:max-w-[1440px]  w-full  lg:px-20 lg:flex lg:flex-row flex flex-col items-start justify-between gap-16">
    <div className='lg:hidden   flex w-full items-end   '>
        <img src="/images/shivom.jpg"
         alt="Meet SHIV-AI"
         className="lg:w-[110vh]  shadow-md h-full rounded-2xl bg-cover shadow-2xl" />
    </div>
    <div className="lg:w-full">
      <h2 className="fade-up text-4xl font-bold mb-6 bg-[#398B99] bg-clip-text text-transparent">
        From CrossFit Pioneer to AI Coach — Meet the Man Behind SHIV-AI
      </h2>
      <p className="fade-up text-lg mb-6 text-gray-700">
      Hi, I’m Shivohaam . Two decades ago, I was just like you – chasing fitness goals and 
looking for the right guidance. My journey took me from being a competitive athlete to a 
Bollywood actor, and eventually to my true passion: helping others transform. In 2009, I 
pioneered CrossFit in India, opening the country’s first CrossFit box and changing the way 
we approach fitness. Over 19 years of coaching experience, I’ve trained everyone from 
busy moms and dads to Bollywood superstars (yes, I’ve helped icons like Amitabh 
Bachchan, Ranbir Kapoor, Aamir Khan, and more get in shape). Through it all, I learned that 
discipline, consistency, and personalized plans are the keys to lasting results.
      </p>
      <p className="fade-up text-lg mb-8 text-gray-700">
        But I also saw the challenges countless people face: confusing advice, lack of support, 
inconsistent motivation, and health issues like PCOS or diabetes making things 
harder. I’ve witnessed people bounce between fad diets and random workouts, only to end 
up frustrated. I knew I had to do something more to reach everyone who needed help – not 
just celebrities or those who could train with me in person. That’s why I created SHIV-AI, my 
digital twin.
      </p>
     
    </div>
    <div className='lg:block hidden  flex w-1/2 items-end   '>
        <img src="/images/shivom.jpg"
         alt="Meet SHIV-AI"
         className="lg:w-[110vh]  shadow-md h-full rounded-2xl bg-cover shadow-2xl" />
    </div>
  </div>
</section>
  )
}

export default StoryOfShivAi
