import ClientTwilio from 'twilio';
import TwilioConfig from '../../config/twilio';

const clientTwilio = () => {
  return ClientTwilio(TwilioConfig.accountSid, TwilioConfig.authToken);
};
class TwilioService {
  async authenticateSMS(phoneNumber) {
    const twilio = clientTwilio();
    twilio.verify
      .services(TwilioConfig.accountSidVerification)
      .verifications.create({ to: phoneNumber, channel: 'sms' });
  }

  async verifySMS(phoneNumber) {
    const twilio = clientTwilio();
    twilio.verify
      .services(TwilioConfig.accountSidVerification)
      .verificationChecks.create({ to: phoneNumber, code: 'sms' });
  }
}

export default new TwilioService();
