import React from "react";
import "./LandingPage.css";
import bannerImg from "../../assets/car-vector.png";
import video from "../../assets/Banner-video.mp4";
import { Button } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const LandingPage = () => {
  return (
    <div className="landingpage">
      {/* banner starts here */}

      <div className="container banner">
        <div className="banner_text">
          <h2>Sharing ride shows a greater heart</h2>
          <p>
            Your one stop solution to office commute,travel problems .You must
            know that your commute had an effect on your joy .Join our
            Carpooling and Bikepooling app.
          </p>
        </div>

        <div className="banner_right">
          <img src={bannerImg} alt="Banner image" />
        </div>
      </div>

      {/* search section starts */}

      <div className="search_for_ride">
        <h2>Search for your Ride</h2>
        <div className="search_box">
          <Button size="large" variant="contained" color="primary">
            Search Ride <ArrowForwardIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
