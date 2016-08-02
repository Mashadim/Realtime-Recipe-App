import update from 'react/lib/update';

let reducer = function(state, action) {
	switch(action.type) {
		case 'RECIPE_CHECKED':
			let newStateChecked = Object.assign({}, state)
			
			newStateChecked.recipesChecked = Object.assign({}, state.recipesChecked)
			newStateChecked.recipesChecked[action.recipeName] = true;
			
			return update(state, {recipesChecked: {$set: newStateChecked.recipesChecked}})
		case 'RECIPE_UNCHECKED':
			let newStateUnChecked = Object.assign({}, state)
			
			newStateUnChecked.recipesChecked = Object.assign({}, state.recipesChecked)
			newStateUnChecked.recipesChecked[action.recipeName] = false;
			
			return update(state, {recipesChecked: {$set: newStateUnChecked.recipesChecked}})
		case 'FOUND_INGREDIENTS':
			return update(state, {viewIngredients : {$set:action.ingredients}})
		case 'FOUND_RECIPES':
			return update(state, {viewRecipes: {$set: action.recipes}})
		case 'SEARCH_RECIPE':
			return update(state, {recipeSearch: {$set: action.searchTxt}})
		case 'SEND_DATA':
			return update(state, {recipes: {$set: action.data}})
		default:
			return state;
	}
}

export default reducer