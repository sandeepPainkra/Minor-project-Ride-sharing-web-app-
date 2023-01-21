import React from "react";
import "./MyRidesRequester.css";
import Button from "@material-ui/core/Button";
import { Avatar } from "@material-ui/core";

const MyRidesRequester = () => {
  const AcceptRideRequest = () => {
    alert("You Accepted Ride Requested!!");
  };
  return (
    <div className="myRidesRequester">
      <div className="myRideRequester_container">
        {/* ride Request list who wants to ride with riders */}

        <div className="ride_requester">
          <div className="ride_requester_details">
            <div className="ride_requester_image"></div>
            <h3>
              <Avatar /> &nbsp; Rahul Singh
            </h3>
            <p>Pickup Point: Santoshi nagar</p>
            <p>Destination Point: Durg, Chhattisgarh india</p>
            <p>Timing: 10:00 am</p>
            <p>Contact Details: 6465475787</p>
          </div>
          <div className="ride_requester_buttons">
            <Button
              onClick={AcceptRideRequest}
              variant="contained"
              color="primary"
            >
              Accept
            </Button>
            <Button variant="contained" color="secondary">
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyRidesRequester;
