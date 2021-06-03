import React from "react";
import "./Features.css";
import FeatureDetail from "../FeatureDetail/FeatureDetail";
import Traditional from "../../Images/Traditional.jpg";
import PhotoJournalistic from "../../Images/PhotoJournalistic.jpg";
import Illustrative from "../../Images/Illustrative.jpg";
import FineArt from "../../Images/FineArt.jpg";

const featureData = [
  {
    id: 1,
    title: "Traditional",
    image: Traditional
  },
  {
    id: 2,
    title: "PhotoJournalistic",
    image: PhotoJournalistic
  },
  {
    id: 3,
    title: "Illustrative",
    image: Illustrative
  },
  {
    id: 4,
    title: "Fine Art",
    image: FineArt
  },
];

const Features = () => {
  return (
    <section className="feature-container p-5">
      <h2 className="text-uppercase fw-bold text-white">
        Sit back while we create the experience of a lifetime
      </h2>
      <h3 className="mt-3 text-white">Our Features</h3>
      <div className="d-flex justify-content-center">
        <div className="row mt-3">
          {featureData.map((feature) => (
            <FeatureDetail key={feature.id} feature={feature}></FeatureDetail>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
