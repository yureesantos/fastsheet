import Sequelize, { Model } from 'sequelize';

class Recipient extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        street: Sequelize.TEXT,
        number: Sequelize.INTEGER,
        complement: Sequelize.TEXT,
        state: Sequelize.STRING,
        city: Sequelize.STRING,
        zipcode: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

export default Recipient;
