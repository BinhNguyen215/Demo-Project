import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Home.css";

const Home = () => {
  const infors = useSelector((state) => state.infors);

  return (
    <div>
      <div className="card">
        <h2 className="card-title">Events Page</h2>  
        <div className="card-content">  This is Home Page</div>
        <Link to="Events">
          <button className="card-button">Link to Home</button>
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
    </div>
  );
};

export default Home;
