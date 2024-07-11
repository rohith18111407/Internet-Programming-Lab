const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Recipe, Favourite } = require('./model/user.js');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/recipeApp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// Routes
app.get("/recipes", (req, res) => {
  let query = {};
  if (req.query.name) {
    query.name = { $regex: req.query.name, $options: "i" };
  }
  if (req.query.cuisine) {
    query.cuisine = req.query.cuisine;
  }
  if (req.query.difficultyLevel) {
    query.difficultyLevel = req.query.difficultyLevel;
  }
  if (req.query.cookingTime) {
    query.cookingTime = { $lte: req.query.cookingTime };
  }
  Recipe.find(query)
    .then(recipes => {
      res.json(recipes);
    })
    .catch(error => res.status(500).json({ error: 'Internal Server Error', details: error.message }));
});

app.get("/favourites", (req, res) => {
  Favourite.find({})
    .then(favourites => {
      res.json(favourites);
    })
    .catch(error => res.status(500).json({ error: 'Internal Server Error', details: error.message }));
});

app.post("/favourites", (req, res) => {
  const { id } = req.body;
  Recipe.findById(id)
    .then(recipe => {
       const fav = new Favourite(recipe.toObject());
    fav.save()
      .then(savedFav => res.json(savedFav))
      .catch(err => res.status(400).json({ error: 'Failed to save favourite', details: err.message }));
    })
    .catch(err => res.status(404).json({ error: 'Recipe not found', details: err.message }));
});

app.delete("/favourites/:id", (req, res) => {
  const { id } = req.params;
  Favourite.findByIdAndDelete(id)
    .then(deletedFavourite => {
      if (!deletedFavourite) {
        return res.status(404).json({ error: 'Favourite not found' });
      }
      res.json({ message: 'Favourite removed successfully' });
    })
    .catch(error => res.status(500).json({ error: 'Internal Server Error', details: error.message }));
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
