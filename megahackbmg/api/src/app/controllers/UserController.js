import User from '../models/user';
import TwilioService from '../service/TwilioService';

class UserController {
  async store(req, res, next) {
    req.user = await User.create(req.body);
    const { user } = req;

    TwilioService.authenticateSMS(user.phone_number)
      .then(next())
      .catch(error => {
        return res.status(401).json(error);
      });
  }

  async index(req, res, next) {
    const { id } = req.user;
    const userInfo = await User.findByPk(id);
    return res.json(userInfo);
  }
}

export default new UserController();
