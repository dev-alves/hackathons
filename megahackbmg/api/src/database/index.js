import Sequelize from 'sequelize';
import databaseconfig from '../config/database';

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseconfig);
    models.map(model => {
      model.init(this.connection);
      if (model.associate) {
        model.associate(this.connection.models);
      }

      return model;
    });
  }
}

export default new Database();
