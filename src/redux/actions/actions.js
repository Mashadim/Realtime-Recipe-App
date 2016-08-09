import { sortRecipeName } from './sort'
import { types } from './types'

let actions = {
	foundIngredients: function(ingredients) {
		return {
			type: types.FOUND_INGREDIENTS,
			ingredients: ingredients
		}
	},
	filterIngredients: function(recipeName) {
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
			
			dispatch(actions.foundIngredients(ingredients.sort()));
		};
	},
	recipeChecked: function(recipeName) {
		return {
			type: types.RECIPE_CHECKED,
			recipeName: recipeName
		}
	},
	recipeCheck: function(recipeName) {
		return (dispatch) => {	
			dispatch(actions.recipeChecked(recipeName));	
			dispatch(actions.filterIngredients());
		};
	},
	recipeUnChecked: function(recipeName) {
		return {
			type: types.RECIPE_UNCHECKED,
			recipeName: recipeName
		};
	},
	recipeUncheck: function(recipeName) {
		return(dispatch) => {
			dispatch(actions.recipeUnChecked(recipeName));
			dispatch(actions.filterIngredients());
		};
	},
	foundRecipes: function(recipes) {
		return {
			type: types.FOUND_RECIPES,
			recipes: recipes
		};
	},
	filterRecipes(text) {
		return (dispatch, getState) => {
			let recipes = getState().recipes;
			let recipeSearch = getState().recipeSearch.toLowerCase();
			
			let filteredRecipes = recipes.filter((recipe) => {
				let tempRecipeName = recipe.name.toLowerCase();
				return tempRecipeName.startsWith(recipeSearch);
			});
		
			dispatch(actions.foundRecipes(filteredRecipes));
		};
	},
  filterRecipesByIngredient(text) {
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
      dispatch(actions.foundRecipes(filteredRecipes));
    }
  },
	searchRecipe: function(searchTxt) {
		return {
			type: types.SEARCH_RECIPE,
			searchTxt: searchTxt
		};
	},
	findRecipe: function(text) {
		return (dispatch) => {	
			dispatch(actions.searchRecipe(text));	
			dispatch(actions.filterRecipesByIngredient(text));
		};
	},
	sendData: function(data) {
		return {
			type: types.SEND_DATA,
			data: data
		};
	},
	getData: function(path) {
		return(dispatch) => {
			return fetch(path)
				.then(res => res.json())
				.then(data => sortRecipeName(data))
				.then(data => {dispatch(actions.sendData(data))})
				.catch(err => console.error(`SEND DATA ERROR: ${err}`));
		};
	}
}

export default actions;