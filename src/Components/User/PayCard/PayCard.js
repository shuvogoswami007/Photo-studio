import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const PayCard = ({ handlePayment }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message);
      setPaymentSuccess(null);
    } else {
      setPaymentSuccess(paymentMethod.id);
      setPaymentError(null);
      handlePayment(paymentMethod.id);
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <CardElement />
        <Button type="submit" disabled={!stripe}>
          Pay
        </Button>
      </Form>
      {paymentError && <p style={{ color: "red" }}>{paymentError}</p>}
      {paymentSuccess && (
        <p style={{ color: "green" }}>Your Payment was Successful</p>
      )}
    </div>
  );
};

export default PayCard;
