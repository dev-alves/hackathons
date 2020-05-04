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
}

export default new TwilioController();
