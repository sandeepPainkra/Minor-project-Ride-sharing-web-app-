import React from "react";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import "./OfferRide.css";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const OfferRide = () => {
  return (
    <>
      <div className="offer_ride">
        <div className="offer_ride_container">
          <h2>Offer a Ride</h2>
          <form>
            <div className="ride_details">
              <input type="text" placeholder="Pickup Location.." />
              <input type="text" placeholder="Destination Location.." />
              <input type="text" placeholder="No. of Passengers..." />
              <input type="date" name="" id="" />
              <input type="text" placeholder="&#128337;Pickup Time" />
              <input type="text" placeholder="Charges Amount" />
            </div>
            <p>Vehicle Details</p>
            <div className="vehicle_details">
              <input type="text" placeholder="Brand Name" />
              <input type="text" placeholder="Model" />
              <input type="text" placeholder="year" />
              <input type="text" placeholder="Registration No. " />
              <div className="vehicle_img">
                Vehicle Image: <input type="file" />
              </div>
            </div>

            <Button>
              <Link to="/myrides">Post Ride </Link>
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default OfferRide;
