import React from 'react'
import { RiGuideLine } from "react-icons/ri";
const Differentiator = () => {
  return (
    <section id="differentiator" className="bg-gray-50 py-6">
  <div className="max-w-[1440px] mx-auto px-6 md:px-20">
    <h2 className="fade-up text-3xl lg:text-5xl font-bold text-center p-2 mb-6 bg-[#398B99] bg-clip-text text-transparent">
      Why SHIV-AI? – Solving Your Pain Points
    </h2>
    <p className="fade-up text-xl text-center text-gray-700 max-w-3xl mx-auto mb-16">
      Unlike generic fitness apps, SHIV-AI is built on Shivohaam's authentic philosophy of
      fitness + mindfulness, combining ancient wisdom with modern AI technology.
    </p>
    <div className="flex flex-col  lg:flex lg:px-[40vh] items-center justify-center  gap-8">
      {/* <!-- Card 1 --> */}
      <div className="fade-up text-white bg-[linear-gradient(90deg,#398B99_10%,transparent_150%)]  rounded-2xl p-10 shadow-lg hover:-translate-y-2 transition-all duration-300">
        <i className="fade-up ri-magic-line text-5xl mb-4 bg-gradient-to-r from-indigo-600 to-cyan-400 bg-clip-text text-transparent"></i>
        <div className='flex items-center gap-3 mb-3'>
          <div className='fade-up'>
            <RiGuideLine className='text-3xl font-bold' />
           </div>
        <h3 className="fade-up text-2xl font-semibold mb-3">Lack of  guidance</h3>
        </div>
        <p className="fade-up ">
                  Lack of guidance is frustrating. SHIV-AI ends the confusion with a clear, 
        customized plan that’s based on your body and goals. No generic templates – your 
        program is as unique as you are, whether you need to control blood sugar for 
        diabetes or shed fat post-pregnancy.
        </p>
      </div>
      {/* <!-- Card 2 --> */}
      <div className=" fade-up text-white bg-[linear-gradient(90deg,#398B99_10%,transparent_150%)] rounded-2xl p-10 shadow-lg hover:-translate-y-2 transition-all duration-300">
        <i className="fade-up ri-brain-line text-5xl mb-4 bg-gradient-to-r from-indigo-600 to-cyan-400 bg-clip-text text-transparent"></i>
        <div className='flex items-center gap-3 mb-3'>
          <div className='fade-up w-10 h-10'>
            <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10.5 7.5V6C10.5 5.17157 11.1716 4.5 12 4.5C12.8284 4.5 13.5 5.17157 13.5 6C13.5 6.82843 12.8284 7.5 12 7.5H10.5ZM10.5 
            7.5H7.5M10.5 7.5V2C10.5 1.17157 9.82843 0.5 9 0.5C8.17157 0.5 7.5 1.17157 7.5 2V7.5M7.5 7.5V4.5M7.5 7.5H2C1.17157 7.5 0.5 6.82843 0.5 6C0.5 5.17157 1.17157 4.5 2 4.5H7.5M7.5 7.5H13C13.8284 7.5 14.5 8.17157 14.5 9C14.5 9.82843 13.8284 10.5 13 10.5H7.5M7.5 7.5V10.5M7.5 7.5H4.5M7.5 7.5V13C7.5 13.8284 6.82843 14.5 6 14.5C5.17157 14.5 4.5 13.8284 4.5 13V7.5M7.5 4.5V3C7.5 2.17157 6.82843 1.5 6 1.5C5.17157 1.5 4.5 2.17157 4.5 3C4.5 3.82843 5.17157 4.5 6 4.5H7.5ZM7.5 10.5H9C9.82843 10.5 10.5 11.1716 10.5 12C10.5 12.8284 9.82843 13.5 9 13.5C8.17157 13.5 7.5 12.8284 7.5 12V10.5ZM4.5 7.5V9C4.5 9.82843 3.82843 10.5 3 10.5C2.17157 10.5 1.5 9.82843 1.5 9C1.5 8.17157 2.17157 7.5 3 7.5H4.5Z" stroke="#ffff"></path> </g></svg>
          </div>
        <h3 className="text-2xl font-semibold mb-3">Lack of motivation</h3>
        </div>
        
        <p className="fade-up">
                    It’s hard to push yourself without support – motivation comes and goes. That’s why 
          SHIV-AI provides daily accountability and encouragement. From reminding you to 
          get that workout done, to adjusting your plan when you slip up, SHIV-AI keeps you on 
          track. Think of it as both a coach and a cheerleader, making sure you show up for 
          yourself even on tough days. 
        </p>
      </div>
      {/* <!-- Card 3 --> */}
      <div className="fade-up text-white bg-[linear-gradient(90deg,#398B99_10%,transparent_150%)]  rounded-2xl p-10 shadow-lg hover:-translate-y-2 transition-all duration-300">
        <i className="fade-up ri-whatsapp-line text-5xl mb-4 bg-gradient-to-r from-indigo-600 to-cyan-400 bg-clip-text text-transparent"></i>
        <div className='flex items-center gap-3 mb-3'>
        <div className='fade-up w-14 h-14 lg:w-10 lg:h-10'>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10.0932 10.7463C10.1827 10.6184 10.2571 10.5122 10.3233 10.4213C10.3793 10.5188 10.4418 10.6324 10.517 10.7692L12.2273 13.8788C12.3933 14.1809 12.5562 14.4771 12.7197 14.6921C12.8947 14.9222 13.2023 15.2374 13.6954 15.2467C14.1884 15.2559 14.5077 14.9525 14.6912 14.7292C14.8627 14.5205 15.0365 14.2305 15.2138 13.9349L15.2692 13.8426C15.49 13.4745 15.629 13.2445 15.752 13.0783C15.8654 12.9251 15.9309 12.8752 15.9798 12.8475C16.0286 12.8198 16.1052 12.7894 16.2948 12.771C16.5006 12.751 16.7694 12.7501 17.1986 12.7501H18C18.4142 12.7501 18.75 12.4144 18.75 12.0001C18.75 11.5859 18.4142 11.2501 18 11.2501L17.1662 11.2501C16.7791 11.2501 16.4367 11.2501 16.1497 11.278C15.8385 11.3082 15.5357 11.3752 15.2407 11.5422C14.9457 11.7092 14.7325 11.9345 14.5465 12.1857C14.3749 12.4175 14.1988 12.7111 13.9996 13.0431L13.9521 13.1223C13.8654 13.2668 13.793 13.3872 13.7284 13.4906C13.6676 13.3849 13.5999 13.2618 13.5186 13.1141L11.8092 10.006C11.6551 9.72563 11.5015 9.44629 11.3458 9.2415C11.1756 9.01778 10.8839 8.72197 10.4164 8.69673C9.94887 8.67149 9.62698 8.93417 9.43373 9.13826C9.25683 9.32509 9.0741 9.58628 8.89069 9.84844L8.58131 10.2904C8.35416 10.6149 8.21175 10.8171 8.08848 10.9629C7.975 11.0972 7.91193 11.1411 7.86538 11.1654C7.81882 11.1896 7.74663 11.2161 7.57159 11.2321C7.38144 11.2494 7.13413 11.2501 6.73803 11.2501H6C5.58579 11.2501 5.25 11.5859 5.25 12.0001C5.25 12.4144 5.58579 12.7501 6 12.7501L6.76812 12.7501C7.12509 12.7502 7.44153 12.7502 7.70801 12.7258C7.99707 12.6994 8.27904 12.6411 8.55809 12.4958C8.83714 12.3506 9.04661 12.153 9.234 11.9313C9.40676 11.727 9.58821 11.4677 9.79291 11.1753L10.0932 10.7463Z" 
          fill="#ffff"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M22.75 9.26043C22.75 6.07929 21.2578 3.60642 18.9755 2.65694C16.8461 1.77108 14.2743 2.30955 12 4.43676C9.72568 2.30955 7.15386 1.77113 5.02447 2.65702C2.74218 3.60652 1.25 6.07939 1.25 9.26046C1.25 11.3863 2.37926 13.4794 3.7862 15.2825C5.20736 17.1039 6.99532 18.735 8.48775 19.952L8.62247 20.062C9.82232 21.0418 10.6895 21.75 12 21.75C13.3105 21.75 14.1777 21.0418 15.3775 20.062L15.5123 19.952C17.0047 18.735 18.7926 17.104 20.2138 15.2826C21.6207 13.4794 22.75 11.3863 22.75 9.26043ZM12.5491 6.00969C14.6472 3.75481 16.827 3.38777 18.3994 4.04187C19.9921 4.70447 21.25 6.53048 21.25 9.26043C21.25 10.8822 20.3695 12.6446 19.0312 14.3598C17.7071 16.0569 16.0142 17.6072 14.5643 18.7895C13.1713 19.9255 12.7216 20.25 12 20.25C11.2785 20.25 10.8287 19.9255 9.43571 18.7895C7.98585 17.6072 6.29293 16.0568 4.96881 14.3598C3.63045 12.6445 2.75 10.8821 2.75 9.26046C2.75 6.5306 4.0079 4.70457 5.60065 4.04194C7.17297 3.38781 9.35285 3.75482 11.4509 6.00969C11.5928 6.16218 11.7917 6.2488 12 6.2488C12.2083 6.2488 12.4072 6.16218 12.5491 6.00969Z" fill="#ffff"></path> </g></svg>
        </div>
        <h3 className="fade-up text-2xl font-semibold mb-3">Health conditions make it harder</h3>
        </div>
        <p className="fade-up ">
                      We hear you. When you’re dealing with PCOS, thyroid issues, hypertension, 
            injuries, or other challenges, a one-size plan isn’t enough. SHIV-AI was built with 
            medical and rehab insights – it will modify exercises if you have knee pain, suggest 
            PCOS-friendly diet tweaks, and work in tandem with your doctor’s advice. You’ll 
            improve your health safely, with workouts and meals suited to your needs.
        </p>
      </div>
      <div className='flex justify-center col-span-3 '>
      <div className="fade-up text-white bg-[linear-gradient(90deg,#398B99_10%,transparent_150%)]  rounded-2xl p-10 shadow-lg hover:-translate-y-2 transition-all duration-300">
        <i className="fade-up ri-whatsapp-line text-5xl mb-4 bg-gradient-to-r from-indigo-600 to-cyan-400 bg-clip-text text-transparent"></i>
       
        <div className='flex items-center gap-3 mb-3'>
          <div className='fade-up w-14 h-14 lg:w-10 lg:h-10'>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M13 2L11 3.99545L11.0592 4.05474M11 18.0001L13 19.9108L12.9703 19.9417M11.0592 4.05474L13 6M11.0592 4.05474C11.3677 4.01859 11.6817 4 12 4C16.4183 4 20 7.58172 20 12C20 14.5264 18.8289 16.7793 17 18.2454M7 
            5.75463C5.17107 7.22075 4 9.47362 4 12C4 16.4183 7.58172 20 12 20C12.3284 20 12.6523 19.9802 12.9703 19.9417M11 22.0001L12.9703 19.9417" stroke="#ffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          </div>
        <h3 className="fade-up text-2xl font-semibold mb-3">
          Tried everything, no results
          </h3>
        </div>
        <p className="fade-up ">
                              The truth is, transforming your body takes the right approach and patience. SHIV-AI 
          uses proven methods (the same ones I’ve used to train stars and thousands of 
          clients) to ensure you progress week after week. And if something isn’t working, we 
          find out why and fix it. No more spinning your wheels – every effort you put in is 
          optimized for results you can see and feel.
        </p>
      </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Differentiator
