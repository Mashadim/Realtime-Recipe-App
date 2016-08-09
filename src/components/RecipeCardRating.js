import React, { Component } from 'react';

export class RecipeCardRating extends Component {
	render() {
		const { recipeRating } = this.props;
		let rating = [];
		for(var i=0; i<recipeRating; i++) {
			rating.push(
				<div key={i+1} className='glyphicon glyphicon-star' aria-hidden='true'></div>
			)
		}	
		return (
			<div className='recipeCardRating general-font lead general-padding'>
				{rating}
			</div>
		)
	}
}

export default RecipeCardRating;