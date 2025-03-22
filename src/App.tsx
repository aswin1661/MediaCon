import { gsap } from "gsap";
import { Observer } from "gsap/Observer";
import { createSignal } from "solid-js";
import AboutSection from "./components/AboutSection";
import CoreTeam from "./components/CoreTeam";
import HeroSection from "./components/HeroSection";
import Register from "./components/Register";
import QutesSection from "./components/SpeakerScroll";
import SpeakersSection from "./components/SpeakerSection";
import TedxLogo from "./components/TedxLogo";
import { TailwindIndicator } from "./lib/tailwind";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

gsap.registerPlugin(Observer);

const AnimatedSections = () => {
  const [showTedxLogo, setShowTedxLogo] = createSignal(true);

  return (
    <div class="h-screen w-screen bg-black text-white overflow-y-auto overflow-x-hidden">
      
        
          <AboutSection />
          {/* <HeroSection />
          <TailwindIndicator /> 
          <Register />
          <NavBar />
          <QutesSection />*/}
          <SpeakersSection />
          <CoreTeam />
          <Footer />
        
      
    </div>
  );
};

export default AnimatedSections;
