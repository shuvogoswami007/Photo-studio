import React, { useEffect, useState } from "react";
import ReviewDetail from "../ReviewDetail/ReviewDetail";
import "./Reviews.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://agile-oasis-19128.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data.slice(0, 6)));
  }, []);

  return (
    <section className="review-container text-center p-5">
      <h1>Some Reviews From Our Clients</h1>
      <div className="d-flex justify-content-center m-5 ">
        <div className="row w-100 pb-5">
          {reviews.map((reviewData) => (
            <ReviewDetail
              key={reviewData._id}
              reviewData={reviewData}
            ></ReviewDetail>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
