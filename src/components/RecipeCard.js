import React, { Component } from 'react';
import RecipeCardImage from './RecipeCardImage';
import RecipeCardInfo from './RecipeCardInfo';

class RecipeCard extends Component {
	render() {
		const { recipeImage, recipeName, recipeRating, recipeCookTime, recipeType, handleRecipeChecked } = this.props;
		return (
			<div className='recipeCard'>
				<RecipeCardImage recipeImage={recipeImage} />
				<RecipeCardInfo recipeName={recipeName} recipeRating={recipeRating} recipeCookTime={recipeCookTime} recipeType={recipeType} handleRecipeChecked={handleRecipeChecked}/>
			</div>
		)
	}
}

export default RecipeCard;