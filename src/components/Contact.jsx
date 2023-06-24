import React from "react";
import { BsGithub } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";

const Contact = () => {
  return (
    <div id="contact">
      <h3>Contact Me</h3>
      <div className="contact-container">
        <button
          className="contact-button"
          onClick={() =>
            window.open("mailto:zivgl66@gmail.com?subject=Hello Ziv&body=Hi!")
          }
        >
          <AiOutlineMail size={"2rem"} />
          Email
        </button>
        <button
          className="contact-button"
          onClick={() => window.open("https://github.com/Zivgl66", "_blank")}
        >
          <BsGithub size={"1.5rem"} />
          GitHub
        </button>

        <button
          className="contact-button"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/ziv-gliser-b0734022b",
              "_blank"
            )
          }
        >
          <AiOutlineLinkedin size={"2rem"} />
          LinkedIn
        </button>
      </div>
    </div>
  );
};

export default Contact;
