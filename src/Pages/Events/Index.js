import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setInformation } from "../../Redux/Actions";
const Events = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [startTime, setStatrtTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const dispatch = useDispatch();
  const infors = useSelector((state) => state.infors);
  console.log(infors);
  const handleSetInfor = () => {
    dispatch(setInformation({ id: Math.random(), Name: name, Description: description, StartTime: startTime, EndTime: endTime }));
  };
  return (
    <div>
      <div>
         This is Events Page
         <br></br>
         <Link to="/">
            <button>Link to Home</button>
         </Link>
      </div>
      <input
        value={name}
        placeholder="Enter event name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        value={description}
        placeholder="Enter description"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <input
        type="time"
        onChange={(e) => {
          setStatrtTime(e.target.value);
        }}
      />
      <input
        type="time"
        onChange={(e) => {
          setEndTime(e.target.value);
        }}

      />
      <button onClick={() => handleSetInfor()}>Submit</button>
    </div>
  );
};
export default Events;