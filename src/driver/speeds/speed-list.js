
import { useDispatch, useSelector } from "react-redux";
import SpeedItem from "./speed-item";
import { findAllSpeedsThunk } from "../speeds-thunks";
import { findAllSpeeds } from "../speeds-service";
import React, { useEffect, useState } from "react";

const SpeedList = () => {
  //fix state variable
  //make sure thunks work
  //make sure service works
  //make sure item works 
  const [speeds, setSpeeds, loading] = useState([]);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(findAllSpeedsThunk())
  // }, [])

  useEffect(() => {
    const fetchSpeeds = async () => {
      const speeds = await findAllSpeeds();
      setSpeeds(speeds);
    };
    fetchSpeeds();
  }, []);

  return (
    <ul className="list-group">
      {loading ? (
        <li className="list-group-item">Loading...</li>
      ) : (
        speeds.map((speed) => (
          <SpeedItem
            key={speed._id}
            speed={speed.speed}
            username={speed.username}
            author={speed.author}
            created={speed.created}
          />
        ))
      )}
    </ul>
  );
}

export default SpeedList;