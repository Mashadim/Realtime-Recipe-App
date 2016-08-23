import React, { PropTypes } from 'react';

export const RecipeCardRating = (props) => {
	const { recipeRating } = props;
	let rating = [];
	
	for(var i=0; i<recipeRating; i++) {
		rating.push(
			<span key={i+1} className='glyphicon glyphicon-star' aria-hidden='true'></span>
		)
	};
	
	return (
		<div className='recipeCardRating general-font lead general-padding'>
			{rating}
		</div>
	)
};

React.propTypes = {
	recipeRating: React.PropTypes.string.isRequired
};

export default RecipeCardRating;