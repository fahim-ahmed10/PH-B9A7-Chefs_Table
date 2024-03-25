import bolognesePic from "../../assets/Bolognese.png";
import clockIcon from "../../assets/icons8-clock-32.png";
import fireIcon from "../../assets/icons8-fire-50.png";
import PropTypes from "prop-types";

const CookingRecipe = ({ recipe }) => {
  const { recipe_name } = recipe;
  return (
    <div className="w-[379px] border p-6 rounded-2xl">
      <div>
        <img src={bolognesePic} alt="bolognese" />
      </div>
      <div className="mt-5 mb-5 space-y-2">
        <h1 className="text-xl font-bold mb-3">{recipe_name}</h1>
        <p className="text-base text-[#808080]">
          Classic Italian pasta dish with savory meat sauce.
        </p>
      </div>
      <hr />
      <div className="mt-5 mb-5">
        <h1 className="text-lg font-bold pb-4">Ingredients: 4</h1>
        <ul className="list-disc text-[#808080] pl-7 space-y-2">
          <li>500g gorund beef</li>
          <li>1 onion, chopped</li>
          <li>2 cloves garlic, minced</li>
        </ul>
      </div>
      <hr />
      <div className="flex gap-2 items-center mt-5 text-[#686868] mb-5">
        <img className="h-5" src={clockIcon} alt="clock" />
        <h4 className="pr-5">30 minutes</h4>
        <img className="h-5" src={fireIcon} alt="fire" />
        <h4>600 calories</h4>
      </div>
      <button className="text-xl font-bold bg-[#0be58a] hover:bg-[#6cfbbf] px-5 py-3 rounded-3xl">
        Want to Cook
      </button>
    </div>
  );
};

CookingRecipe.propTypes = {
  recipe: PropTypes.object.isRequired,
};
export default CookingRecipe;
