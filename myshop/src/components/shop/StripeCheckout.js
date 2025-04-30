// /src/components/shop/StripeCheckout.js
import React from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { Button } from '../ui';

const StripeCheckout = ({ totalAmount }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleStripePayment = async () => {
    if (!stripe || !elements) return;

    const { error, paymentIntent } = await stripe.confirmCardPayment(
      'client_secret_from_backend', // Get this from your backend
      {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      }
    );

    if (error) {
      alert('Payment failed!');
    } else {
      alert('Payment successful!');
    }
  };

  return (
    <div>
      <CardElement />
      <Button onClick={handleStripePayment}>Pay with Card</Button>
    </div>
  );
};

export default StripeCheckout;
