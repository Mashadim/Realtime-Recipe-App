import React, { Component, PropTypes } from 'react';
import shallowCompare from 'react/lib/shallowCompare';
import { connect } from 'react-redux';
import RecipeCard from './RecipeCard'

export class RecipeList extends Component {
	shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  };
	
	render() {
		const { viewRecipes, recipes } = this.props;
		let view = viewRecipes.length ? viewRecipes : recipes;
		
		return (
			<div className='recipeList'>
				{ 
					view.map((recipe) => {
						return (
							<div key={recipe.name}> 
								<RecipeCard recipeImage={recipe.image} recipeName={recipe.name} recipeRating={recipe.rating} recipeCookTime={recipe.cook_time} recipeType={recipe.type} /> 
							</div>
						)
					})
				}
			</div>
		)
	}
};

function mapStateToProps({recipes = [], viewRecipes = []} = {}) {
	return { recipes, viewRecipes }
};

RecipeList.propTypes = {
	recipes: React.PropTypes.array.isRequired,
	viewRecipes: React.PropTypes.array.isRequired
}

export default connect(mapStateToProps)(RecipeList);