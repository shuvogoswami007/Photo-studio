import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import SideBar from "../../Dashboard/SideBar/SideBar";

const Admin = () => {
  const { errors, register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const adminData = {
      email: data.email,
    };

    const url = `https://agile-oasis-19128.herokuapp.com/addAdmin`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(adminData),
    }).then((res) => console.log(res));
  };
  return (
    <div className="row w-100">
      <SideBar />
      <div className="col-md-10">
        <div className="d-flex justify-content-start p-5">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Label>Email address</Form.Label>
            <div className="d-flex">
              <Form.Control
                name="email"
                type="email"
                placeholder="Enter email"
                className="mr-3"
                style={{ width: "400px" }}
                ref={register({ required: true })}
              />
              {errors.name && <p>This field is required</p>}
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Admin;
