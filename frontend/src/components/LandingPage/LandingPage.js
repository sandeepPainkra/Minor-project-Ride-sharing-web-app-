import React from "react";
import "./LandingPage.css";
import bannerImg from "../../assets/car-vector.png";
import { Button } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import driverImage from "../../assets/driver.svg";
import c_save from "../../assets/carpooling.jpg";
import PeopleIcon from "@material-ui/icons/People";
import MotorcycleIcon from "@material-ui/icons/Motorcycle";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const LandingPage = () => {
  return (
    <div className="landingpage">
      <Navbar />
      {/* banner starts here */}
      <div className="container banner">
        <div className="banner_text">
          <h2>Your pick of rides at low prices</h2>
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
          <Link to="/home">
            <Button size="large" variant="contained" color="primary">
              Search Ride <ArrowForwardIcon />
            </Button>
          </Link>
        </div>
      </div>
      {/* Offer Ride Section  */}
      <div className="container LandingPage_offer_ride">
        <img src={driverImage} alt="" />
        <div className="offer_ride_text">
          <h2>Driving in your car soon?</h2>
          <p>Let's make this your least expensive journey ever.</p>

          <Button>Offer Ride</Button>
        </div>
      </div>
      {/* Carpooling benefits */}
      <div className="container c_save">
        <div className="c_save_text">
          <h2>Carpooling saves you money</h2>
          <p>
            Whether you are car owner/bike owner or Rider <i>RideWithMe.</i> can
            help you save upto 75% on travel
          </p>

          <div className="owners">
            <PeopleIcon fontSize="large" />
            <div className="owners_text">
              <h3>Car / Bike Owner</h3>
              <p>
                Car / Bike Owners can save upto 75% of their fuel and
                maintenance costs.
              </p>
            </div>
          </div>

          <div className="riders">
            <MotorcycleIcon fontSize="large" />
            <div className="owners_text">
              <h3>Riders</h3>
              <p>Riders can save upto 75% of their costs compared to cabs.</p>
            </div>
          </div>
        </div>
        <img src={c_save} alt="" />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
