import React from "react";
import gall7 from "../image/gall7.jpg";
import gall8 from "../image/gall8.jpg";
import gall9 from "../image/gall9.jpg";

const HeroHeader = () => {
  return (
    <>
      <section>
        <div className="bg-transparent text-white py-44">
          <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
            <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
              <h1 className="text-3xl md:text-5xl mb-6 text-gray-500 tracking-loose">
                Iriz Tattoo Studio
              </h1>
              <h2 className="text-2xl md:text-4xl leading-relaxed md:leading-snug mb-2">
                Where Tattoos Come To Life
              </h2>
              <p className="text-sm md:text-base text-gray-50 mb-4">
                Get an Awesome tattoo today, At affordable pricing!!!
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSegsjnRn8IP5JnCe-aRs9h5UamY3pwq13_LD3zqsIJXk8faBg/viewform?usp=sf_link"
                className="bg-transparent hover:bg-gray-300 text-white hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-gray-300 hover:border-transparent"
              >
                Book Consultation
              </a>
            </div>
            <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
              <div className="h-48 flex flex-wrap content-center">
                <div>
                  <img
                    className="inline-block mt-28 hidden xl:block"
                    src="https://user-images.githubusercontent.com/54521023/116969935-c13d5b00-acd4-11eb-82b1-5ad2ff10fb76.png"
                  />
                </div>
                <div>
                  <img
                    className="inline-block mt-24 md:mt-0 p-8 md:p-0"
                    src="https://user-images.githubusercontent.com/54521023/116969931-bedb0100-acd4-11eb-99a9-ff5e0ee9f31f.png"
                  />
                </div>
                <div>
                  <img
                    className="inline-block mt-28 hidden lg:block"
                    src="https://user-images.githubusercontent.com/54521023/116969939-c1d5f180-acd4-11eb-8ad4-9ab9143bdb50.png"
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
