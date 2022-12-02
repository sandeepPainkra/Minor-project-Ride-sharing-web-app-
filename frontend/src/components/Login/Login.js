import { Button, TextField } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import parkingimg from "../../assets/parking.png";
import "./Login.css";

const Login = () => {
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
          {/* <h3>Create an account</h3> */}
          <hr />

          <form noValidate autoComplete="off">
            <TextField
              className="textfield"
              id="filled-basic"
              label="Username"
              variant="filled"
            />
            <TextField
              className="textfield"
              id="filled-basic"
              label="Enter Email Id"
              variant="filled"
            />
            <TextField
              className="textfield"
              id="filled-basic"
              label="Enter Your Phone no."
              variant="filled"
            />
            <TextField
              className="textfield"
              id="filled-basic"
              label="Enter Password"
              variant="filled"
            />

            <Button>Login</Button>
            <p>
              Don't have account? <Link to="/signup">Register</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
