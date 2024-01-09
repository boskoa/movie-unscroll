const { User } = require("./user");
const { Movie } = require("./movie");
const { Actor } = require("./actor");
const { Director } = require("./director");
const { Genre } = require("./genre");

User.hasMany(Movie);
Movie.belongsTo(User);

User.hasMany(Actor);
Actor.belongsTo(User);

User.hasMany(Director);
Director.belongsTo(User);

User.hasMany(Genre);
Genre.belongsTo(User);

module.exports = {
  User,
  Movie,
  Actor,
  Director,
  Genre,
};
