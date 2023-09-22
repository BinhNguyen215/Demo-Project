import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Home = () => {
  const infors = useSelector((state) => state.infors);
  console.log(infors);
  return (
    <div>
      <div> This is Home Page</div>
      <Link to="Events">
        <button>Link to Events</button>
      </Link>
      {infors.map((infor) => {
        return (
          <div key={infor.id}>
            Name: {infor.Name}, Description: {infor.Description}, Start: {infor.StartTime}; End: {infor.EndTime}
          </div>
        );
      })}
    </div>
  );
};
export default Home;