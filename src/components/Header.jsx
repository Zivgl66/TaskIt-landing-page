import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div id="main">
      <Navbar />
      <div className="name">
        <h1>
          <span>TaskIt</span> The ultimate productivity companion
        </h1>
        <p className="details">
          here to revolutionize the way you manage your to-do lists (Android
          only)
        </p>
        <a href="https://ufile.io/ms8wcr9e" target="_blank" className="cv-btn">
          Download
        </a>
      </div>
    </div>
  );
};

export default Header;
