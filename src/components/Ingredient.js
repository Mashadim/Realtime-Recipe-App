import React, { PropTypes } from 'react';

export const Ingredient = (props) => {
	const { ingredient } = props;

	return (
		<div className='ingredient general-font'>
			<h4>{ingredient}</h4>
		</div> 
	)
};

React.propTypes = {
	ingredient: React.PropTypes.string.isRequired
};

export default Ingredient;