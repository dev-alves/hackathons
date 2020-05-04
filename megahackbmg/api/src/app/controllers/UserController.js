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

  async update(req, res, next) {
    const { id } = req.body;
    const userExists = await User.findByPk(id);
    if (userExists) {
      const { name, email, cashback, points } = await userExists.update(
        req.body
      );
      return res.json({ id, name, email, cashback, points });
    }

    return res.status(401).json({ message: 'User not found!' });
  }
}

export default new UserController();
