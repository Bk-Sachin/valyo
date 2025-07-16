import React from "react";

const metrics = [
  {
    icon: (
      <span className="inline-block bg-[#23232a] p-2 rounded-full">
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="8" fill="#6366F1"/><rect x="7" y="8" width="10" height="8" rx="2" fill="#18181B"/><rect x="9" y="6" width="6" height="2" rx="1" fill="#A5B4FC"/></svg>
      </span>
    ),
    label: "Battery Health",
    value: <span>81 <span className="text-base font-normal">%</span></span>,
    sub: null,
  },
  {
    icon: (
      <span className="inline-block bg-[#23232a] p-2 rounded-full">
        <span className="text-xs px-2 py-1 bg-gray-700 rounded text-blue-300 font-semibold">CRU</span>
      </span>
    ),
    label: "CPU Efficiency",
    value: <span>73,100</span>,
    sub: null,
  },
  {
    icon: (
      <span className="inline-block bg-[#23232a] p-2 rounded-full">
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="8" fill="#818CF8"/><rect x="7" y="10" width="10" height="2" rx="1" fill="#18181B"/><rect x="7" y="14" width="10" height="2" rx="1" fill="#18181B"/></svg>
      </span>
    ),
    label: "Storage Endurance",
    value: <span>12 <span className="text-base font-normal">% <span className="text-gray-400 font-normal">Wear</span></span></span>,
    sub: null,
  },
];

const DegradationSummary = () => {
  return (
    <section className="w-full max-w-full px-0 sm:px-4 mx-0 mt-12 overflow-x-auto">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Metrics Cards */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {metrics.map((m, i) => (
            <div
              key={i}
              className="bg-[#101014] rounded-xl p-6 flex flex-col items-center justify-center text-center shadow border border-[#23232a] min-w-[180px]"
            >
              {m.icon}
              <div className="text-gray-400 text-sm mt-4 mb-1 tracking-wide">{m.label}</div>
              <div className="text-2xl font-bold text-white">{m.value}</div>
              {m.sub && <div className="text-xs text-gray-400 mt-1">{m.sub}</div>}
            </div>
          ))}
        </div>
        {/* Value Card */}
        <div className="flex-1 max-w-sm bg-[#101014] rounded-xl p-6 shadow flex flex-col justify-between border border-[#23232a] min-w-[260px]">
          <div>
            <div className="text-gray-400 text-base mb-1 tracking-wide">Your phones estimated value: $310</div>
            <div className="text-3xl font-bold mb-2 text-white"></div>
            <div className="text-gray-400 text-sm mb-2">
              Could ve been <span className="font-semibold text-white">$340</span> if sold 2 months earlier
            </div>
            <div className="text-gray-400 text-sm mb-2">
              Performance dropped by 6 % since last month.
            </div>
          </div>
          <button className="mt-4 bg-[#23232a] text-white py-2 px-4 rounded-lg font-semibold hover:bg-[#23232a]/80 transition">Download Report</button>
        </div>
      </div>
      <div className="mt-8 text-gray-400 text-base tracking-wide">
       
      </div>
    </section>
  );
};

export default DegradationSummary; 