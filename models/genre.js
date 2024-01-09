const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../utils/db");

class Genre extends Model {}

Genre.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tmdbId: {
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
    },
    count: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
    },
  },
  {
    sequelize,
    underscored: true,
    timestamps: true,
    createdAt: true,
    updatedAt: true,
    modelName: "genre",
  },
);

module.exports = { Genre };
