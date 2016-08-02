export function sortRecipeName(recipes) {
	return recipes.sort((recipe1, recipe2) => {
		return recipe1.name > recipe2.name;
	});
};