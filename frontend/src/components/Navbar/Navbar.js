import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { Button } from "@material-ui/core";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container nav_inner">
        <div className="nav_left">
          <div className="logo">
            <NavLink to="/">RideWithMe.</NavLink>
          </div>
          <NavLink to="/" className="active_nav">
            home
          </NavLink>
          <NavLink to="/ride">Search Ride</NavLink>
          <NavLink to="/about">about us</NavLink>
          <NavLink to="/blog">Blog </NavLink>
        </div>
        <div className="nav_right">
          <NavLink to="/login" className="register_btn">
            <Button size="large">Login</Button>
          </NavLink>
          <NavLink to="/signup" className="register_btn">
            <Button
              className="signUp"
              size="large"
              variant="contained"
              color="primary"
            >
              sign up
            </Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
