import React from "react";

const RecipeCard = ({ meal }) => {
  return (
    <div className=" bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300">
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-full h-50 object-cover"
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-black">
          {meal.strMeal}
        </h3>

        <p className="text-sm text-gray-600">
          {meal.strInstructions.substring(0, 200)}...
        </p>
        <div className="flex gap-1.5">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={meal.strYoutube}
            className="inline-block mt-3 px-3 py-2 bg-orange-500 text-white text-sm rounded-lg hover:bg-orange-600 transition"
          >
            Watch Recipe →
          </a>
          <a
          target="_blank"
            href={meal.strSource} 
            className="inline-block mt-3 px-3 py-2 bg-orange-500 text-white text-sm rounded-lg hover:bg-orange-600 transition"
          >
         Read More
          </a>
        </div>
      </div>
    </div>
  );
};
export default RecipeCard;
