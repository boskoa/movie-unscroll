const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../utils/db");

class Bookmark extends Model {}

Bookmark.init(
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
    modelName: "bookmark",
  },
);

module.exports = { Bookmark };
