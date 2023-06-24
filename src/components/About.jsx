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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          ullam voluptatum et neque nam ea unde dolorum possimus non, voluptas,
          pariatur, sit illum distinctio doloremque eius consequatur dolore rem
          exercitationem?
        </p>
        <button>{props.button}</button>
      </div>
    </div>
  );
};

export default About;
