import React from "react";
import "./LandingPage.css";
import bannerImg from "../../assets/car-vector.png";

const LandingPage = () => {
  return (
    <div className="landingpage">
      <div className="container banner">
        <div className="banner_text">
          <h2>Sharing ride shows a greater heart</h2>
          <p>
            Your one stop solution to office commute,travel problems .You must
            know that your commute had an effect on your joy . Join our
            Carpooling and Bikepooling app.
          </p>
        </div>
        <div className="banner_right">
          <img src={bannerImg} alt="Banner image" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
