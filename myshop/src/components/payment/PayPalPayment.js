// /src/components/payment/PayPalPayment.js
import { PayPalButton } from 'react-paypal-button-v2';

const PayPalPayment = ({ amount }) => {
  const handlePayPalPayment = () => {
    console.log('Processing PayPal payment');
  };

  return (
    <PayPalButton
      amount={amount}
      onSuccess={(details, data) => {
        alert('Payment successful!');
      }}
      onError={(error) => {
        alert('Payment failed!');
      }}
      options={{
        clientId: 'YOUR_PAYPAL_CLIENT_ID', // Replace with your actual PayPal Client ID
      }}
    />
  );
};

export default PayPalPayment;
