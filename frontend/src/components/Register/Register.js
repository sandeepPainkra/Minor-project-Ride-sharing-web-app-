import React, { useEffect, useState } from "react";
import "./Register.css";
import RegisterCarImg from "../../assets/smart-car.png";
import { Button, TextField } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const nevigate = useNavigate();
  const [images, setImage] = useState("");
  const [url, setUrl] = useState();
  const [input, setInput] = useState({
    Name: "",
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
  useEffect(() => {
    if (url) {
      fetch("http://localhost:5000/api/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: input.Name,
          email: input.email,
          phone: input.phone,
          image: url,
          password: input.password,
        }),
      }).then(async (response) => {
        const data = await response.json();
        console.log(data);
        if (!data || data.error || data.status == "err") {
          alert(data.error);
        } else {
          alert(data.message);
          nevigate("/login");
        }
        setInput({
          Name: "",
          email: "",
          phone: "",
          image: "",
          password: "",
        });
      });
    }
  }, [url]);
  const SubmitEvent = async (e) => {
    e.preventDefault();

    // Upload an profile image into cloudinary
    const data = new FormData();
    data.append("file", images);
    data.append("upload_preset", "Ride-sharing(minor-project)");
    data.append("cloud_name", "sandeep678");

    fetch("https://api.cloudinary.com/v1_1/sandeep678/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        if (result) {
          setUrl(result.url);
          console.log(result);
        } else {
          console.log("result not found");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

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

          <form method="post" onSubmit={SubmitEvent}>
            <TextField
              required
              value={input.Name}
              name="Name"
              onChange={InputEvent}
              className="textfield"
              id="filled-basic"
              label="Enter Full Name"
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
              required
              value={input.password}
              name="password"
              onChange={InputEvent}
              className="textfield"
              id="filled-basic"
              label="Enter Password"
              variant="filled"
              type="password"
            />
            <div className="file_input">
              Select Profile Image
              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>

            <Button type="submit">Sign Up</Button>
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
