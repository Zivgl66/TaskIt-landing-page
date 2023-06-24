import React from "react";

const About = (props) => {
  return (
    <div id="about">
      <div className="about-image">
        <img src={props.image} alt="" />
      </div>
      <div className="about-text">
        <h2>{props.title}</h2>
        <p>
          Never miss a deadline again with our built-in reminder feature. TaskIt
          will send you timely notifications, ensuring that you stay on track
          and accomplish your goals efficiently.
        </p>
        <button
          onClick={() => {
            window.open("https://ufile.io/ms8wcr9e", "_blank");
          }}
        >
          {props.button}
        </button>
      </div>
    </div>
  );
};

export default About;
