import React from "react";
import background from "../assets/mockups/background6.jpg";

const Presentation = () => {
  return (
    <div id="presentation">
      <h2>Start conquering your tasks</h2>
      <p>
        We understand the importance of personalization, which is why TaskIt
        allows you to tailor the app to your unique needs.
      </p>
      <img src={background} className="presentation-image" />
    </div>
  );
};

export default Presentation;
