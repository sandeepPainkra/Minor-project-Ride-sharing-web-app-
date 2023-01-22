import React from "react";
import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { Avatar, Button, IconButton, Menu, MenuItem } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../Redux/actions/userAction";

const Navbar = () => {
  const nevigate = useNavigate();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const user = useSelector((state) => state.User);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const RemoveUserClick = () => {
    dispatch(removeUser());
    localStorage.clear();
    nevigate("/");
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="navbar">
      <div className="container nav_inner">
        <div className="nav_left">
          <div className="logo">
            <NavLink to="/">RideWithme.</NavLink>
          </div>
          <NavLink to={user ? "/search-ride" : "/"} className="active_nav">
            Search-Ride
          </NavLink>
          {user ? (
            <>
              <NavLink
                to={
                  user.users.user_type == "rider"
                    ? "myrides-request"
                    : "/myrides"
                }
              >
                My Ride
              </NavLink>
              <NavLink to="/profile">My Profile</NavLink>
            </>
          ) : (
            <></>
          )}
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
            <Avatar src={user.users.image} />
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
          <MenuItem onClick={(handleClose, RemoveUserClick)}>Logout</MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
