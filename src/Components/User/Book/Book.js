import React, { useContext, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { UserContext } from "../../../App";
import Payment from "../Payment/Payment";
import SideBar from "../../Dashboard/SideBar/SideBar";

const Book = () => {
  const { errors, register, handleSubmit } = useForm();
  const { id } = useParams();
  const [service, setService] = useState({});
  const [serviceData, setServiceData] = useState(null);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  useEffect(() => {
    fetch(`https://agile-oasis-19128.herokuapp.com/service/${id}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [id]);

  const { name, price } = service;

  const onSubmit = (data) => {
    setServiceData(data);
  };

  const handlePaymentSuccess = (paymentId) => {
    const orderDetails = {
      ...loggedInUser,
      service: service,
      booking: serviceData,
      paymentId,
      orderTime: new Date().toDateString("dd/MM/yyyy"),
    };

    fetch(`https://agile-oasis-19128.herokuapp.com/addOrder`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("Order Placed Successfully");
        }
      });
  };

  return (
    <div className="row w-100">
      <SideBar />
      <div className="col-md-10">
        <div className="row">
          <div
            style={{ display: serviceData ? "none" : "block" }}
            className="col-md-6"
          >
            <Form onSubmit={handleSubmit(onSubmit)}>
              <h3>Service Name: {name}</h3>
              <Form.Group>
                <Form.Label>Client Name</Form.Label>
                <Form.Control
                  name="name"
                  defaultValue={loggedInUser.name}
                  type="text"
                  placeholder="Enter Name"
                  ref={register({ required: true })}
                />
                {errors.name && <p>This field is required</p>}
              </Form.Group>
              <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  name="email"
                  defaultValue={loggedInUser.email}
                  type="email"
                  placeholder="Enter Email"
                  ref={register({ required: true })}
                />
                {errors.email && <p>This field is required</p>}
              </Form.Group>
              <Form.Group>
                <Form.Label>Client Number</Form.Label>
                <Form.Control
                  name="number"
                  type="number"
                  placeholder="Enter Number"
                  ref={register({ required: true })}
                />
                {errors.number && <p>This field is required</p>}
              </Form.Group>
              <div className="d-flex justify-content-center">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </div>
            </Form>
          </div>
          <div
            style={{ display: serviceData ? "block" : "none" }}
            className="col-md-6"
          >
            <h1>Payment Method</h1>
            <h5>Your Service Charge will be ${price}</h5>
            <Payment handlePayment={handlePaymentSuccess} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
