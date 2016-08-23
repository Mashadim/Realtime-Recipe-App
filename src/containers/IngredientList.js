import React, { Component, PropTypes } from 'react';
import shallowCompare from 'react/lib/shallowCompare';
import { connect } from 'react-redux';
import Ingredient from '../components/Ingredient';

export class IngredientList extends Component {
	shouldComponentUpdate(nextState) {
    return shallowCompare(this, nextState);
  };
	
	render() {
		const { viewIngredients } = this.props;
		
		let ingredients = viewIngredients.map((ingredient) => {
			return (
				<div key={ingredient}> 
					<Ingredient ingredient={ingredient} />
				</div>
			)
		});
		
		return (
			<div className='text-center ingredientList'>
				<h3 className='general-font'> 
					Ingredients 
				</h3>
				<hr />
				{ ingredients }
			</div> 
		)
	}
};

function mapStateToProps({ viewIngredients = [] } = {}) {
	return { viewIngredients }
};

React.propTypes = {
	viewIngredients: React.PropTypes.array.isRequired
};

export default connect(mapStateToProps)(IngredientList);