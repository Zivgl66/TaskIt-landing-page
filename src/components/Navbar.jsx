import React, { useState, useEffect, useCallback } from "react";
import logo from "../assets/images/appLogo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [y, setY] = useState(window.scrollY);

  //Check if user is scrolling down or up (if down, show the navbar)
  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        setNav(false);
      } else if (y < window.scrollY && window.scrollY >= 50) {
        setNav(true);
      }
      setY(window.scrollY);
    },
    [y]
  );

  // listen for scroll event
  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  return (
    <nav className={nav ? "nav active" : "nav"}>
      <a href="" className="logo">
        <img src={logo} alt="logo" />
        <span className="nav-title">TaskIt</span>
      </a>
      <input type="checkbox" className="menu-btn" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li>
          <a href="#main" className="active">
            Home
          </a>
        </li>
        <li>
          <a href="#features">Features</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#presentation">UI SS</a>
        </li>
        <li>
          <a href="#contact">Download</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
