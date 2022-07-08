import React from "react";
//import Logo from "../components/Logo";
import { Logo } from "../components";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
const landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* Info div */}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Man bun distillery stumptown sustainable, lyft pabst ennui bicycle
            rights brooklyn. Occupy microdosing pop-up shabby chic,
            single-origin coffee waistcoat selvage chillwave bitters mumblecore
            cray food truck distillery meditation.
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="main svg" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default landing;
