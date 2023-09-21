import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setInformation } from "../../Redux/Actions";
const Contact = () => {
  const [infor, setInfor] = useState("");
  const [date, setDate] = useState("");
  const dispatch = useDispatch();
  const infors = useSelector((state) => state.infors);
  console.log(infors);
    dispatch(setInformation({ id: Math.random(), data: infor, time: date }));
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
        value={infor}
        placeholder="Enter event name"
        onChange={(event) => {
          setInfor(event.target.value);
        }}
      />
      <input
        value={infor}
        placeholder="Enter description"
        onChange={(event) => {
          setInfor(event.target.value);
        }}
      />
      <input
        type="time"
        onChange={(e) => {
          setDate(e.target.value);
        }}
      />
      <input
        type="time"
        onChange={(e) => {
          setDate(e.target.value);
        }}
      />
    </div>
  );
};
export default Contact;