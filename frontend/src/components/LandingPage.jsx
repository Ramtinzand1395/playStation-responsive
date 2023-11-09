import Hero from "./hero/Hero";
import Offcomponent from "./off/Offcomponent";
import Recommand from "./for-you/Recommand";

const LandingPage = () => {
  return (
    <main>
        <Hero />
      <div className="md:mx-10 mx-2">
        <Offcomponent />
        <Recommand />
      </div>
    </main>
  );
};

export default LandingPage;
