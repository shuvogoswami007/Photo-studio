import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import SideBar from "../../Dashboard/SideBar/SideBar";

const AddServices = () => {
  const { errors, register, handleSubmit } = useForm();
  const [imageURL, setImageURL] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const onSubmit = (data) => {
    const itemData = {
      name: data.name,
      price: data.price,
      info: data.info,
      image: imageURL,
    };

    const url = `https://agile-oasis-19128.herokuapp.com/addService`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(itemData),
    }).then((res) => console.log(res));
  };

  const handlePictureUpload = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "a0eb892bcd0f5135368a14dc43c123b7");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
        if (response.data.data.display_url) {
          setDisabled(false);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="row w-100">
      <SideBar />
      <div className="col-md-10">
        <div className="m-5 d-flex justify-content-center">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Service Name</Form.Label>
                <Form.Control
                  name="name"
                  type="text"
                  placeholder="Enter Name"
                  ref={register({ required: true })}
                />
                {errors.name && <p>This field is required</p>}
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Price</Form.Label>
                <Form.Control
                  name="price"
                  type="number"
                  placeholder="Enter Price"
                  ref={register({ required: true })}
                />
                {errors.price && <p>This field is required</p>}
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Service Info</Form.Label>
                <Form.Control
                  name="info"
                  type="text"
                  placeholder="Enter Info"
                  ref={register({ required: true })}
                />
                {errors.info && <p>This field is required</p>}
              </Form.Group>
              <Form.Group as={Col}>
                <Form.File
                  id="exampleFormControlFile1"
                  label="Service Image"
                  onChange={handlePictureUpload}
                />
              </Form.Group>
            </Form.Row>
            <div className="d-flex justify-content-end">
              <Button variant="primary" type="submit" disabled={disabled}>
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddServices;
