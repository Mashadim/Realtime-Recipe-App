import React, { Component } from 'react';

class RecipeCardRating extends Component {
	render() {
		const { recipeRating } = this.props;
		let rating = [];
		for(var i=0; i<recipeRating; i++) {
			rating.push(
				<span className="glyphicon glyphicon-star" aria-hidden="true"></span>
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