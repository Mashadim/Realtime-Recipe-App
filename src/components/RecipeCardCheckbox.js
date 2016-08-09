import React, { Component } from 'react';

export class RecipeCardCheckbox extends Component {
	render() {
		const { recipeName, recipesChecked, handleRecipeChecked} = this.props;
    let isChecked = recipesChecked[recipeName];
		return (
			<div className='recipeCardCheckbox'>
				<div className='recipeCardCheckbox-question lead text-center'>
					Mmmmm...{recipeName}.
				</div>
				<hr />
				<form className='form-inline text-center'>
					<label className='checkbox-inline'>
						<input type='checkbox' className='checkbox' id={recipeName} value={recipeName} checked={isChecked} onClick={handleRecipeChecked.bind(this)} />
						<span className='recipeCardCheckbox-word lead text-center'> 
							View Ingredients
						</span>
					</label>
				</form>
			</div>
		)
	}
}

export default RecipeCardCheckbox;