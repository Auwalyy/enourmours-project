import React from "react";
import "./Button.css";

function Button({ title, theme, handleClick }) {
  return (
    <>
      <button className={`button ${theme}`} onClick={handleClick}>
        {title}
      </button>
    </>
  );
}

export default Button;
