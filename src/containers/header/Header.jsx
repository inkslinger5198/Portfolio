import React from "react";
import "./header.css";
import Me from "../../assets/header logo.svg";

const Header = () => {
  return (
    <div className="PJ__header section__padding " id="home">
      <div className="PJ__header-content" >
        <h1>I’m Pranavi. <br></br> A Web Developer.</h1>
        <p className="header__text">Let’s turn your visions into web wonders together.</p>
        <div className="buttons">
          <button class="buttons__work" type="button"><a href="#service">View My work </a></button>
          <button class="buttons__contact" type="button"><a href="#about">Contact Me</a></button>
          </div>
      </div>
      <div className="PJ__header-image" style={{ marginTop: '20px' }}>
      <img src={Me} alt="header computer" />
      </div>
    </div>
  );
};

export default Header;
