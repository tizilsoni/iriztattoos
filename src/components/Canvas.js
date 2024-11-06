import React from "react";

import canv1 from "../image/canv1.jpg";
import canv2 from "../image/canv2.jpg";
import canv3 from "../image/canv3.jpg";
import canv4 from "../image/canv4.jpg";
import canv5 from "../image/canv5.jpg";
import canv6 from "../image/canv6.jpg";
import canv7 from "../image/canv7.jpg";
import canv8 from "../image/canv8.jpg";
import canv9 from "../image/canv9.jpg";

const Canvas = () => {
  return (
    <div className="carousel h-screen bg-transaparent text-white font-generalSans">
      <h1 className="text-center text-5xl md:text-4xl py-28 font-medium">
        Canvas Works
      </h1>
      <div className="wrapper">
        <img src={canv1} alt="canvas 1" />
        <img src={canv4} alt="canvas 4" />
        <img src={canv5} alt="canvas 5" aria-hidden="true" />
        <img src={canv3} alt="canvas 3" />
        <img src={canv6} alt="canvas 6" aria-hidden="true" />
        <img src={canv2} alt="canvas 2" />
        <img src={canv8} alt="canvas 8" aria-hidden="true" />
        <img src={canv7} alt="canvas 7" aria-hidden="true" />
        <img src={canv1} alt="canvas 10" aria-hidden="true" />
        <img src={canv9} alt="canvas 9" aria-hidden="true" />
        <img src={canv2} alt="canvas 11" aria-hidden="true" />
        <img src={canv3} alt="canvas 12" aria-hidden="true" />
      </div>
    </div>
  );
};

export default Canvas;
