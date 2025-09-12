import React from 'react'
import Form from './GetForm.jsx'
import Footer from './Footer.jsx'

const CTASection = () => {
  return (
    <section id="cta" className="fade-up rounded-md bg-[radial-gradient(circle_at_center,#398B99_10%,transparent_100%)] to-cyan-400 py-2">
  <div className=" fade-up max-w-[1200px] mx-auto flex flex-col items-center text-center justify-center px-6">
    <h2 className="fade-up text-4xl mt-10 md:text-5xl font-bold text-white mb-6">
      Ready to Transform Your Life?
    </h2>
    <p className="fade-up text-lg text-white/90 max-w-2xl mx-auto mb-10">
      Join thousands of people who are building stronger bodies, calmer minds, and happier lives with SHIV-AI.
    </p>
    <Form/>
          
     <Footer/>
  </div>
</section>
  )
}

export default CTASection
