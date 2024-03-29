import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar.js";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage.js";
import Login from "./components/Login/Login.js";
import Register from "./components/Register/Register.js";
import Home from "./components/Home/Home.js";
import OfferRide from "./components/OfferRide/OfferRide.js";
import MyRides from "./components/MyRides/MyRidesAll.js";
import MyRidesOngoing from "./components/MyRides/MyRidesOngoing.js";
import MyRidesDone from "./components/MyRides/MyRidesDone.js";
import MyProfile from "./components/MyProfile/MyProfile.js";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./Redux/actions/userAction.js";
import MyRidesRequester from "./components/MyRideRequester/MyRidesRequester.js";
import MyRequestRides from "./components/MyRequestRides/MyRequestRides.js";
import MyRequestRidesResponse from "./components/MyRequestRidesResponse/MyRequestRidesResponse.js";

const Routing = () => {
  const nevigate = useNavigate();
  const user = useSelector((state) => state.User);
  useEffect(() => {
    if (user) {
      nevigate("/search-ride");
    } else {
      nevigate("/");
    }
  }, [user]);
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/search-ride" element={<Home />} />
        <Route
          path="/search-ride/requested-rides-response"
          element={<MyRequestRidesResponse />}
        />
        <Route path="/offer-ride" element={<OfferRide />} />
        <Route path="/myrides" element={<MyRides />} />
        <Route path="/myrides-request" element={<MyRequestRides />} />
        <Route path="/myrides/requester" element={<MyRidesRequester />} />
        <Route path="/profile" element={<MyProfile />} />
        <Route path="/myrides/ongoing-ride" element={<MyRidesOngoing />} />
        <Route path="/myrides/complete-ride" element={<MyRidesDone />} />
      </Routes>
    </>
  );
};
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch(setUser(user));
    }
  }, []);
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routing />
      </Router>
    </div>
  );
};

export default App;
