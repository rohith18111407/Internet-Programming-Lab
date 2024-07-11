import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [search, setSearch] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [cookingTime, setCookingTime] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchRecipes();
    fetchFavourites();
  }, []);

  const fetchRecipes = () => {
    axios.get(`http://localhost:3001/recipes?name=${search}&cuisine=${cuisine}&difficultyLevel=${difficulty}&cookingTime=${cookingTime}`)
      .then(response => {
        if (response.data.length > 0) {
          setRecipes(response.data);
          setError('');
        } else {
          setError('No recipes found');
          setRecipes([]);
        }
      })
      .catch(error => {
        setError('Error fetching recipes: ' + error.message);
        setRecipes([]);
      });
  };

  const fetchFavourites = () => {
    axios.get(`http://localhost:3001/favourites`)
      .then(response => {
        if (response.data.length > 0) {
          setFavourites(response.data);
        } else {
          setFavourites([]);
        }
      })
      .catch(error => {
        console.error('Error fetching favourites: ' + error.message);
      });
  };

  const addToFavourites = (id) => {
    axios.post(`http://localhost:3001/favourites`, { id })
      .then(response => {
        alert('Added to favourites!');
        fetchFavourites(); // Update favourites list after adding
      })
      .catch(error => {
        console.error('Error adding to favourites: ' + error.message);
      });
  };
  

  const removeFromFavourites = (id) => {
    axios.delete(`http://localhost:3001/favourites/${id}`)
      .then(response => {
        alert('Removed from favourites!');
        setFavourites(favourites.filter(favourite => favourite._id !== id));
      })
      .catch(error => {
        console.error('Error removing from favourites: ' + error.message);
      });
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleCuisineChange = (event) => {
    setCuisine(event.target.value);
  };

  const handleDifficultyChange = (event) => {
    setDifficulty(event.target.value);
  };

  const handleCookingTimeChange = (event) => {
    setCookingTime(event.target.value);
  };

  const handleSearch = () => {
    fetchRecipes();
  };

  const sortRecipesByDifficulty = () => {
    setRecipes([...recipes].sort((a, b) => {
      const difficultyOrder = { Easy: 1, Medium: 2, Hard: 3 };
      return difficultyOrder[a.difficultyLevel] - difficultyOrder[b.difficultyLevel];
    }));
  };

  const sortRecipesByCookingTime = () => {
    setRecipes([...recipes].sort((a, b) => a.cookingTime - b.cookingTime));
  };

  return (
    <div>
      <div>
        <h1>Recipe Finder</h1>
        <center>
          <input type="text" placeholder="Search by name" value={search} onChange={handleSearchChange} /><br />
          <input type="text" placeholder="Search by cuisine" value={cuisine} onChange={handleCuisineChange} /><br />
          <input type="text" placeholder="Search by difficulty" value={difficulty} onChange={handleDifficultyChange} /><br />
          <input type="text" placeholder="Search by cooking time (minutes)" value={cookingTime} onChange={handleCookingTimeChange} /><br />

          <button onClick={handleSearch}>Search</button>
          <br/><br/>
          <button onClick={sortRecipesByDifficulty}>Sort by Difficulty</button>
          <br/><br/>
          <button onClick={sortRecipesByCookingTime}>Sort by Cooking Time</button><br /><br />
        </center>
        <h1>---- List of Items ----</h1>
        {error && <p>{error}</p>}
        <div className="recipes">
          {recipes.map((recipe) => (
            <div key={recipe._id} className="recipe">
              <center>
                <h1>{recipe.name}</h1>
                <img src={recipe.image} alt={recipe.name} style={{ width: '200px', height: '200px' }} />
                <h3>Cuisine</h3>
                <p> {recipe.cuisine}</p>
                <h3>Cooking Time</h3>
                <p> {recipe.cookingTime}</p>
                <h3>Difficulty Level:</h3>
                <p> {recipe.difficultyLevel}</p>
                <button onClick={() => addToFavourites(recipe._id)}>Add to Favourites</button>
              </center>
              <div>
                <h3>Ingredients</h3>
                <ul>
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>Instructions</h3>
                <ol>
                  {recipe.instructions.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h1>---- Favourites ----</h1>
        <div className='recipes'>
          {favourites.map((fav) => (
            <div key={fav._id} className="favourite">
              <center>
                <h1>{fav.name}</h1>
                <img src={fav.image} alt={fav.name} style={{ width: '200px', height: '200px' }} />
                <h3>Cuisine</h3>
                <p>{fav.cuisine}</p>
                <h3>Cooking Time</h3>
                <p>{fav.cookingTime}</p>
                <h3>Difficulty Level</h3>
                <p> {fav.difficultyLevel}</p>
                <button onClick={() => removeFromFavourites(fav._id)}>Remove from Favourites</button>
              </center>
              <div>
                <h3>Ingredients</h3>
                <ul>
                  {fav.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>Instructions</h3>
                <ol>
                  {fav.instructions.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>
            </div>
          ))}
        </div>
      </div>
      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default App;
