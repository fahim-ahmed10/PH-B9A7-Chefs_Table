import clockIcon from "../../assets/icons8-clock-32.png";
import fireIcon from "../../assets/icons8-fire-50.png";
import PropTypes from "prop-types";

const CookingRecipe = ({ recipe, handleWantToCook }) => {
  const {
    recipe_image,
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = recipe;
  return (
    <div className="w-[379px] border p-6 rounded-2xl">
      <div>
        <img
          className="w-cover h-48 mx-auto rounded-2xl"
          src={recipe_image}
          alt="bolognese"
        />
      </div>
      <div className="mt-5 mb-5 space-y-2">
        <h1 className="text-xl font-bold mb-3">{recipe_name}</h1>
        <p className="text-base text-[#808080]">{short_description}</p>
      </div>
      <hr />
      <div className="mt-5 mb-5">
        <h1 className="text-lg font-bold pb-4">
          Ingredients: {ingredients.length}
        </h1>
        <ul className="list-disc text-[#808080] pl-7 space-y-2">
          {ingredients.map((element, index) => (
            <li key={index}>{element}</li>
          ))}
        </ul>
      </div>
      <hr />
      <div className="flex gap-2 items-center mt-5 text-[#686868] mb-5">
        <img className="h-5" src={clockIcon} alt="clock" />
        <h4 className="pr-5">{preparing_time} minutes</h4>
        <img className="h-5" src={fireIcon} alt="fire" />
        <h4>{calories} calories</h4>
      </div>
      <button onClick={() => handleWantToCook(recipe)} className="text-xl font-bold bg-[#0be58a] hover:bg-[#6cfbbf] px-5 py-3 rounded-3xl">
        Want to Cook
      </button>
    </div>
  );
};

CookingRecipe.propTypes = {
  recipe: PropTypes.object.isRequired,
  handleWantToCook: PropTypes.func.isRequired,
};
export default CookingRecipe;
