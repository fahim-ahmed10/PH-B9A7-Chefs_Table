import { useEffect, useState } from "react";
import CookingRecipe from "../CookingRecipe/CookingRecipe";
import { PropTypes } from 'prop-types';

const CookingRecipes = ({handleWantToCook}) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, [])

  return (
   <>
     {recipes.map((recipe) => (
      <CookingRecipe key={recipe.recipe_id} recipe={recipe} handleWantToCook={handleWantToCook}></CookingRecipe>
    ))}
   </>
  );
};

CookingRecipes.propType = {
  handleWantToCook: PropTypes.func.isRequired,
}

export default CookingRecipes;
