import React from "react";
import WhatsHappening from "./whats-happening";
import { useSelector } from "react-redux";
// import TuitList from "../tuits/tuits-list";
import SpeedList from "./speed-list";

function HomeScreen() {
  return (
    <div>
      <h1 className="text-danger fw-bold" style={{ fontFamily: "Helvetica" }}>Home</h1>
      {currentUser && (
        <WhatsHappening />)
      }
      <SpeedList/> 
    </div>
  );
}

export default HomeScreen;
