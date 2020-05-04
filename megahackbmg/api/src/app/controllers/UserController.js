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
    const { name, email, phone_number, points, cashback } = await User.findByPk(
      id
    );
    return res.json({ name, email, phone_number, points, cashback });
  }
}

export default new UserController();
