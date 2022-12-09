import React from "react";
import Navbar from "./components/Navbar/Navbar.js";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage.js";
import Login from "./components/Login/Login.js";
import Register from "./components/Register/Register.js";
import Home from "./components/Home/Home.js";
import OfferRide from "./components/OfferRide/OfferRide.js";
import MyRides from "./components/MyRides/MyRidesAll.js";
import MyRidesOngoing from "./components/MyRides/MyRidesOngoing.js";
import MyRidesDone from "./components/MyRides/MyRidesDone.js";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/offer-ride" element={<OfferRide />} />
          <Route path="/myrides" element={<MyRides />} />
          <Route path="/myrides/ongoing-ride" element={<MyRidesOngoing />} />
          <Route path="/myrides/complete-ride" element={<MyRidesDone />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
