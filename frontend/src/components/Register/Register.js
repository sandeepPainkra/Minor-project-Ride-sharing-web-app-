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

// color : background: linear-gradient(90deg, #36B1B7 0%, #B65AD0 100%);
const Register = () => {
  return (
    <div className="register">
      <div className="register_left">
        <div>
          <img src={RegisterCarImg} alt="RegisterCarImage" />
          <h1>Welcome Back</h1>
          <p>To stay connected with us please login with your personal info.</p>
          <Button>Sign In</Button>
        </div>
      </div>
      <div className="register_right">
        <div className="register_right_inner">
          <h2>Let's get started</h2>
          <h3>Create an account</h3>dd
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Register;
