import React from "react";
import gall1 from "../image/gall1.jpg";
import gall2 from "../image/gall2.JPG";
import gall3 from "../image/gall3.JPG";
import gall4 from "../image/gall4.jpg";
import gall5 from "../image/gall5.jpg";
import gall6 from "../image/gall6.jpg";
import gall7 from "../image/gall7.jpg";
import gall8 from "../image/gall8.jpg";
import gall9 from "../image/gall9.jpg";

const Gallery = () => {
  return (
    <div className="min-h-screen bg-transaparent text-white font-generalSans">
      <h1 className="text-center item-center text-5xl md:text-4xl py-28 font-medium">
        Tattoo Works
      </h1>

      <div className="slides overflow-scroll scrollbar-hide smooth-scroll w-full whitespace-nowrap touch-pan-x before:shrink-0 after:shrink-0 before:w-[36vw] after:w-[36vw] snap-mandatory flex snap-x">
        <div className="slide flex-shrink-0 w-[70vw] h-[calc(70vw*1.5)] sm:w-[40vw] sm:h-[calc(40vw*1.5)] md:w-[25vw] md:h-[calc(25vw*1.5)] overflow-clip relative mx-2 snap-center rounded-3xl">
          <img
            src={gall1}
            alt="pic1"
            className="relative w-full h-full object-cover object-center absolute right-0 animate-parallax [animation-timeline:view(x)]"
          />
        </div>

        <div className="slide flex-shrink-0 w-[70vw] h-[calc(70vw*1.5)] sm:w-[40vw] sm:h-[calc(40vw*1.5)] md:w-[25vw] md:h-[calc(25vw*1.5)] overflow-clip relative mx-2 snap-center rounded-3xl">
          <img
            src={gall2}
            alt="pic2"
            className="block w-full h-full object-cover object-center absolute right-0 animate-parallax [animation-timeline:view(x)]"
          />
        </div>

        <div className="slide flex-shrink-0 w-[70vw] h-[calc(70vw*1.5)] sm:w-[40vw] sm:h-[calc(40vw*1.5)] md:w-[25vw] md:h-[calc(25vw*1.5)] overflow-clip relative mx-2 snap-center rounded-3xl">
          <img
            src={gall3}
            alt="pic3"
            className="block w-full h-full object-cover object-center absolute right-0 animate-parallax [animation-timeline:view(x)]"
          />
        </div>

        <div className="slide flex-shrink-0 w-[70vw] h-[calc(70vw*1.5)] sm:w-[40vw] sm:h-[calc(40vw*1.5)] md:w-[25vw] md:h-[calc(25vw*1.5)] overflow-clip relative mx-2 snap-center rounded-3xl">
          <img
            src={gall4}
            alt="pic4"
            className="block w-full h-full object-cover object-center absolute right-0 animate-parallax [animation-timeline:view(x)]"
          />
        </div>

        <div className="slide flex-shrink-0 w-[70vw] h-[calc(70vw*1.5)] sm:w-[40vw] sm:h-[calc(40vw*1.5)] md:w-[25vw] md:h-[calc(25vw*1.5)] overflow-clip relative mx-2 snap-center rounded-3xl">
          <img
            src={gall5}
            alt="pic5"
            className="block w-full h-full object-cover object-center absolute right-0 animate-parallax [animation-timeline:view(x)]"
          />
        </div>

        <div className="slide flex-shrink-0 w-[70vw] h-[calc(70vw*1.5)] sm:w-[40vw] sm:h-[calc(40vw*1.5)] md:w-[25vw] md:h-[calc(25vw*1.5)] overflow-clip relative mx-2 snap-center rounded-3xl">
          <img
            src={gall6}
            alt="Image6"
            className="block w-full h-full object-cover object-center absolute right-0 animate-parallax [animation-timeline:view(x)]"
          />
        </div>

        <div className="slide flex-shrink-0 w-[70vw] h-[calc(70vw*1.5)] sm:w-[40vw] sm:h-[calc(40vw*1.5)] md:w-[25vw] md:h-[calc(25vw*1.5)] overflow-clip relative mx-2 snap-center rounded-3xl">
          <img
            src={gall7}
            alt="Image7"
            className="block w-full h-full object-cover object-center absolute right-0 animate-parallax [animation-timeline:view(x)]"
          />
        </div>

        <div className="slide flex-shrink-0 w-[70vw] h-[calc(70vw*1.5)] sm:w-[40vw] sm:h-[calc(40vw*1.5)] md:w-[25vw] md:h-[calc(25vw*1.5)] overflow-clip relative mx-2 snap-center rounded-3xl">
          <img
            src={gall8}
            alt="Image8"
            className="block w-full h-full object-cover object-center absolute right-0 animate-parallax [animation-timeline:view(x)]"
          />
        </div>

        <div className="slide flex-shrink-0 w-[70vw] h-[calc(70vw*1.5)] sm:w-[40vw] sm:h-[calc(40vw*1.5)] md:w-[25vw] md:h-[calc(25vw*1.5)] overflow-clip relative mx-2 snap-center rounded-3xl">
          <img
            src={gall9}
            alt="Image9"
            className="block w-full h-full object-cover object-center absolute right-0 animate-parallax [animation-timeline:view(x)]"
          />
        </div>

        <div className="slide flex-shrink-0 w-[70vw] h-[calc(70vw*1.5)] sm:w-[40vw] sm:h-[calc(40vw*1.5)] md:w-[25vw] md:h-[calc(25vw*1.5)] overflow-clip relative mx-2 snap-center rounded-3xl">
          <img
            src="https://images.pexels.com/photos/1722179/pexels-photo-1722179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Image 10"
            className="block w-full h-full object-cover object-center absolute right-0 animate-parallax [animation-timeline:view(x)]"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
