import React, { useState } from "react";
import { RiMenu2Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#service">Work</a>
    </p>
    <p>
      <a href="#about">About</a>
    </p>
    <p>
      <a href="#testimonial">Testimonial</a>
    </p>
  </>
);

//the <> </> is a fragment, it is used to wrap multiple elements without adding an extra node to the DOM
//BEM -> Block Element Modifier

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="PJ__navbar section__padding">
      <div className="PJ__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu2Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}

        {toggleMenu && (
          <div className="PJ__navbar-menu_container scale-up-center">
            <div className="PJ__navbar-menu_container-links">
              <Menu />
            </div>
          </div>
        )}
      </div>
      <div className="PJ__navbar-links">
        <div className="PJ__navbar-links_container">
          <Menu />
        </div>
      </div>
      
    </div>
  );
};

export default Navbar;
