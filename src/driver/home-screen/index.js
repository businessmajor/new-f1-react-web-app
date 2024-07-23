import React from "react";
// import { useSelector } from "react-redux";
// import SpeedList from "./speed-list";

function HomeScreen() {
  // const { currentUser } = useSelector((state) => state.users);
  return (
    <div>
      <h1 className="text-danger fw-bold" style={{ fontFamily: "Helvetica" }}>Home</h1>
      <h4>Welcome to Driver!</h4>
      <p>Driver is a motorsports-themed social media platform built for a 2023 university project. Here, there used to be a list of 'speeds' that users of the site would post, limited to 180 characters.
        I have disabled this functionality as I rebuild the website infrastructure. The Ergast API is also being shut down, so I intend to move to OpenF1. In the meantime, take some time to visit the 'Explore' page using the navbar on the left.</p>
      <p>
        Currently, the site supports viewing driver and constructor standings for the 2024 Formula 1 season in the 'Standings' tab. Drivers allows you to look up any current and prior drivers with their nationality and a link to their Wiki. Drivers have a little profile when you click on them with some small stats. And yes, you'll still references to AlphaTauri and Alfa Romeo in place of more up-to-date team branding. I'm working on it. ;) </p>
      <p>
        Thank you for stopping by and enjoy the site!
      </p>
      <p>Best, <br />Stephano</p>
      {/* {currentUser && (
        <WhatsHappening />)
      }
      <SpeedList/>  */}
    </div>
  );
}

export default HomeScreen;
