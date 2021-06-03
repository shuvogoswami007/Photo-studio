import React from "react";
import { Card } from "react-bootstrap";

const FeatureDetail = ({ feature }) => {
  const { title, image } = feature;

  return (
    <div className="col-md-3">
      <Card style={{ width: "250px" }} className="rounded-3">
        <Card.Img src={image} style={{ height: "200px", margin: "auto" }} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum sit
            tempore quae, minus consequatur voluptatum.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default FeatureDetail;
