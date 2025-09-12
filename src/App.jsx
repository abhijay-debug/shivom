import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Intro from './components/Intro'
import Benifit from './components/Benifit'
import HowItWorks from './components/HowItWorks'
import Differentiator from './components/Differentiator'
import TestimonialsSection from './components/TestimonialsSection'
import CTASection from './components/CTASection'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import StoryOfShivAi from './components/StoryOfShivAi'
import UpcomingWebinars from './components/UpcomingWebinars'

const App = () => {
  return (
    <div className=' p-4 h-screen w-full overflow-x-hidden scroll-smooth '>
     <Navbar/>
     <Hero/>
     <StoryOfShivAi/>
     <Intro/>
     <Benifit/>
     <HowItWorks/>
     <Differentiator/>
     <Pricing/>
     <TestimonialsSection/>
     <UpcomingWebinars/>
     <CTASection/>
      </div>
  )
}

export default App
