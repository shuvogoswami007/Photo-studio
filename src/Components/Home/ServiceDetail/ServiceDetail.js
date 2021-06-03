import React from "react";
import { Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./ServiceDetail.css";

const ServiceDetail = ({ service }) => {
  const { name, image, info, price, _id } = service;

  const history = useHistory();
  const handleClick = (id) => {
    const url = `/service/${id}`;
    history.push(url);
  };

  return (
    <div className="col-md-4 mb-5">
      <Card style={{ width: "300px", height: "550px" }}>
        <Card.Img variant="top" src={image} style={{ height: "200px" }} />
        <Card.Body className="animation">
          <Card.Title>{name}</Card.Title>
          <Card.Text>{info}</Card.Text>
          <Card.Text>Starts At ${price}</Card.Text>
          <Button variant="primary" onClick={() => handleClick(_id)}>
            Book Now
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ServiceDetail;
