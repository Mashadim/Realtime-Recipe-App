import React, { Component } from 'react';

class RecipeCardExtraInfo extends Component {
	render() {
		const { recipeCookTime, recipeType } = this.props;
		return (
			<div className='recipeCardExtraInfo lead general-padding'>
				<span className="glyphicon glyphicon-time" aria-hidden="true"></span> 
				{recipeCookTime} min <br />
				Flavor: {recipeType}
			</div>
		)
	}
}

export default RecipeCardExtraInfo;