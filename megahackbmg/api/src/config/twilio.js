require('dotenv/config');

module.exports = {
  accountSid: process.env.TWILIO_SID,
  authToken: process.env.TWILIO_TOKEN,
};
