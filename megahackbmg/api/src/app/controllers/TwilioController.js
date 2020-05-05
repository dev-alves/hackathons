import TwilioService from '../service/TwilioService';

class TwilioController {
  verify(req, res) {
    const { phone_number, code } = req.body;
    TwilioService.verifySMS(phone_number, code)
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

  notification(req, res) {
    const { phone_number, body } = req.body;
    TwilioService.sendSMSNotification(phone_number, body)
      .then(res.json({ notification: true }))
      .catch(error => res.stats(401).json({ error }));
  }

  verifyCaller(req, res) {
    TwilioService.addNewOutoingCaller(req.body.phone_number)
      .then(res.json({ verified: true }))
      .catch(error => {
        console.log(error);
        return res.json({ verified: false });
      });
  }
}

export default new TwilioController();
