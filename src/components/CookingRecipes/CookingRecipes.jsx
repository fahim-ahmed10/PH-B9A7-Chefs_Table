import { useEffect, useState } from "react";
import CookingRecipe from "../CookingRecipe/CookingRecipe";

const CookingRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, [])

  return (
   <>
     {recipes.map((recipe) => (
      <CookingRecipe key={recipe.recipe_id} recipe={recipe}></CookingRecipe>
    ))}
   </>
  );
};

export default CookingRecipes;
