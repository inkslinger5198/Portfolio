import React from "react";
import "./myworks.css";
import img1 from "../../assets/Works/Funnel Syndicate.png";
import img2 from "../../assets/Works/Progressor media.png";
import img3 from "../../assets/Works/CartWave.png";
const MyWorks = () => {
  return (
    <div className="pj__works section__padding section__margin n" id="service">
      <div className="pj__works-title">
        <h1>My Recent Works</h1>
      </div>
      <div className="pj__works-box">
        <div className="work-content">
          <h1>Funnel Syndicate</h1>
          <p>A versatile landing page, for various devices.</p>
        </div>
        <div className="work-img">
          <img src={img1} alt="Funnel syndicate" />
        </div>
      </div>
      <div className="pj__works-box">
        <div className="work-content">
          <h1>Progressor Media</h1>
          <p>A landing page...write some more shit</p>
        </div>
        <div className="work-img">
          <img src={img2} alt="Progressor media" />
        </div>
      </div>
      <div className="pj__works-box">
        <div className="work-content">
          <h1>CartWave</h1>
          <p>An E-Commerce platform for vendors to showcase their products and users to use them.</p>
        </div>
        <div className="work-img">
          <img src={img3} alt="CartWave" />
        </div>
      </div>
    </div>
  );
};

export default MyWorks;
