import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Profile from "../../component/UserDashBoard/Profile";
import Bookings from "../../component/UserDashBoard/Bookings";
import Messages from "../../component/UserDashBoard/Messages";
import Reviews from "../../component/UserDashBoard/Reviews";
import Community from "../../component/UserDashBoard/Community";
import "./style.css";

export default function UserDashboard() {
  return (
    <>
      <div className="color ">
        <div className="container bg-white py-3  ">
          <Tabs defaultActiveKey="Profile" id="uncontrolled-tab-example">
            <Tab eventKey="Profile" title="Profile">
              <Profile />
            </Tab>
            <Tab eventKey="Bookings" title="Bookings">
              <Bookings />
            </Tab>
            <Tab eventKey="Meassages" title="Meassages">
              <Messages />
            </Tab>
            <Tab eventKey="Reviews" title="Reviews">
              <Reviews />
            </Tab>
            <Tab eventKey="Community" title="Community">
              <Community />
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
}
