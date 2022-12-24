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
  const [input, setInput] = useState({
    name: "",
    email: "",
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
        password: input.password,
      }),
    });

    const data = await response.json();
    if (!data || data.error) {
      alert(data.error);
      console.log(data.error);
    } else {
      dispatch(setUser(data.user));
      console.log(data.user);
      localStorage.setItem("user", JSON.stringify(data.user));
      // alert("You are successfully loged in 💚:)");
      alert(data.message);
      nevigate("/search-ride");
    }
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
              label="Full Name"
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
            {/* <TextField
              required
              value={input.phone}
              name="phone"
              onChange={InputEvent}
              className="textfield"
              id="filled-basic"
              label="Enter Your Phone no."
              variant="filled"
            /> */}
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
    </div>
  );
};

export default Login;
