import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import SideBar from "../../Dashboard/SideBar/SideBar";

const SubmitReview = () => {
  const { errors, register, handleSubmit } = useForm();
  const [imageURL, setImageURL] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const onSubmit = (data) => {
    const reviewData = {
      name: data.name,
      review: data.review,
      image: imageURL,
    };

    const url = `https://agile-oasis-19128.herokuapp.com/addReview`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviewData),
    }).then((res) => console.log(res));
  };

  const handleImage = (event) => {
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
        <div className="d-flex justify-content-center m-5">
          <Form onSubmit={handleSubmit(onSubmit)} style={{ width: "500px" }}>
            <Form.Group>
              <Form.Label>Client Name</Form.Label>
              <Form.Control
                name="name"
                type="name"
                placeholder="Enter Your Name"
                ref={register({ required: true })}
              />
              {errors.name && <p>This field is required</p>}
            </Form.Group>
            <Form.Group>
              <Form.File
                id="exampleFormControlFile1"
                label="Client Image"
                onChange={handleImage}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Your Review</Form.Label>
              <Form.Control
                name="review"
                as="textarea"
                rows={3}
                placeholder="Enter Your Review"
                ref={register({ required: true })}
              />
              {errors.review && <p>This field is required</p>}
            </Form.Group>
            <div className="d-flex justify-content-center">
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

export default SubmitReview;
