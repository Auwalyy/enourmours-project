import React from "react";
import "./PersonCard.css";

function PersonCard({ size, name, title, image }) {
  return (
    <>
      <div className={`person-card ${size}`}>
        <div className="hero-img">
          <img src={image} alt="" />
        </div>
        <div className="info">
          <h3>{name}</h3>
          <p>{title}</p>
          <div className="media"></div>
        </div>
      </div>
    </>
  );
}

export default PersonCard;
