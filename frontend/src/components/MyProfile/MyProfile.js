import React from "react";
import "./MyProfile.css";
import RoomIcon from "@material-ui/icons/Room";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import SendIcon from "@material-ui/icons/Send";
import { Button, IconButton } from "@material-ui/core";

const MyProfile = () => {
  return (
    <div className="myprofile">
      <div className="profile_container">
        <div className="profile_image">
          <IconButton>
            <img
              src="https://avatars.githubusercontent.com/u/71575268?v=4"
              alt="profile image"
            />
          </IconButton>
        </div>
        <div className="profile_info">
          <h2>Sandeep Painkra</h2>
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
                <p>6263495978</p>
                <p>6269642365</p>
              </div>
            </div>
            <div className="email profile_inner">
              <EmailIcon />
              <p>samdeeppainkra@gmail.com</p>
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
