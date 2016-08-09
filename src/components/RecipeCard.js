import React, { Component } from 'react';
import RecipeCardImage from './RecipeCardImage';
import RecipeCardInfo from './RecipeCardInfo';

export class RecipeCard extends Component {
	render() {
		const { recipeImage, recipeName, recipeRating, recipeCookTime, recipeType, recipesChecked, handleRecipeChecked } = this.props;
		return (
			<div className='recipeCard'>
				<RecipeCardImage recipeImage={recipeImage} />
				<RecipeCardInfo recipeName={recipeName} recipeRating={recipeRating} recipeCookTime={recipeCookTime} recipeType={recipeType} handleRecipeChecked={handleRecipeChecked} recipesChecked={recipesChecked} />
			</div>
		)
	}
}

export default RecipeCard;