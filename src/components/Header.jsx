import React from "react";
import "boxicons/css/boxicons.min.css";
const Header = () => {
  // toggle mobile menu
  const toggleMobileMenu = () => {
    const mobileMenu = document.getElementById("mobileMenu");

    if (mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.remove("hidden");
    } else {
      mobileMenu.classList.add("hidden");
    }
  };
  return (
    <header className="flex justify-between item-center py-4 px-4 lg:px-20">
      <h1
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="text-4xl md:text-4xl lg:text-5l font-light m-0"
      >
        Valyo
      </h1>

      {/* {Desktop Navigation} */}
      <nav className="hidden md:flex item-center gap-12">
        <a
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
          className="text-base tracking-wider transition-color hover:text-gray-300 z-50"
          href="#"
        >
          Degradation Tracker
        </a>
        <a
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="text-base tracking-wider transition-color hover:text-gray-300 z-50"
          href="#"
        >
          Resale Value
        </a>
        <a
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2000"
          className="text-base tracking-wider transition-color hover:text-gray-300 z-50"
          href="#"
        >
          Privacy
        </a>
      </nav>
      <button className="hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full border-none font-medium transition-all duration-500 hover:bg-white cursor-pointer z-50">
        Get App
      </button>

      {/* {mobile menu button} */}
      <button
        onClick={toggleMobileMenu}
        className="md:hidden text-3xl p-2 z-50"
      >
        <i className="bx bx-menu"></i>
      </button>

      {/* {mobile side bar menu} */}
      <div
        id="mobileMenu"
        className="hidden fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black bg-opacity-70"
      >
        <nav className="flex flex-col gap-6 items-center">
          <a
            className="text-base tracking-wider transition-color hover:text-gray-300 z-50"
            href="#"
          >
            COMPANY
          </a>
          <a
            className="text-base tracking-wider transition-color hover:text-gray-300 z-50"
            href="#"
          >
            Features
          </a>
          <a
            className="text-base tracking-wider transition-color hover:text-gray-300 z-50"
            href="#"
          >
            Resource
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
