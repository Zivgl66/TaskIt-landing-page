import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div id="main">
      <Navbar />
      <div className="name">
        <h1>
          <span>Make Tasks</span> Completed them and do it again!
        </h1>
        <p className="details">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur,
          ut.
        </p>
        <a href="https://ufile.io/ms8wcr9e" target="_blank" className="cv-btn">
          Download
        </a>
      </div>
    </div>
  );
};

export default Header;
