import React, { useEffect, useState } from "react";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import "./OfferRide.css";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useSelector } from "react-redux";

const OfferRide = () => {
  const [coordinates, setCoordinates] = useState([]);
  const user = useSelector((state) => state.User);
  const [placeCordinate, setPlaceCordinate] = useState([]);
  const place1 = "Bhilai";
  const place2 = "Raipur,chhattisgarh";
  useEffect(() => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${place1}.json?proximity=ip&types=place%2Cpostcode%2Caddress&access_token=pk.eyJ1Ijoic2FuZGVlcDY3OCIsImEiOiJjbGJiejQ1czIxazdlM3BxcDdzbHN1eGN5In0.ZMBlU4n8bZeiZC2ePpc-rA`,
      {
        method: "get",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // setPlaceCordinate(data.center);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${place2}.json?proximity=ip&types=place%2Cpostcode%2Caddress&access_token=pk.eyJ1Ijoic2FuZGVlcDY3OCIsImEiOiJjbGJiejQ1czIxazdlM3BxcDdzbHN1eGN5In0.ZMBlU4n8bZeiZC2ePpc-rA`,
      {
        method: "get",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch(
      "https://api.mapbox.com/directions/v5/mapbox/driving/81.7396945%2C21.183216%3B81.642358%2C21.216241?alternatives=true&geometries=geojson&language=en&overview=simplified&steps=true&access_token=pk.eyJ1Ijoic2FuZGVlcDY3OCIsImEiOiJjbGJiejQ1czIxazdlM3BxcDdzbHN1eGN5In0.ZMBlU4n8bZeiZC2ePpc-rA",
      {
        method: "get",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setCoordinates(data.routes[0].geometry.coordinates);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(coordinates);

  const multiPoint =
    coordinates &&
    coordinates.map((point) => [Number(point[0]), Number(point[1])]);

  const geoJson = {
    type: "Feature",
    geometry: { type: "MultiPoint", coordinates: multiPoint },
  };
  const PostRide = async () => {
    const response = await fetch("http://localhost:5000/ride/api/offer-ride", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + user.token,
      },
      body: JSON.stringify({
        origin: "Raipur1",
        destination: "Bhilai",
        pessangerCount: 2,
        date: "26/12/2022",
        location: geoJson,
      }),
    });
    const data = await response.json();
    console.log(data);
  };
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

            <Button onClick={PostRide}>
              <Link to="/myrides">Post Ride </Link>
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default OfferRide;
