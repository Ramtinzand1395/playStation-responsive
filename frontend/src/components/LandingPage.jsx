import Recommand from "./for-you/Recommand";
import GameSlider from "./game-slider/GameSlider";
import Hero from "./hero/Hero";
import Offcomponent from "./off/Offcomponent";
import BgSection from "./bg-sec/BgSection";

const LandingPage = () => {
  return (
    <main>
      <Hero />
      <div className="md:mx-10 mx-2">
        <Offcomponent />
        <Recommand />
      </div>
      <GameSlider />
      <div className="md:mx-10 mx-2">
        <Recommand />
      </div>

      <BgSection />
    </main>
  );
};

export default LandingPage;
