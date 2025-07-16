import React from "react";

const steps = [
  {
    number: 1,
    title: "Scan",
    subtitle: "your phone with our app",
  },
  {
    number: 2,
    title: "See",
    subtitle: "detailed performance metrics",
  },
  {
    number: 3,
    title: "Get your",
    subtitle: "resale value estimate",
  },
];
Progressstep = () => {
  return (
    <div className="flex items-center justify-between bg-black p-6 text-white">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center relative">
          {/* Circle */}
          <div className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center text-lg font-medium">
            {step.number}
          </div>

          {/* Text */}
          <div className="ml-3">
            <div className="font-semibold">{step.title}</div>
            <div className="text-sm text-gray-400">{step.subtitle}</div>
          </div>

          {/* Line (except after last item) */}
          {index !== steps.length - 1 && (
            <div className="absolute top-5 left-full w-14 h-px bg-gray-600 ml-3"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Progressstep;
