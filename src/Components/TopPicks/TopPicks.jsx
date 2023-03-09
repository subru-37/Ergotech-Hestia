import React from "react";
import "./TopPicks.css";
import top from "../../Assets/top-picks-img.svg";

const TopPicks = (props) => {
  return (
    <div className="main-container">
      <div className="image-container">
        <div className="image">
          <img alt='' src={top}></img>
        </div>
      </div>
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
    </div>
  );
};

export default TopPicks;
