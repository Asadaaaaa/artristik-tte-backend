// Library
import { DataTypes } from "sequelize";

class MasterdataCountryModel {
  constructor(server) {
    const table = server.model.db.define('masterdata_country', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      uuid: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: server.model.db.literal(`gen_random_uuid()`)
      },
      name: {
        type: DataTypes.STRING(56),
        allowNull: false
      },
      code: {
        type: DataTypes.STRING(3),
        allowNull: false
      },
      phone_code: {
        type: DataTypes.STRING(15),
        allowNull: false
      }
    }, {
      tableName: 'masterdata_country',
      timestamps: false
    });

    this.table = table;
  }
}

export default MasterdataCountryModel;