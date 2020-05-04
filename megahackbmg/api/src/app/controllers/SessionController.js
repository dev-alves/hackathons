import jwt from 'jsonwebtoken';
import authConfig from '../../config/auth';
import User from '../models/user';

class SessionController {
  async store(req, res) {
    const { id, name, email } = req.user;
    return res.json({
      user: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.experiesIn,
      }),
    });
  }

  async login(req, res, next) {
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

export default new SessionController();
