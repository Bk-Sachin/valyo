import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Subhero from "./components/Subhero";
import DegradationSummary from "./components/DegradationSummary";
import Footer from "./components/Footer";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  });

  return (
    <>
      <main>
        <Header />
        <Hero />
        <DegradationSummary />
        <Subhero />
      </main>
      <Footer />
    </>
  );
}

export default App;
