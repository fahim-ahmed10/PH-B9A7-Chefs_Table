import { PropTypes} from 'prop-types';
import Cart from '../Cart/Cart';
const Carts = ({cartItems}) => {
  return (
      <div className="w-full border rounded-2xl">
        <h1 className="text-center font-bold mt-5">Want to cook: {cartItems.length}</h1>
        <hr className="mt-3 w-[70%] mx-auto" />
        <div>
          <table className="mt-3">
            <thead>
              <tr>
                <td></td>
                <td className="pb-4 pl-3 md:pr-10 lg:pr-20 w-[35%] lg:w-32 text-start">
                  Name
                </td>
                <td className="pb-4 w-[25%] lg:w-20 text-start">Time</td>
                <td className="pb-4 w-20 text-start">Calories</td>
                <td></td>
              </tr>
            </thead>
            <tbody>
            {
              cartItems.map((cartItem,index) => <Cart key={index} index={index} cartItem={cartItem}></Cart>)
            }
            </tbody>
          </table>
        </div>
        <h1 className="text-center font-bold mt-6">Currently cooking: 02</h1>
        <hr className="mt-3 w-[70%] mx-auto" />
        <div className="mb-5">
          <table className="mt-3">
            <thead>
              <tr>
                <td></td>
                <td className="pb-4 pl-3 md:pr-20 lg:pr-28 w-[35%] lg:w-32 text-start">
                  Name
                </td>
                <td className="pb-4 md:pr-10 lg:pr-20 w-[25%] lg:w-20 text-start">
                  Time
                </td>
                <td className="pb-4 w-full text-start">Calories</td>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-[#f9f9f9] text-sm">
                <td className="pl-3">1</td>
                <td className="pl-3 pr-4">Chicken Caesar Salad</td>
                <td className="pr-4">20 Minutes</td>
                <td className="pr-4">400 calories</td>
              </tr>
              <tr className="bg-[#f9f9f9] text-sm">
                <td className="pl-3 pt-4">1</td>
                <td className="pl-3 pr-4 pt-4">Chicken Caesar Salad</td>
                <td className="pr-4 pt-4">20 Minutes</td>
                <td className="pr-4 pt-4">400 calories</td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="text-sm">
                <td className="pl-3 pt-4"></td>
                <td className="pl-3 pr-4 pt-4"></td>
                <td className="pr-4 pt-4">
                  Total Time = <br />
                  45 minutes
                </td>
                <td className="pr-4 pt-4">
                  Total calories = <br /> 400 calories
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
  );
};

Cart.propTypes = {
  cartItems: PropTypes.array.isRequired,
}
export default Carts;
