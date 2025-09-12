import { useState } from "react";
import React from 'react'
import useScrollAnimation from "./useScrollAnimation";
const Navbar=()=> {
  const [menuOpen, setMenuOpen] = useState(false);
   useScrollAnimation()

   const handleLinkClick = () => {
    setMenuOpen(false);
  };
  return (
    <header className=" w-full top-0 left-0 right-0  py-4 bg-[#398B99] rounded-md shadow-md z-[1000]">
      <div className=" px-6 md:px-20  flex justify-between items-center text-[#F2F2F2]">
        
        {/* Logo */}
        <div className="fade-up text-[24px] md:text-[28px] font-bold">
          SHIV-AI
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center fade-up">
          <a href="#intro"  className="font-medium hover:text-black  hover:-translate-y-1 transition">About</a>
          <a href="#benefits" className="font-medium hover:text-black hover:-translate-y-1 transition">Benefits</a>
          <a href="#how-it-works" className="font-medium hover:text-black hover:-translate-y-1 transition">How It Works</a>
          <a href="#pricing" className="font-medium hover:text-black hover:-translate-y-1 transition">Pricing</a>
          <a
            href="#cta"
            className="inline-block bg-transparent  hover:text-[#124170] border border-white py-2 px-6 rounded-full font-semibold text-base shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
          >
            Get Started
          </a>
          
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white fade-up"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {!menuOpen ? (
            // Hamburger Icon
            <svg xmlns="http://www.w3.org/2000/svg" 
              className="w-7 h-7" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          ) : (
            // Cross Icon
            <svg xmlns="http://www.w3.org/2000/svg" 
              className="w-7 h-7" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div onClick={handleLinkClick} className="md:hidden  bg-[bg-[#398B99]] px-6 py-4 flex flex-col gap-4 text-white rounded-md shadow-md mt-2 mx-4">
          <a href="#intro"  className="font-medium hover:text-[#F8B259] transition">About</a>
          <a href="#benefits" className="font-medium hover:text-[#F8B259] transition">Benefits</a>
          <a href="#how-it-works" className="font-medium hover:text-[#F8B259] transition">How It Works</a>
          <a href="#pricing" className="font-medium hover:text-[#F8B259] transition">Pricing</a>
          <a
            href="#cta"
            className="inline-block bg-transparent border border-white py-2 px-6 rounded-full font-semibold text-base shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
          >
            Get Started
          </a>
        </div>
      )}
    </header>
  );
}

export default Navbar;