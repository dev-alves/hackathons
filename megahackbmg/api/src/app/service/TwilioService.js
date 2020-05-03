import ClientTwilio from 'twilio';
import TwilioConfig from '../../config/twilio';

class TwilioService {
  constructor() {
    this.client = ClientTwilio(TwilioConfig.accountSid, TwilioConfig.authToken);
  }

  sentSMS(to, body) {
    return this.client.messages.create({
      from: TwilioConfig.magicNumber,
    });
  }
}

export default new TwilioService();
