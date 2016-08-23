import update from 'react/lib/update';
import { types } from './actions/types'

export default function(state, action) {
	switch(action.type) {
		case types.RECIPE_CHECKED:
			let newStateChecked = Object.assign({}, state)
			
			newStateChecked.recipesChecked = Object.assign({}, state.recipesChecked)
			newStateChecked.recipesChecked[action.recipeName] = true;
			
			return update(state, {recipesChecked: {$set: newStateChecked.recipesChecked}})
		case types.RECIPE_UNCHECKED:
			let newStateUnChecked = Object.assign({}, state)
			
			newStateUnChecked.recipesChecked = Object.assign({}, state.recipesChecked)
			newStateUnChecked.recipesChecked[action.recipeName] = false;
			
			return update(state, {recipesChecked: {$set: newStateUnChecked.recipesChecked}})
		case types.FOUND_INGREDIENTS:
			return update(state, {viewIngredients : {$set:action.ingredients}})
		case types.FOUND_RECIPES:
			return update(state, {viewRecipes: {$set: action.recipes}})
		case types.SEARCH_RECIPE:
			return update(state, {recipeSearch: {$set: action.searchTxt}})
		case types.SEND_DATA:
			return update(state, {recipes: {$set: action.data}})
		default:
			return state;
	};
};