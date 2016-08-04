import React, { Component } from 'react';

export class Ingredient extends Component {
	render() {
		const { ingredient } = this.props;
		return (
			<div className='ingredient general-font'>
				<h4>{ingredient}</h4>
			</div> 
		)
	}
}

export default Ingredient;