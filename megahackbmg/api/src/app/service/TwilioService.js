import ClientTwilio from 'twilio';
import TwilioConfig from '../../config/twilio';

import User from '../models/user';

const clientTwilio = () => {
  return ClientTwilio(TwilioConfig.accountSid, TwilioConfig.authToken);
};
class TwilioService {
  authenticateSMS(phoneNumber) {
    const twilio = clientTwilio();
    return twilio.verify
      .services(TwilioConfig.twilioVerificationServiceSID)
      .verifications.create({ to: phoneNumber, channel: 'sms' });
  }

  verifySMS(phoneNumber, code) {
    const twilio = clientTwilio();
    return twilio.verify
      .services(TwilioConfig.twilioVerificationServiceSID)
      .verificationChecks.create({ to: phoneNumber, code });
  }

  sendSMSNotification(phoneNumber, body) {
    const twilio = clientTwilio();

    return twilio.messages.create({
      to: phoneNumber,
      from: '+12057548758',
      body,
    });
  }

  async addNewOutoingCaller(phone_number) {
    const twilio = clientTwilio();
    const userExists = await User.findOne({
      where: {
        phone_number,
      },
    });

    return twilio.validationRequests.create({
      friendlyName: userExists.email,
      phoneNumber: userExists.phone_number,
    });
  }
}

export default new TwilioService();
