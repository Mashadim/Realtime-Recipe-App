import React, { Component, PropTypes } from 'react';
import RecipeCardInfo from './RecipeCardInfo';
import RecipeCardImage from '../components/RecipeCardImage';

export class RecipeCard extends Component {
	render() {
		const { recipeImage, recipeName, recipeRating, recipeCookTime, recipeType } = this.props;
		
		return (
			<div className='recipeCard'>
				<RecipeCardImage recipeImage={recipeImage} />
				<RecipeCardInfo recipeName={recipeName} recipeRating={recipeRating} recipeCookTime={recipeCookTime} recipeType={recipeType} />
			</div>
		)
	}
};

RecipeCard.protoType = {
	recipeImage: React.PropTypes.string.isRequired,
	recipeName: React.PropTypes.string.isRequired,
	recipeRating: React.PropTypes.string.isRequired,
	recipeCookTime: React.PropTypes.string.isRequired,
	recipeType: React.PropTypes.string.isRequired
};

export default RecipeCard;