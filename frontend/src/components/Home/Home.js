import React, { useEffect, useState } from "react";
import "./Home.css";
import mapImage from "../../assets/map.png";
import Navbar from "../Navbar/Navbar.js";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { Link, useNavigate } from "react-router-dom";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import { Button } from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import SearchIcon from "@material-ui/icons/Search";
import PeopleIcon from "@material-ui/icons/People";
import { useSelector } from "react-redux";
import MapDisplay from "../MapDisplay/MapDisplay.js";

const Home = () => {
  const user = useSelector((state) => state.User);
  const nevigate = useNavigate();
  const [input, setInput] = useState({
    pickup: "",
    destination: "",
    date: "",
  });
  const [isClick, setIsClick] = useState(false);

  const InputEvent = (e) => {
    const { name, value } = e.target;
    setInput((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };
  const SearchRideClick = () => {
    setIsClick(true);
  };
  const Back_button_click = () => {
    setIsClick(false);
  };

  const GetResponseRides = async () => {
    const reponse = await fetch(
      "http://localhost:5000/ride/search-ride/request-ride",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization:
            "Bearer " + JSON.parse(localStorage.getItem("user")).token,
        },
        body: JSON.stringify({
          pickup: input.pickup,
          destination: input.destination,
          date: input.date,
        }),
      }
    );
    const data = await reponse.json();
    if (data.status === "ok" || data) {
      alert("You are successful posted your request for a ride!!");
      nevigate("/search-ride/requested-rides-response");
      console.log(data);
    } else {
      alert("Something went wrong!!!");
    }
  };
  return (
    <div className="home">
      <div className="second_nav"></div>
      <div className="home_body">
        <div className="map_container">
          <MapDisplay />
        </div>

        <div className="home_controller ">
          <div
            // className="btn_controller "
            className={!isClick ? "btn_controller show" : "btn_controller hide"}
          >
            {user?.users.user_type ? (
              <Button onClick={SearchRideClick} className="btn search_btn">
                <DriveEtaIcon />
                Search Ride
              </Button>
            ) : (
              <Link to="/offer-ride">
                <Button className="btn offer_btn">
                  <PeopleIcon />
                  Offer Ride
                </Button>
              </Link>
            )}
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
                    onChange={InputEvent}
                    type="text"
                    name="pickup"
                    value={input.pickup}
                    placeholder="ridewithme - Enter your pikup location.."
                  />
                </div>
                <div className="form_controller">
                  <FiberManualRecordIcon fontSize="large" />
                  <input
                    onChange={InputEvent}
                    type="text"
                    name="destination"
                    value={input.destination}
                    placeholder="Enter your Drop location.."
                  />
                </div>
                <div className="form_controller">
                  <input
                    onChange={InputEvent}
                    name="date"
                    value={input.date}
                    type="date"
                  />
                </div>
              </div>
              <Button onClick={GetResponseRides}>
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
