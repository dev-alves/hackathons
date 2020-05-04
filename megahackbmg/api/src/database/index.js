import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import User from '../app/models/user';
import File from '../app/models/file';
import Shop from '../app/models/shop';

const models = [User, File, Shop];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
