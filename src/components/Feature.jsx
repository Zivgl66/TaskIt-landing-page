import React from "react";
import FeatureBox from "./FeatureBox";
import featureImage1 from "../assets/images/feature_1.png";
import featureImage2 from "../assets/images/feature_2.png";
import featureImage3 from "../assets/images/feature_3.png";

const Feature = () => {
  return (
    <div id="features">
      <div className="a-container">
        <FeatureBox image={featureImage1} title={"Development course"} />
        <FeatureBox image={featureImage2} title={"Development course"} />
        <FeatureBox image={featureImage3} title={"Development course"} />
      </div>
    </div>
  );
};

export default Feature;
