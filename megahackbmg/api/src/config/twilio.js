require('dotenv/config');

module.exports = {
  accountSid: process.env.TWILIO_SID,
  authToken: process.env.TWILIO_TOKEN,
  twilioVerificationServiceSID: process.env.TWILIO_VERIFICATION_SERVICE_SID,
  magicNumber: process.env.TWILIO_MAGIC_NUMBER,
  SMSNotification: process.env.TWILIO_SMS_NOTIFICATION_SERVICE_SID,
};
