import Hero from "./hero/Hero";
import Offcomponent from "./off/Offcomponent";

const LandingPage = () => {
  return (
    <main>
        <Hero />
      <div className="md:mx-10 mx-2">
        <Offcomponent />
      </div>
    </main>
  );
};

export default LandingPage;
