import Shop from '../models/shop';
import File from '../models/file';

class ShopController {
  async store(req, res) {
    const shop = await Shop.create(req.body);
    return res.json(shop);
  }

  async index(req, res) {
    const shops = await Shop.findAll({
      include: [
        {
          model: File,
          as: 'logo',
        },
      ],
    });

    return res.json(shops);
  }
}

export default new ShopController();
