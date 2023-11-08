import MobileNav from "./mobile/MobileNavbar";
import ScreenNavbar from "./screen/ScreenNavbar";

const Navbar = () => {
  return (
    <>
      <div className="block md:hidden">
        <MobileNav />
      </div>
      <div className="hidden md:block">
        <ScreenNavbar />
      </div>
    </>
  );
};

export default Navbar;
