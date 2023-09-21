import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Home = () => {
  const infors = useSelector((state) => state.infors);
  return (
    <div>
      <div> This is Home</div>
      <Link to="Events">
        <button>Link to contact</button>
      </Link>
      {infors.map((infor) => {
        return (
          <div key={infor.id}>
            data: {infor.data}, time: {infor.time}
          </div>
        );
      })}
    </div>
  );
};
export default Home;