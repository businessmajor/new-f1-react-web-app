// import { useDispatch, useSelector } from "react-redux";
import SpeedItem from "./speed-item";
// import { findAllSpeedsThunk } from "../speeds-thunks";
import React, { useEffect, useState } from "react";
import { findAllSpeeds } from "../speeds-service";

const SpeedList = () => {
  const [speeds, setSpeeds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSpeeds = async () => {
      const speeds = await findAllSpeeds();
      setSpeeds(speeds);
      setLoading(false);
    };
    fetchSpeeds();
  }, []);

  return (
    <>
    <>
    <h4 className="fw-bold text-dark">Trending Speeds</h4>
    </>
    <div style={{ maxHeight: "600px", overflow: "auto" }}>
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
    </div>
    </>
  );
};

export default SpeedList;
