import React from "react";
import Spline from "@splinetool/react-spline";
import StatsSvg from "../assets/Stats.svg";
const Subhero = () => {
  return (
    <div className="flex lg:mt-20 flex-col lg:flex-row items-center justify-center gap-x-32 px-8">
      <div>
        <img src={StatsSvg} alt="" />
      </div>
      <div className="max-w-xl z-10 mt-[90%] md:mt-[60%] lg:mt-0">
        {/* {main heading} */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold tracking-wider my-9">
          Value Estimate Declines <br />
          Over Time
        </h2>
        {/* {subheading} */}
        <p className="text-base sm:text-lg tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[30rem]">
          Your phone lost 22% of its balue in 9 months - mainly due to CPU and
          battery degradation. Every hour of use slowly chips away at value.
        </p>
      </div>
    </div>
  );
};

export default Subhero;
