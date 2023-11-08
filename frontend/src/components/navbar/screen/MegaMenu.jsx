import { useState } from "react";
import styles from "./menuStyle.module.css";
import { navbarLinks } from "./navbarData";

const MegaMenu = () => {
  const [menu1Visible, setMenu1Visible] = useState(false);
  const [menu2Visible, setMenu2Visible] = useState(false);

  const handleConsoleHomeHover = () => {
    setMenu1Visible(true);
    setMenu2Visible(false);
  };

  const handleConsoleJanebiHover = () => {
    setMenu1Visible(false);
    setMenu2Visible(true);
  };

  return (
    <div className={`${styles.megamenu}`}>
      <div className="grid grid-cols-3">
        <ul className="">
          {navbarLinks.map((link) => (
            <li key={link.id} className="pt-5" onMouseEnter={link.hover}>
              {link.title}
            </li>
          ))}
        </ul>
        <div>
          <ul className={`${menu1Visible ? " visible" : "hidden"}`}>
            <li>کنسول 1</li>
            <li>کنسول 21</li>
            <li>کنسول 31</li>
            <li>کنسول 41</li>
            <li>کنسول 1</li>
          </ul>

          <ul className={`${menu2Visible ? "visible" : "hidden"}`}>
            <li>sad 1</li>
            <li>asd 21</li>
            <li>asd 31</li>
            <li>das 41</li>
            <li>asd 51</li>
          </ul>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default MegaMenu;
