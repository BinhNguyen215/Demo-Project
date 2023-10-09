import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Home.css";
import axios from "axios";
import { useMutation } from "react-query";

const fetchingPosts = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return res.data;
};
const Home = () => {
  const infors = useSelector((state) => state.infors);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const mutation = useMutation((payload) => {
    axios.post("https://jsonplaceholder.typicode.com/posts", payload);
  });

  if (mutation.isLoading) return <div>loading...</div>;

  if (mutation.isError) return <div>{mutation.error.message}</div>;

  if (mutation.isSuccess) return window.alert("Thành công!!");


  return (
    <div>
      <div className="card">
        <h2 className="card-title">Home Page</h2>  
        <div className="card-content">  This is Home Page</div>
        <Link to="Events">
          <button className="card-button">Link to Events</button>
        </Link>
      </div>
      <div className="event-list">
        {infors.map((infor) => (
          <div key={infor.id} className="event-item">
            <div>
              Name: {infor.Name}
            </div>
            <div>
              Description: {infor.Description}
            </div>
            <div>
              Start: {infor.StartTime}
            </div>
            <div>
              End: {infor.EndTime}
            </div>
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          placeholder="Enter title"
        />

        <input
          type="text"
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
          placeholder="Enter body"
        />

        <button
          onClick={() => {
            mutation.mutate({ title, body });
          }}
        >
          submit
        </button>
      </div>
    </div>
  );
};

export default Home;
