import ClientTwilio from 'twilio';
import TwilioConfig from '../../config/twilio';

class TwilioService {
  constructor() {
    this.client = ClientTwilio(TwilioConfig.accountSid, TwilioConfig.authToken);
  }

  sentSMS(to, body) {
    return this.client.messages.create({
      from: '+15005550006',
      to,
      body,
    });
  }
}

export default new TwilioService();
