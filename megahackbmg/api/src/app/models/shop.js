import Sequelize, { Model } from 'sequelize';

export default class Shop extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.File, { foreignKey: 'logo_id', as: 'logo' });
  }
}
