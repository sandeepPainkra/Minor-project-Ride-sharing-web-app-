import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./MyRides.css";
import Ride from "../Ride/Ride.js";
import { Button } from "@material-ui/core";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

const MyRides = () => {
  const [isClick, setIsClick] = useState(false);
  const [allRides, setAllRides] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/rides/api/allrides", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setAllRides(data))
      .catch((err) => console.log(err));
  }, []);

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
  console.log(allRides);
  return (
    <>
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
                All Rides
              </Button>
            </Link>
            <Link to="/myrides/ongoing-ride">
              <Button
                onClick={OnGoingBtnClick}
                variant="outlined"
                color="default"
              >
                My Rides
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
            {allRides.map((ride) => {
              return <Ride ride={ride} />;
            })}
            <Ride />
            {/* <Ride />
            <Ride /> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyRides;
