import React, { PropTypes } from 'react';

export const RecipeCardImage = (props) => {
	const { recipeImage } = props;
	
	return (
		<div className='recipeCardImageDiv'>
			<img className='recipeCardImage img-responsive center-block' src={recipeImage} />
		</div>
	)
};

React.propTypes = {
	recipeImage: React.PropTypes.string.isRequired
};

export default RecipeCardImage;