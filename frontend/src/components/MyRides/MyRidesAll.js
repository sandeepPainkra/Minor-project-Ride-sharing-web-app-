import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./MyRides.css";
import Ride from "../Ride/Ride.js";
import { Button } from "@material-ui/core";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

const MyRides = () => {
  const [isClick, setIsClick] = useState(false);

  const AllRideBtnClick = () => {
    console.log("allride btn clicked");
  };
  const OnGoingBtnClick = () => {
    console.log("Ongoing btn clicked");
  };
  const CompleteBtnClicked = () => {
    console.log("complete btn clicked");
    setIsClick(true);
  };

  console.log(isClick);

  return (
    <>
      <Navbar />
      <div className="myRides">
        <div className="container">
          <h2>My Rides</h2>
          <div className="ride_nav">
            <Link to="/myrides">
              <Button
                onClick={AllRideBtnClick}
                variant="outlined"
                color="default"
              >
                All
              </Button>
            </Link>
            <Link to="/myrides/ongoing-ride">
              <Button
                onClick={OnGoingBtnClick}
                variant="outlined"
                color="default"
              >
                Ongoing
              </Button>
            </Link>
            <Link to="/myrides/complete-ride">
              <Button
                onClick={CompleteBtnClicked}
                variant="outlined"
                color="secondary"
              >
                Completed
              </Button>
            </Link>
          </div>
          <div className="rides_container">
            <Ride />
            <Ride />
            <Ride />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyRides;
