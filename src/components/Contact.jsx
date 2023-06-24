import React from "react";

const Contact = () => {
  return (
    <div id="contact">
      <h3>Send me an Email</h3>
      <div className="contact-container">
        <button
          className="contact-button"
          onClick={() =>
            window.open("mailto:zivgl66@gmail.com?subject=Hello Ziv&body=Hi!")
          }
        >
          Contact
        </button>
      </div>
    </div>
  );
};

export default Contact;
