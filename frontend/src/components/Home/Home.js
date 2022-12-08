import React from "react";
import "./Home.css";
import mapImage from "../../assets/map.png";
import Navbar from "../Navbar/Navbar.js";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import { Button } from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/People";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="second_nav"></div>
      <div className="home_body">
        <div className="map_container">
          <img src={mapImage} alt="Map image" />
        </div>

        <div className="home_controller">
          <div className="btn_controller">
            <Button className="btn search_btn">
              <DriveEtaIcon />
              Search Ride
            </Button>
            <Button className="btn offer_btn">
              <PeopleIcon />
              Offer Ride
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
