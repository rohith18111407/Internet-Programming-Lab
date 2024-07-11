const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  ingredients: [{ type: String, required: true }],
  instructions: [{ type: String, required: true }],
  cookingTime: { type: String, required: true },
  difficultyLevel: { type: String, required: true },
  cuisine: { type: String, required: true },
});

const Recipe = mongoose.model('recipes', recipeSchema);

const favouriteSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  ingredients: [{ type: String, required: true }],
  instructions: [{ type: String, required: true }],
  cookingTime: { type: String, required: true },
  difficultyLevel: { type: String, required: true },
  cuisine: { type: String, required: true },
});

const Favourite = mongoose.model('recipiefav', favouriteSchema);

module.exports = { Recipe, Favourite };