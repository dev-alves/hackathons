import ClientTwilio from 'twilio';
import TwilioConfig from '../../config/twilio';

const clientTwilio = () => {
  return ClientTwilio(TwilioConfig.accountSid, TwilioConfig.authToken);
};

class TwilioMiddleware {
  async authenticateSMS(req, res, next) {
    const { phone_number } = req.user;
    const twilio = clientTwilio();
    twilio.verify
      .services(TwilioConfig.twilioVerificationServiceSID)
      .verifications.create({ to: phone_number, channel: 'sms' })
      .then(next())
      .catch(error => {
        console.log(error);

        return res.status(401).json(error);
      });
  }

  async verifySMS(req, res, next) {
    const { phone_number, code } = req.body;
    const twilio = clientTwilio();
    twilio.verify
      .services(TwilioConfig.twilioVerificationServiceSID)
      .verificationChecks.create({ to: phone_number, code })
      .then(data => {
        if (data.status === 'approved') {
          return res.json({ approved: true });
        }

        return res.json({ approved: false });
      })
      .catch(error => {
        return res.status(401).json(error);
      });
  }
}

export default new TwilioMiddleware();
