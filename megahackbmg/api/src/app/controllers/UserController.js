import TwilioService from '../service/TwilioService';

class UserController {
  async message(req, res) {
    TwilioService.sentSMS(req.body.to, req.body.message)
      .then(response => {
        res.json(response);
      })
      .catch(error => console.log(error));
  }
}

export default new UserController();
