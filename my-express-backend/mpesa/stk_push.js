const axios = require('axios');

const stkPush = async (paymentDetails) => {
  const headers = {
    'Authorization': `Bearer ${paymentDetails.access_token}`,
    'Content-Type': 'application/json',
  };

  const data = {
    BusinessShortcode: process.env.BUSINESS_SHORTCODE,
    LipaNaMpesaOnlineShortcode: process.env.BUSINESS_SHORTCODE,
    LipaNaMpesaOnlineShortcodePassword: process.env.LIPA_NA_MPESA_PASSWORD,
    PhoneNumber: paymentDetails.phoneNumber,
    Amount: paymentDetails.amount,
    AccountReference: paymentDetails.accountReference,
    LipaNaMpesaOnlineShortcodePassword: process.env.LIPA_NA_MPESA_PASSWORD,
    Shortcode: process.env.BUSINESS_SHORTCODE,
  };

  try {
    const response = await axios.post('https://api.safaricom.co.ke/mpesa/stkpush/v1/processrequest', data, { headers });
    return response.data;
  } catch (error) {
    throw new Error('Error with STK push');
  }
};

module.exports = stkPush;
