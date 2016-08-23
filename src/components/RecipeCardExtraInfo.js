import React, { PropTypes } from 'react';

export const RecipeCardExtraInfo = (props) => {
	const { recipeCookTime, recipeType } = props;
	
	return (
		<div className='recipeCardExtraInfo lead general-padding'>
			<span className='glyphicon glyphicon-time' aria-hidden='true'></span> 
			{recipeCookTime} min <br />
			Flavor: {recipeType}
		</div>
	)
};

React.propTypes = {
	recipeCookTime: React.PropTypes.string.isRequired,
	recipeType: React.PropTypes.string.isRequired
};

export default RecipeCardExtraInfo;