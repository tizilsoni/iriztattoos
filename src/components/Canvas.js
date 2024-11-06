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

const Canvas = () => {
  return (
    <div className="carousel h-screen bg-transaparent text-white font-generalSans">
      <h1 className="text-center text-5xl md:text-4xl py-28 font-medium">
        Canvas Works
      </h1>
      <div className="wrapper">
        <img src={gall1} alt="Woods" />
        <img src={gall2} alt="Beach" />
        <img src={gall3} alt="Hills" />
        <img src={gall4} alt="p5" />
        <img src={gall5} alt="" aria-hidden="true" />
        <img src={gall6} alt="" aria-hidden="true" />
        <img src={gall7} alt="" aria-hidden="true" />
        <img src={gall8} alt="" aria-hidden="true" />
        <img src={gall8} alt="" aria-hidden="true" />
        <img src={gall8} alt="" aria-hidden="true" />
        <img src={gall8} alt="" aria-hidden="true" />
        <img src={gall8} alt="" aria-hidden="true" />
      </div>
    </div>
  );
};

export default Canvas;
