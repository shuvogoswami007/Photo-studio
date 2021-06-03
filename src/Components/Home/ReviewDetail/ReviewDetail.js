import React from "react";
import ReactStars from "react-rating-stars-component";
import { Card } from "react-bootstrap";

const ReviewDetail = ({ reviewData }) => {
  const { name, image, review } = reviewData;

  const ratingStars = {
    size: 30,
    count: 5,
    isHalf: true,
    value: 4,
    color: "black",
    activeColor: "yellow",
    onChange: (newValue) => {
      console.log(`New value is ${newValue}`);
    },
  };

  return (
    <div className="col-md-4 mb-5">
      <Card style={{ width: "350px", height: "550px" }}>
        <Card.Img
          variant="top"
          src={image}
          style={{ height: "250px" }}
          className="m-auto"
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{review}</Card.Text>
          <h6 style={{ border: "0", backgroundColor: "white" }}>
            Rating: <ReactStars {...ratingStars} />
          </h6>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ReviewDetail;
