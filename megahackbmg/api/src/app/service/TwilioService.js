import ClientTwilio from 'twilio';
import TwilioConfig from '../../config/twilio';

const clientTwilio = () => {
  return ClientTwilio(TwilioConfig.accountSid, TwilioConfig.authToken);
};
class TwilioService {
  authenticateSMS(phoneNumber) {
    const twilio = clientTwilio();
    return twilio.verify
      .services(TwilioConfig.accountSidVerification)
      .verifications.create({ to: phoneNumber, channel: 'sms' });
  }

  verifySMS(phoneNumber, code) {
    const twilio = clientTwilio();
    return twilio.verify
      .services(TwilioConfig.accountSidVerification)
      .verificationChecks.create({ to: phoneNumber, code });
  }

  verifyMyPhoneNumber(phoneNumber) {}
}

export default new TwilioService();
