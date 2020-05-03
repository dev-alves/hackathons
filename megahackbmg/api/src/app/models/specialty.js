import Sequelize, { Model } from 'sequelize';

export default class Specialty extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
      },
      { sequelize }
    );
    return this;
  }
}
