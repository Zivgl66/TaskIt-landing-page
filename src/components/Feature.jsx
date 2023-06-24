import React from "react";
import FeatureBox from "./FeatureBox";
import featureImage1 from "../assets/images/feature_1.png";
import featureImage2 from "../assets/images/feature_2.png";
import featureImage3 from "../assets/images/feature_3.png";

const Feature = () => {
  return (
    <div id="features">
      <div className="a-container">
        <FeatureBox
          image={featureImage1}
          title={"Seamless Organization"}
          details={"Effortlessly manage tasks"}
        />
        <FeatureBox
          image={featureImage2}
          title={"Timely Reminders"}
          details={"Stay on top of your schedule"}
        />
        <FeatureBox
          image={featureImage3}
          title={"Customizable Experience"}
          details={"Personalize your productivity"}
        />
      </div>
    </div>
  );
};

export default Feature;
