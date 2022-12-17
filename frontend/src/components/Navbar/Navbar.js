import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { Avatar, Button, IconButton, Menu, MenuItem } from "@material-ui/core";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const user = useSelector((state) => state.User);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  console.log(user);
  return (
    <div className="navbar">
      <div className="container nav_inner">
        <div className="nav_left">
          <div className="logo">
            <NavLink to="/">RideWithme.</NavLink>
          </div>
          <NavLink to="/home" className="active_nav">
            home
          </NavLink>
          <NavLink to="/myrides">My Ride</NavLink>
          <NavLink to="/about">about us</NavLink>
          <NavLink to="/blog">Blog </NavLink>
        </div>
        {!user ? (
          <>
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
          </>
        ) : (
          <IconButton onClick={handleClick}>
            <Avatar />
          </IconButton>
        )}
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
