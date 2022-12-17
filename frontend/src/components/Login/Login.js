import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import parkingimg from "../../assets/parking.png";
import "./Login.css";
import CloseIcon from "@material-ui/icons/Close";
import { IconButton, Snackbar } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { setUser } from "../../Redux/actions/userAction";

const Login = () => {
  const dispatch = useDispatch();
  const nevigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [input, setInput] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const InputEvent = (e) => {
    const { name, value } = e.target;
    setInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const SubmitEvent = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: input.name,
        email: input.email,
        phone: input.phone,
        password: input.password,
      }),
    });

    const data = await response.json();
    if (!data || data.error) {
      console.log(data.error);
    } else {
      setOpen(true);

      dispatch(setUser(data.user));
      console.log(data.user);
      localStorage.setItem("user", JSON.stringify(data.user));
      nevigate("/home");
    }
  };

  // Snakbar Controller starts here

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div className="login">
      <div className="login_left">
        <div>
          <img src={parkingimg} alt="" />
          <h1>
            Welcome Back to <span>RideWithme.</span>
          </h1>
          <p>Sign in to continue to your account.</p>
        </div>
      </div>
      <div className="login_right">
        <div className="login_right_inner">
          <h2>Login to your account</h2>
          <hr />

          <form method="post" onSubmit={SubmitEvent}>
            <TextField
              required
              value={input.name}
              name="name"
              onChange={InputEvent}
              className="textfield"
              id="filled-basic"
              label="Username"
              variant="filled"
            />
            <TextField
              required
              value={input.email}
              name="email"
              onChange={InputEvent}
              className="textfield"
              id="filled-basic"
              label="Enter Email Id"
              variant="filled"
            />
            <TextField
              required
              value={input.phone}
              name="phone"
              onChange={InputEvent}
              className="textfield"
              id="filled-basic"
              label="Enter Your Phone no."
              variant="filled"
            />
            <TextField
              value={input.password}
              name="password"
              required
              type="password"
              onChange={InputEvent}
              className="textfield"
              id="filled-basic"
              label="Enter Password"
              variant="filled"
            />

            <Button type="submit">Login</Button>
            <p>
              Don't have account? <Link to="/signup">Register</Link>
            </p>
          </form>
        </div>
      </div>

      {/* Snakbar starts here */}

      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message="You are successfully Loged in"
        action={
          <React.Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
};

export default Login;
