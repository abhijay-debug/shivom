import React from 'react'

const Footer = () => {
  return (
   <footer className="w-full bg-[#398B99] text-white p-6">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-6">
    {/* Left Logo */}
    <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-cyan-400 bg-clip-text text-transp">
      SHIV-AI
    </div>

    {/* Navigation */}
    <nav className="flex  items-center lg:text-md text-sm gap-4 text-center">
      <a
        href="#intro"
        className="font-medium hover:text-black hover:-translate-y-1 transition"
      >
        About
      </a>
      <a
        href="#benefits"
        className="font-medium hover:text-black hover:-translate-y-1 transition"
      >
        Benefits
      </a>
      <a
        href="#how-it-works"
        className="font-medium hover:text-black hover:-translate-y-1 transition"
      >
        How It Works
      </a>
      <a
        href="#pricing"
        className="font-medium hover:text-black hover:-translate-y-1 transition"
      >
        Pricing
      </a>
      {/* <a href="https://wa.me/917224009926?text=hi">
        <div className="h-10 w-10 hover:-translate-y-1 transition">
         
          <svg
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16 31C23.732 31 30 24.732 30 17C30 9.26801 23.732 3 16 3C8.26801 3 2 9.26801 2 17C2 19.5109 2.661 21.8674 3.81847 23.905L2 31L9.31486 29.3038C11.3014 30.3854 13.5789 31 16 31ZM16 28.8462C22.5425 28.8462 27.8462 23.5425 27.8462 17C27.8462 10.4576 22.5425 5.15385 16 5.15385C9.45755 5.15385 4.15385 10.4576 4.15385 17C4.15385 19.5261 4.9445 21.8675 6.29184 23.7902L5.23077 27.7692L9.27993 26.7569C11.1894 28.0746 13.5046 28.8462 16 28.8462Z"
              fill="#BFC8D0"
            />
            <path
              d="M28 16C28 22.6274 22.6274 28 16 28C13.4722 28 11.1269 27.2184 9.19266 25.8837L5.09091 26.9091L6.16576 22.8784C4.80092 20.9307 4 18.5589 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16Z"
              fill="url(#paint0_linear)"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="26.5"
                y1="7"
                x2="4"
                y2="28"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#5BD066"></stop>
                <stop offset="1" stopColor="#27B43E"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </a> */}
    </nav>

    {/* Copyright */}
    <h2 className="text-sm text-center lg:text-right">
      Copyright © SHIV-AI
    </h2>
  </div>
</footer>

  )
}

export default Footer
