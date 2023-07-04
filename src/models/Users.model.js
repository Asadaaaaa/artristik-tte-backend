import { DataTypes } from "sequelize";

class UsersModel {
  constructor(server) {
    const table = server.model.db.define('users', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      uuid: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4
      },
      country_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'masterdata_country',
          key: 'id'
        }
      },
      name: {
        type: DataTypes.STRING(60),
        allowNull: false
      },
      birthdate: {
        type: DataTypes.DATE,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      email_verified: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      phone_number: {
        type: DataTypes.STRING(16),
        allowNull: false
      },
      phone_number_verified: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      username: {
        type: DataTypes.STRING(15),
        allowNull: true
      },
      password: {
        type: DataTypes.STRING(24),
        allowNull: true
      },
      nik: {
        type: DataTypes.STRING(16),
        allowNull: true
      },
      passport_id: {
        type: DataTypes.STRING(20),
        allowNull: true
      },
      identity_proof: {
        type: DataTypes.STRING(200),
        allowNull: false
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.DATE
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.DATE
      }
    }, {
      tableName: 'users',
      timestamps: false
    });

    this.table = table;
  }
}

export default UsersModel;