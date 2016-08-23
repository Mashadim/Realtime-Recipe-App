import { sortRecipeName } from './sort'
import { types } from './types'

export function foundIngredients(ingredients) {
	return {
		type: types.FOUND_INGREDIENTS,
		ingredients: ingredients
	};
};

export function filterIngredients(recipeName) {
	return (dispatch, getState) => {
		let recipesChecked = getState().recipesChecked;
		let toFilter = getState().viewRecipes.length ? getState().viewRecipes : getState().recipes;
		let ingredientMemo = {};
		let ingredients = [];
		let checkedCount = 0;

		toFilter.forEach((recipe) => {
			if(checkedCount !== recipesChecked.length) {
				if(recipesChecked[recipe.name]) {
					checkedCount++; // to avoid extra looping
					recipe.ingredients.forEach((ingredient) => {
						if(!ingredientMemo[ingredient]) {
							ingredientMemo[ingredient] = true;
							ingredients.push(ingredient);
						};
					});
				};	
			};
		});

		dispatch(foundIngredients(ingredients.sort()));
	};
};

export function recipeChecked(recipeName) {
	return {
		type: types.RECIPE_CHECKED,
		recipeName: recipeName
	};
};

export function recipeUnChecked(recipeName) {
	return {
		type: types.RECIPE_UNCHECKED,
		recipeName: recipeName
	};
};

export function recipeCheck(recipeName) {
	return (dispatch) => {	
		dispatch(recipeChecked(recipeName));	
		dispatch(filterIngredients());
	};
};

export function recipeUncheck(recipeName) {
	return(dispatch) => {
		dispatch(recipeUnChecked(recipeName));
		dispatch(filterIngredients());
	};
};

export function foundRecipes(recipes) {
	return {
		type: types.FOUND_RECIPES,
		recipes: recipes
	};
};

export function filterRecipesByIngredient(text) {
	return (dispatch, getState) => {
		let recipes = getState().recipes;
		let recipeSearch = getState().recipeSearch.toLowerCase();

		let filteredRecipes = recipes.filter((recipe) => {
			let haveIngredient = [];
			haveIngredient = recipe.ingredients.filter((ingredient) => {
				let tempIngredientName = ingredient.toLowerCase();
				return tempIngredientName.startsWith(recipeSearch);
			});
			return haveIngredient.length;
		});
		dispatch(foundRecipes(filteredRecipes));
	};
};

export function searchRecipe(searchTxt) {
	return {
		type: types.SEARCH_RECIPE,
		searchTxt: searchTxt
	};
};

export function findRecipe(text) {
	return (dispatch) => {	
		dispatch(searchRecipe(text));	
		dispatch(filterRecipesByIngredient(text));
	};
};

export function sendData(data) {
	return {
		type: types.SEND_DATA,
		data: data
	};
};

export function getData(path) {
	const dataRqst = new Request('/static/recipes.json', { method: 'GET' });
	return(dispatch) => {
		return fetch(dataRqst)
			.then(res => res.json())
			.then(data => {dispatch(sendData(sortRecipeName(data)))})
			.catch(err => console.error(`SEND DATA ERROR: ${err}`));
	};
};