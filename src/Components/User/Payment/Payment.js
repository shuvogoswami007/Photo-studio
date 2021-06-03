import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import PayCard from "../PayCard/PayCard";

const stripePromise = loadStripe(
  "pk_test_51IeJHrGU4VLKwskStXqFayzOKTYTi3budx2i2SJwtbuAmpndLUQWGcLunyIi8RxxAYDRkIeFe22zCt7ftDNJZBXP005s4rOZZg"
);

const Payment = ({ handlePayment }) => {
  return (
    <Elements stripe={stripePromise}>
      <PayCard handlePayment={handlePayment} />
    </Elements>
  );
};

export default Payment;
