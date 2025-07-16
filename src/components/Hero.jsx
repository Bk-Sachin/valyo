import React from "react";
import Spline from "@splinetool/react-spline";
import Stepbar from "./Stepbar";

const Hero = () => {
  return (
    <main className="flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)]">
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="max-w-xl ml-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-0"
      >
        {/* {main heading} */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold tracking-wider my-9">
          The Longer You Wait, <br /> The Less You'll Get
        </h1>
        {/* {subheading} */}
        <p className="text-base sm:text-lg tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[30rem]">
          Track your phone's true condition. understand how time has degraded
          its performance and use-lower its price
        </p>
        <p className="text-base mt-[20px] sm:text-lg tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[30rem]">
          Estimates based on internal performance only. <br />
          Visual damage is not factored.
        </p>
        {/* {tag box-with gradient border} */}
        <div
          className="relative mt-[20px] w-[95%] sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63]
        shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full"
        >
          <div>
            <a
              className="absolute  inset-[3px] bg-black rounded-full flex items-center justify-center gap-1 "
              href="#"
            >
              Get Started
            </a>
          </div>
        </div>

        <Stepbar />

        {/* {button} */}
        {/* <div className="flex gap-4 mt-12">
          <h3
            className="border border-[#2a2a2a] py-2 sm:py-3 px-8 sm:px-10 rounded-full sm:text-lg text-sm font-semibold tracking-wider 
        transition-all duration-300 hover:bg-[#lalala]"
          >
            Documentation
          </h3>
        </div> */}
      </div>

      {/* {spline 3d} */}
      <Spline
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0"
        data-aos-duration="3000"
        className="absolute lg:top-0 top-[-20%] bottom-0 lg:left-[15%] sm:left-[-2%] h-full"
        scene="https://prod.spline.design/SSl4aUQYRAUIVR57/scene.splinecode"
      />
    </main>
  );
};

export default Hero;
