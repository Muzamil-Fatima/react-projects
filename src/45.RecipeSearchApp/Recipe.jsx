import React, { useState } from "react";
import RecipeCard from "./RecipeCard";

const Recipe = () => {
  const [query, setQuery] = useState("");
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRecipe = async () => {
    if (!query.trim()) return;

    setLoading(true);
    setMeals([]);

    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );
    const data = await res.json();

    setMeals(data.meals || []);
    setLoading(false);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 text-center">
      <h1 className="text-3xl font-semibold mb-8">
        🍽️ Recipe Search App
      </h1>

      {/* Search Box */}
      <div className="flex flex-wrap justify-center gap-3">
        <input
          type="text"
          placeholder="Search any recipe..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-72 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        <button
          onClick={fetchRecipe}
          className="px-5 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
        >
          Search
        </button>
      </div>

      {/* Loading */}
      {loading && (
        <h3 className="mt-6 text-lg font-medium">Loading recipes...</h3>
      )}

      {/* No Results */}
      {!loading && meals.length === 0 && (
        <p className="mt-6 text-gray-500">No recipes found. Try another name.</p>
      )}

      {/* Recipe Grid */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {meals.map((meal) => (
          <RecipeCard key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default Recipe;
