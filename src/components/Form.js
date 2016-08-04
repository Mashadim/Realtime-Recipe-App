import React, { Component } from 'react';

export class Form extends Component {
	render() {
		const { recipeSearch, handleRecipeSearch } = this.props;
		return (
			<div className='form text-center'>
				<form className='form-inline'>
					<div className='form-group form-group-lg'>
						<label htmlFor='recipeSearchbox' className='sr-only'>Search Recipes</label>
						<input type='text' className='form-control input-lg text-center lead' id='recipeSearchbox' value={recipeSearch} onChange={handleRecipeSearch.bind(this)} placeholder="Search Recipes"/>
					</div>
				</form>
			</div>
		)
	}
}

export default Form;