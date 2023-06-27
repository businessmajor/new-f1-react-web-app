import React from "react";
import { useSelector } from "react-redux";
import WhatsHappening from "./whats-happening";
import SpeedList from "./speed-list";

function HomeScreen() {
  const { currentUser } = useSelector((state) => state.users);

  return (
    <div>
      <h1 className="text-danger fw-bold" style={{ fontFamily: "Helvetica" }}>Home</h1>

      {currentUser && <WhatsHappening />}

      <SpeedList />
    </div>
  );
}

export default HomeScreen;
