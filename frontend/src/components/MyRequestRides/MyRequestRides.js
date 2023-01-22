import React, { useEffect, useState } from "react";
import "./MyRequestRides.css";

const MyRequestRides = () => {
  const [myRequestRides, setMyRequestRides] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/ride/search-ride/my-ride", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization:
          "Bearer " + JSON.parse(localStorage.getItem("user")).token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setMyRequestRides(data.myRides);
      });
  }, []);
  return (
    <div className="myRequestRides">
      <h2>My Rides Requests</h2>
      <div className="myReqestRides_container">
        {myRequestRides.map((ride) => {
          return (
            <div className="ride_requester">
              <div className="ride_requester_details">
                <div className="ride_requester_image"></div>
                <p>
                  Pickup Point: <span>{ride.pickup}</span>
                </p>
                <p>
                  Destination Point: <span>{ride.destination} </span>
                </p>
                <p>
                  Timing: <span>{ride.date}</span>
                </p>
                <p>
                  Contact Details: <span>{ride.postedBy.phone} </span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyRequestRides;
