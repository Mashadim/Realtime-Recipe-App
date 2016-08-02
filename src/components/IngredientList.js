import React, { Component } from 'react';
import Ingredient from './Ingredient';

class IngredientList extends Component {
	render() {
		const { viewIngredients } = this.props;
		return (
			<div className='text-center ingredientList'>
				<h3 className='ingredientList-title general-font'> Ingredients </h3>
				<hr />
				{
					viewIngredients.map((ingredient) => {
						return (
							<div key={ingredient}> 
								<Ingredient ingredient={ingredient} />
							</div>
						)
					})
				}
			</div> 
		)
	}
}

export default IngredientList;