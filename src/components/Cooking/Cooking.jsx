import PropTypes from 'prop-types';
const Cooking = ({recipe}) => {
    console.log(recipe);
    return (
        <div>
            
        </div>
    );
};

Cooking.propTypes = {
    recipe: PropTypes.object.isRequired
}

export default Cooking;