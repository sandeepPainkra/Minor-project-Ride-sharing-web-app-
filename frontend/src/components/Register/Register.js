import React from "react";
import "./Register.css";
import RegisterCarImg from "../../assets/smart-car.png";
import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  TextField,
} from "@material-ui/core";
import { Link } from "react-router-dom";

// color : background: linear-gradient(90deg, #36B1B7 0%, #B65AD0 100%);
const Register = () => {
  return (
    <div className="register">
      <div className="register_left">
        <div>
          <img src={RegisterCarImg} alt="RegisterCarImage" />
          <h1>Welcome Back</h1>
          <p>To stay connected with us please login with your personal info.</p>
          <Link to="/login">
            <Button>Sign In</Button>
          </Link>
        </div>
      </div>
      <div className="register_right">
        <div className="register_right_inner">
          <h2>Let's get started</h2>
          <h3>Create an account</h3>
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
            <TextField
              className="textfield"
              id="filled-basic"
              label="Confirm Password"
              variant="filled"
            />
            <Button>Sign Up</Button>
            <p>
              Allready have account? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
