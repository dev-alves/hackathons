import User from '../models/user';

class SessionValidaton {
  async storeValidation(req, res, next) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    req.user = user;
    return next();
  }
}

export default new SessionValidaton();
