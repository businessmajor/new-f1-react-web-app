import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SpeedItem from "./speed-item";
import { findAllSpeedsThunk } from "../speeds-thunks";

const SpeedList = () => {
  //fix state variable
  //make sure thunks work
  //make sure service works
  //make sure item works 
  let { speeds, loading } = useSelector(state => state.speeds)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findAllSpeedsThunk())
  }, [])

  return (
    <ul className="list-group">
      {loading &&
        <li className="list-group-item">
          Loading...
        </li>
      }
      {
        
        /*speeds.map(speed =>
          <SpeedItem
            key={speed._id} speed={speed} />)*/
      }
      <pre>
        <code>{JSON.stringify(speeds, null, 2)}</code>
      </pre>
    </ul>
  );
};
export default SpeedList;