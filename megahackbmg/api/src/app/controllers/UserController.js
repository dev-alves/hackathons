import User from '../models/user';

class UserController {
  async store(req, res, next) {
    req.user = await User.create(req.body);
    return next();
  }

  async index(req, res, next) {
    const { id } = req.user;
    const userInfo = await User.findByPk(id);
    return res.json(userInfo);
  }
}

export default new UserController();
