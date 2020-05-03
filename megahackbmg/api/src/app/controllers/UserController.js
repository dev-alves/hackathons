import User from '../models/user';
import WrapperResponseToBot from '../wrapper/responseMessageToBot';

class UserController {
  async getUsersBySpecialty(req, res) {
    const { idSpecialty } = req.params;

    const users = await User.findAll({
      where: { specialty_id: idSpecialty },
      attributes: ['id', 'name', 'email', 'phone_number'],
    });

    return res.send(WrapperResponseToBot(users[0].dataValues));
  }

  async getUserById(req, res) {
    const { userId } = req.params;
    return res.json(await User.findByPk(userId));
  }
}

export default new UserController();
