import React from "react";
import "./InfoBox.css";

function InfoBox({ title, subtitle, id }) {
  return (
    <>
      <div className={`info-box ${id}`}>
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
      </div>
    </>
  );
}

export default InfoBox;
