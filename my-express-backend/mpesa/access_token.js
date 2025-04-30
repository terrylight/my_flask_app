const axios = require('axios');

const accessToken = async () => {
  try {
    const response = await axios.post('https://api.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials', null, {
      headers: {
        'Authorization': `Basic ${Buffer.from(process.env.CONSUMER_KEY + ':' + process.env.CONSUMER_SECRET).toString('base64')}`,
      },
    });
    return response.data.access_token;
  } catch (error) {
    throw new Error('Error fetching access token');
  }
};

module.exports = accessToken;
