import React from "react";

const UpcomingWebinars = () => {
  return (
    <section id="webinars" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#398B99] fade-up">
          Upcoming <span className="text-black">Webinars</span>
        </h2>
        <p className="mt-4 text-gray-600 fade-up">
          Reserve your spot in our live sessions and start your transformation journey.
        </p>

        {/* Webinars Grid */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {/* Webinar 1 */}
          <div className="fade-up bg-[radial-gradient(circle_at_center,#398B99_10%,transparent_120%)] rounded-2xl shadow-lg p-8 fade-up hover:-translate-y-2 transition">
            <h3 className="text-3xl font-semibold text-white mb-4">Webinar 1</h3>
            <p className="text-white mb-6">
              Learn fitness strategies and diet planning with Shiv-AI.
            </p>
            <a
              href="https://your-payment-link-1.com" // 🔗 Replace with real payment link
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-black py-3 px-6 rounded-xl font-semibold shadow-md hover:bg-gray-100 transition"
            >
              Pay & Register
            </a>
          </div>

          {/* Webinar 2 */}
          <div className="fade-up bg-[radial-gradient(circle_at_center,#398B99_10%,transparent_120%)] rounded-2xl shadow-lg p-8 fade-up hover:-translate-y-2 transition">
            <h3 className="text-3xl font-semibold text-white mb-4">Webinar 2</h3>
            <p className="text-white mb-6">
              Exclusive masterclass on strength training & discipline.
            </p>
            <a
              href="https://your-payment-link-2.com" // 🔗 Replace with real payment link
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-black py-3 px-6 rounded-xl font-semibold shadow-md hover:bg-gray-100 transition"
            >
              Pay & Register
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingWebinars;
