import React from "react";
import CTA from "./CTA";
import ME from "../../assets/me4.png";
import HeaderSocials from "./HeaderSocials";
import '../../styles/header.css'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5 className="">Hello I'm</h5>
        <h1 className="">Juan Carlos</h1>
        <h5 className="text-light">FullStack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img className="img_me" src={ME} alt="me"></img>
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
