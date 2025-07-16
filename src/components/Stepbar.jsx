import React from "react";
const steps = [
  {
    number: 1,
    subtitle: "Scan your phone with our app",
  },
  {
    number: 2,
    subtitle: " See detailed performance metrics",
  },
  {
    number: 3,
    subtitle: "Get your resale value estimate",
  },
];
const Stepbar = () => {
  return (
    <div className="mt-20 bg-black text-white px-6 py-10">
      <div className="flex items-center justify-center space-x-6 relative">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            {/* Step circle + text */}
            <div className="flex flex-col items-center group">
              <div className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center text-sm font-medium transition duration-300 group-hover:shadow-[0_0_10px_2px_rgba(59,130,246,0.7)] group-hover:border-blue-500">
                {step.number}
              </div>
              <div className="mt-2 text-center text-sm text-gray-300">
                {step.subtitle}
              </div>
            </div>

            {/* Line between steps */}
            {index !== steps.length - 1 && (
              <div className="w-10 h-px bg-gray-600"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Stepbar;
