import React from "react";
import Header from "./components/Header";
import Feature from "./components/Feature";
import About from "./components/About";
import Contact from "./components/Contact";
import Presentation from "./components/Presentation";
import aboutImage from "./assets/images/Frame 19.png";
import aboutImage1 from "./assets/images/download.png";

function App() {
  return (
    <div className="App">
      <Header />
      <Feature />
      <About
        image={aboutImage}
        title={"Change your day, start tasking now!"}
        button={"Get The App"}
      />
      <Presentation />
      {/* <About
        image={aboutImage1}
        title={"Download and get the App now!"}
        button={"Download"}
      /> */}
      <Contact />
    </div>
  );
}

export default App;
