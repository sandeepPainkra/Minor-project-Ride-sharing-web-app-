import React from "react";
import "./MyRequestRides.css";

const MyRequestRides = () => {
  return (
    <div className="myRequestRides">
      <h2>My Rides Requests</h2>
      <div className="myReqestRides_container">
        <div className="ride_requester">
          <div className="ride_requester_details">
            <div className="ride_requester_image"></div>
            <h3>{/* <Avatar /> &nbsp; Rahul Singh */}</h3>
            <p>Pickup Point: Santoshi nagar</p>
            <p>Destination Point: Durg, Chhattisgarh india</p>
            <p>Timing: 10:00 am</p>
            <p>Contact Details: 6465475787</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyRequestRides;
