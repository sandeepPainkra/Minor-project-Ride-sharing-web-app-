import React, { useEffect, useState } from "react";
import "./OfferRide.css";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const OfferRide = () => {
  const [coordinates, setCoordinates] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
  const user = useSelector((state) => state.User);
  const [origin, setOrigin] = useState();
  const [destination, setDestination] = useState();
  const [passenger, setPassenger] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [charges, setCharges] = useState();
  const [brand, setBrand] = useState();
  const [model, setModel] = useState();
  const [vehiclePic, setVehiclePic] = useState();
  const [vehicleUrl, setVehicleUrl] = useState();
  const [year, setYear] = useState();
  const [registrationNo, setRegistrationNo] = useState();
  const [place1Cordinate, setPlace1Cordinate] = useState([]);
  const [place2Cordinate, setPlace2Cordinate] = useState([]);
  const [placeOptions1, setPlaceOptions1] = useState([]);
  const [placeOptions2, setPlaceOptions2] = useState([]);
  const [correctPlaceName1, setCorrectPlaceName1] = useState("");
  const [correctPlaceName2, setCorrectPlaceName2] = useState("");
  const [routeCoordinates, setRouteCoordinates] = useState([]);

  const place1 = origin;
  const place2 = destination;

  // for destination place optons
  useEffect(() => {
    if (destination) {
      fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${place2}.json?proximity=ip&types=place%2Cpostcode%2Caddress&access_token=pk.eyJ1Ijoic2FuZGVlcDY3OCIsImEiOiJjbGJiejQ1czIxazdlM3BxcDdzbHN1eGN5In0.ZMBlU4n8bZeiZC2ePpc-rA`,
        {
          method: "get",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setPlaceOptions2(data.features);
        })
        .catch((err) => console.log(err));
    }
  }, [destination]);

  // for origin place options
  useEffect(() => {
    if (origin) {
      fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${place1}.json?proximity=ip&types=place%2Cpostcode%2Caddress&access_token=pk.eyJ1Ijoic2FuZGVlcDY3OCIsImEiOiJjbGJiejQ1czIxazdlM3BxcDdzbHN1eGN5In0.ZMBlU4n8bZeiZC2ePpc-rA`,
        {
          method: "get",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setPlaceOptions1(data.features);
        })
        .catch((err) => console.log(err));
    }
  }, [origin]);

  // for coordinates of origin1
  useEffect(() => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${correctPlaceName1}.json?limit=1&types=place%2Cpostcode%2Caddress&access_token=pk.eyJ1Ijoic2FuZGVlcDY3OCIsImEiOiJjbGJiejQ1czIxazdlM3BxcDdzbHN1eGN5In0.ZMBlU4n8bZeiZC2ePpc-rA`,
      {
        method: "get",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setPlace1Cordinate(data.features[0].center);
      })
      .catch((err) => console.log(err));
  }, [correctPlaceName1]);
  // console.log(place1Cordinate[0]);
  // console.log(place2Cordinate[0]);

  // for coordinates of destination
  useEffect(() => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${correctPlaceName2}.json?limit=1&types=place%2Cpostcode%2Caddress&access_token=pk.eyJ1Ijoic2FuZGVlcDY3OCIsImEiOiJjbGJiejQ1czIxazdlM3BxcDdzbHN1eGN5In0.ZMBlU4n8bZeiZC2ePpc-rA`,
      {
        method: "get",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // if any error i will get tomorrow then please remove (?) sign from below
        setPlace2Cordinate(data.features[0]?.center);
      })
      .catch((err) => console.log(err));
  }, [correctPlaceName2]);

  // for distance/Route
  const GetRouteCoordinates = async () => {
    await fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${place1Cordinate[0]}%2C${place1Cordinate[1]}%3B${place2Cordinate[0]}%2C${place2Cordinate[1]}?alternatives=true&geometries=geojson&language=en&overview=simplified&steps=true&access_token=pk.eyJ1Ijoic2FuZGVlcDY3OCIsImEiOiJjbGJiejQ1czIxazdlM3BxcDdzbHN1eGN5In0.ZMBlU4n8bZeiZC2ePpc-rA`,
      {
        method: "get",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setRouteCoordinates(data.routes[0].geometry.coordinates);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    if (place1Cordinate || place2Cordinate) {
      GetRouteCoordinates();
    }
  }, [place1Cordinate, place2Cordinate]);

  const multiPoint =
    routeCoordinates &&
    routeCoordinates.map((point) => [Number(point[0]), Number(point[1])]);

  const geoJson = {
    type: "Feature",
    geometry: { type: "MultiPoint", coordinates: multiPoint },
  };

  // for posting all the offer ride form data into mongoDB Database
  useEffect(() => {
    if (vehicleUrl) {
      const response = fetch("http://localhost:5000/ride/api/offer-ride", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          authorization:
            "Bearer " + JSON.parse(localStorage.getItem("user")).token,
          // authorization: "Bearer " + user.token,
        },
        body: JSON.stringify({
          origin,
          destination,
          pessangerCount: passenger,
          date: date,
          time,
          location: geoJson,
          charges,
          // vehicle
          brand,
          model,
          year,
          registrationNo,
          vehiclePic: vehicleUrl,
        }),
      }).then(async (response) => {
        const data = await response.json();
        if (!data || data.status == "err") {
          alert(data.error);
        } else {
          console.log(data);
          alert(data.message);
          setOrigin("");
          setDestination("");
          setPassenger("");
          setDate("");
          setTime("");

          setCharges(""); // vehicle
          setBrand("");
          setModel("");
          setYear("");
          setRegistrationNo("");
          setVehiclePic("");
        }
      });
    }
  }, [vehicleUrl]);
  // for posting data in mongodb databse
  const PostRide = async () => {
    // Upload an vehicle image into cloudinary
    const data = new FormData();
    data.append("file", vehiclePic);
    data.append("upload_preset", "Ride-sharing(minor-project)");
    data.append("cloud_name", "sandeep678");

    fetch("https://api.cloudinary.com/v1_1/sandeep678/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        if (result) {
          setVehicleUrl(result.url);
        } else {
          console.log("result not found");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="offer_ride">
        <div className="offer_ride_container">
          <h2>Offer a Ride</h2>
          <form>
            <div className="ride_details">
              <div className="place_option">
                <input
                  type="text"
                  name="origin"
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  placeholder="Pickup Location.."
                />
                <div
                  className={
                    !origin || isClicked
                      ? "place_option_container padding display"
                      : "place_option_container padding block"
                  }
                  // className={
                  //   !origin ? "display" : "place_option_container padding block"
                  // }
                >
                  {placeOptions1.map((place) => {
                    return (
                      <Button
                        onClick={(e) => {
                          setCorrectPlaceName1(e.target.innerText);
                          setIsClicked(true);
                        }}
                      >
                        {place.place_name}
                      </Button>
                    );
                  })}
                </div>
              </div>
              <div className="place_option">
                <input
                  type="text"
                  name="destination"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="Destination Location.."
                />
                <div
                  className={
                    !destination || isClicked2
                      ? "place_option_container padding display"
                      : "place_option_container padding block"
                  }
                >
                  {placeOptions2.map((place) => {
                    return (
                      <Button
                        onClick={(e) => {
                          setCorrectPlaceName2(e.target.innerText);
                          setIsClicked2(true);
                        }}
                      >
                        {place.place_name}
                      </Button>
                    );
                  })}
                </div>
              </div>
              <input
                type="text"
                value={passenger}
                name="passenger"
                onChange={(e) => setPassenger(e.target.value)}
                placeholder="No. of Passengers..."
              />
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                name="date"
                id=""
              />
              <input
                type="text"
                value={time}
                name="time"
                onChange={(e) => setTime(e.target.value)}
                placeholder="&#128337;Pickup Time"
              />
              <input
                type="text"
                value={charges}
                onChange={(e) => setCharges(e.target.value)}
                name="charges"
                placeholder="Charges Amount"
              />
            </div>
            <p>Vehicle Details</p>
            <div className="vehicle_details">
              <input
                type="text"
                name="brandName"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                placeholder="Brand Name"
              />
              <input
                type="text"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                name="model"
                placeholder="Model"
              />
              <input
                type="text"
                name="year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                placeholder="year"
              />
              <input
                type="text"
                value={registrationNo}
                onChange={(e) => setRegistrationNo(e.target.value)}
                name="registrationNo"
                placeholder="Registration No. "
              />
              <div className="vehicle_img">
                Vehicle Image:{" "}
                <input
                  onChange={(e) => setVehiclePic(e.target.files[0])}
                  type="file"
                />
              </div>
            </div>

            <Button onClick={PostRide}>Post Ride</Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default OfferRide;
