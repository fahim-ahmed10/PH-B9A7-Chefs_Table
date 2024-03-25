import { PropTypes } from 'prop-types';

const Cart = ({index, cartItem}) => {
  const {recipe_name, preparing_time, calories} = cartItem;
  return (
    <>
      <tr className="bg-[#f9f9f9] text-sm">
        <td className="pl-3">{index + 1}</td>
        <td className="pl-3 pr-4">{recipe_name}</td>
        <td className="pr-4">{preparing_time} Minutes</td>
        <td>{calories} calories</td>
        <td className="w-full text-end">
          <button className="bg-[#0be58a] hover:bg-[#6bffc1] py-1 px-3 text-sm font-bold rounded-3xl">
            Preparing
          </button>
        </td>
      </tr>
    </>
  );
};

Cart.propTypes ={
  index: PropTypes.number.isRequired,
  cartItem: PropTypes.object.isRequired,
}
export default Cart;
