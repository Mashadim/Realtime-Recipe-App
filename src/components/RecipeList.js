import React, { Component } from 'react';
import RecipeCard from './RecipeCard'

export class RecipeList extends Component {
	render() {
		const { viewRecipes, recipes, handleRecipeChecked } = this.props;
		let view = viewRecipes.length ? viewRecipes : recipes;
		return (
			<div className='recipeList'>
				{
					view.map((recipe) => {
						return (
							<div key={recipe.name}> 
								<RecipeCard recipeImage={recipe.image} recipeName={recipe.name} recipeRating={recipe.rating} recipeCookTime={recipe.cook_time} recipeType={recipe.type} handleRecipeChecked={handleRecipeChecked} /> 
							</div>
						)
					})
				}
			</div>
		)
	}
}

export default RecipeList;