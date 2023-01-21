import {
  Badge,
  Button,
  Card,
  CardContent,
  IconButton,
  Typography,
} from "@material-ui/core";
import React from "react";
import "./Ride.css";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import RoomIcon from "@material-ui/icons/Room";
import PinDropIcon from "@material-ui/icons/PinDrop";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useNavigate } from "react-router-dom";

const Ride = () => {
  const nevigation = useNavigate();

  const GotoRequesterList = () => {
    nevigation("/myrides/requester");
  };
  return (
    <Card className="ride">
      <CardContent className="ride_container">
        <div className="ride_left">
          <div className="ride_vehicle">
            <p>
              <DriveEtaIcon />
              Brand : <span>Suzuki</span>
            </p>
            <p>
              Model: <span>Swift</span>
            </p>
          </div>
          <div className="date_charge">
            <p>08 Dec,2022</p>
            <p>
              <span>&#8377;</span> 100
            </p>
          </div>

          <div className="ride_location">
            <p>
              <RoomIcon />
              <span>Santoshi Nagar,Raipur 492001 Chhattisgarh.</span>
            </p>
            <p>
              <PinDropIcon className="drop_icon" />
              <span>Bhilai Steel Plant , Bhilai, Chhattisgarh.</span>
            </p>
          </div>
        </div>
        <div className="ride_right">
          <IconButton className="bell_icon">
            <Badge title="Request" badgeContent={4} color="primary">
              <NotificationsIcon onClick={GotoRequesterList} />
            </Badge>
          </IconButton>
          <Button variant="contained" color="secondary">
            cancel
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Ride;
