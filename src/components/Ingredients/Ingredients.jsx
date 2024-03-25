import { PropTypes } from 'prop-types';
const Ingredients = ({ element }) => {
    return (
        <>
            <li>{element}</li>
        </>
    );
};

Ingredients.propTypes = {
    element: PropTypes.string.isRequired,
}
export default Ingredients;