import React, { useState } from "react";
import "./Home.css";
import mapImage from "../../assets/map.png";
import Navbar from "../Navbar/Navbar.js";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { Link } from "react-router-dom";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import { Button } from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import SearchIcon from "@material-ui/icons/Search";
import PeopleIcon from "@material-ui/icons/People";
import { useSelector } from "react-redux";

const Home = () => {
  const user = useSelector((state) => state.User);
  // const user = useState(false);
  console.log(user, "kk");
  const [isClick, setIsClick] = useState(false);

  const SearchRideClick = () => {
    setIsClick(true);
  };
  const Back_button_click = () => {
    setIsClick(false);
  };
  console.log(isClick);
  return (
    <div className="home">
      <div className="second_nav"></div>
      <div className="home_body">
        <div className="map_container">
          <img src={mapImage} alt="Map image" />
        </div>

        <div className="home_controller ">
          <div
            // className="btn_controller "
            className={!isClick ? "btn_controller show" : "btn_controller hide"}
          >
            <Button onClick={SearchRideClick} className="btn search_btn">
              <DriveEtaIcon />
              Search Ride
            </Button>
            <Link to="/offer-ride">
              <Button className="btn offer_btn">
                <PeopleIcon />
                Offer Ride
              </Button>
            </Link>
          </div>

          {/*  Form section starts here */}

          <div
            className={!isClick ? "form_container hide" : "form_container show"}
          >
            <form>
              <div className="input_container">
                <div className="form_controller">
                  <FiberManualRecordIcon fontSize="large" className="green" />
                  <input
                    type="text"
                    placeholder="ridewithme - Enter your pikup location.."
                  />
                </div>
                <div className="form_controller">
                  <FiberManualRecordIcon fontSize="large" />
                  <input type="text" placeholder="Enter your Drop location.." />
                </div>
                <div className="form_controller">
                  <input type="date" />
                </div>
              </div>
              <Button>
                <SearchIcon style={{ color: "#fff", fontSize: "1.7rem" }} />
                Search
              </Button>
            </form>

            <Button onClick={Back_button_click} className="form_back">
              <ChevronLeftIcon fontSize="large" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
