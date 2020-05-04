import jwt from 'jsonwebtoken';
import authConfig from '../../config/auth';

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
}

export default new SessionController();
