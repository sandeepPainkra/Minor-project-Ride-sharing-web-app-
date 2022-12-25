import React, { useEffect } from "react";
import "./MyProfile.css";
import RoomIcon from "@material-ui/icons/Room";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import SendIcon from "@material-ui/icons/Send";
import { Button, IconButton } from "@material-ui/core";
import { useSelector } from "react-redux";

const MyProfile = () => {
  const user = useSelector((state) => state.User);

  // useEffect(() => {
  //   fetch(
  //     "https://api.mapbox.com/directions/v5/mapbox/driving/81.633683%2C21.237947%3B82.147647%2C22.078563?alternatives=true&geometries=geojson&language=en&overview=simplified&steps=true&access_token=pk.eyJ1Ijoic2FuZGVlcDY3OCIsImEiOiJjbGJiejQ1czIxazdlM3BxcDdzbHN1eGN5In0.ZMBlU4n8bZeiZC2ePpc-rA",
  //     {
  //       method: "get",
  //     }
  //   )
  //     .then((res) => res.json())
  //     .then((data) => console.log(data))
  //     .catch((err) => console.log(err));
  // }, []);
  return (
    <div className="myprofile">
      <div className="profile_container">
        <div className="profile_image">
          <IconButton>
            <img
              src={
                !user
                  ? "https://avatars.githubusercontent.com/u/71575268?v=4"
                  : user?.users?.image
              }
              alt="profile image"
            />
          </IconButton>
        </div>
        <div className="profile_info">
          <h2>{user?.users?.name}</h2>
          <p className="profile_title">Web Developer from India.</p>

          <div className="profile_contact_details">
            <div className="profile_locat profile_inner">
              <div className="profile_locat_1">
                <RoomIcon />
                New Swagat Vihar,Raipur CG.
              </div>
            </div>
            <div className="phone profile_inner">
              <PhoneIcon />
              <div className="phone_no">
                <p>{user?.users?.phone}</p>
              </div>
            </div>
            <div className="email profile_inner">
              <EmailIcon />
              <p>{user?.users?.email}</p>
            </div>
            <div className="profile_nevigateion">
              <Button variant="contained" size="large" color="primary">
                Chat &nbsp; <SendIcon />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
