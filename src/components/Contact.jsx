import React from "react";

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
          Email
        </button>
        <button
          className="contact-button"
          onClick={() => window.open("https://github.com/Zivgl66", "_blank")}
        >
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
          LinkedIn
        </button>
      </div>
    </div>
  );
};

export default Contact;
