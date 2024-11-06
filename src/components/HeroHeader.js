import React from "react";

import front from "../image/front.png";
import front1 from "../image/front1.png";
import front2 from "../image/front2.png";
const HeroHeader = () => {
  return (
    <>
      <section>
        {/* Reduced py-44 to py-20 for better mobile spacing */}
        <div className="bg-transparent text-white py-20 md:py-44">
          <div className="container mx-auto flex flex-col md:flex-row items-center my-6 md:my-24">
            {/* Added z-10 to ensure button stays clickable */}
            <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8 relative z-10">
              <h1 className="text-3xl md:text-5xl mb-6 text-gray-500 tracking-loose">
                Iriz Tattoo Studio
              </h1>
              <h2 className="text-2xl md:text-4xl leading-relaxed md:leading-snug mb-2">
                Where Tattoos Come To Life
              </h2>
              <p className="text-sm md:text-base text-gray-50 mb-4">
                Get an Awesome tattoo today, At affordable pricing!!!
              </p>
              {/* Added mb-8 for better spacing on mobile */}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSegsjnRn8IP5JnCe-aRs9h5UamY3pwq13_LD3zqsIJXk8faBg/viewform?usp=sf_link"
                className="bg-transparent hover:bg-gray-300 text-white hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-gray-300 hover:border-transparent mb-8 md:mb-0"
              >
                Book Consultation
              </a>
            </div>
            {/* Adjusted spacing for mobile view and added z-0 */}
            <div className="p-8 mt-0 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3 justify-center relative z-0">
              <div className="h-48 flex flex-wrap content-center mx-12">
                <div>
                  <img
                    className="inline-block mt-48 mr-8 hidden xl:block"
                    src={front2}
                    alt="Canvas"
                  />
                </div>
                <div>
                  <img
                    className="inline-block mt-12 md:mt-0 p-4 md:p-0"
                    src={front}
                    alt="Studio"
                  />
                </div>
                <div>
                  <img
                    className="inline-block mt-48 hidden lg:block"
                    src={front1}
                    alt="Tattoo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroHeader;
