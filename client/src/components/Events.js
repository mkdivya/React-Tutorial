import React, { useState } from "react";

const Events = () => {
  const [headingtext, setheadingtext] = useState("Hello");
  const [mouseOver, setIsMouseOver] = useState(false);
  const [message, setMessage] = useState("Press a key!");

  const handleClick = () => {
    setheadingtext("Submitted");
  };

  const handleMouse = () => {
    setIsMouseOver(true);
  };

  const handleOut = () => {
    setIsMouseOver(false);
  };
  const handleKeyDown = (e) => {
    setMessage(`Key pressed: ${e.key}`);
  };

  return (
    <div className="events-container">
      <h1>{headingtext} </h1>
      <input
        className="input-container"
        type="text"
        placeholder="Whats your name?"
      />

      <button
        className="btn"
        onClick={handleClick}
        style={{ backgroundColor: mouseOver ? "black" : "red", color: "white" }}
        onMouseOver={handleMouse}
        onMouseOut={handleOut}
        onKeyDown={handleKeyDown}
      >
        <p>{message}</p>
      </button>
    </div>
  );
};
export default Events;
