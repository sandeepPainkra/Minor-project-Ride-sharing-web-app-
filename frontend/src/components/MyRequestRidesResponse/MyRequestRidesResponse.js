import React from "react";
import "./MyRequestRidesResponse.css";
import MotorcycleIcon from "@material-ui/icons/Motorcycle";
import Button from "@material-ui/core/Button";
import { Avatar } from "@material-ui/core";

const MyRequestRidesResponse = () => {
  return (
    <div className="MyRequestRidesResponse">
      <h2>Results ( Based on your Post)</h2>
      <div className="MyRequestRidesResponse_container">
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
            <Button variant="contained" color="primary">
              Request for Ride &nbsp; <MotorcycleIcon />
            </Button>
            <Button variant="contained" color="secondary">
              Cancel
            </Button>
          </div>
        </div>
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
            <Button variant="contained" color="primary">
              Request for Ride &nbsp; <MotorcycleIcon />
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

export default MyRequestRidesResponse;
