import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { recipeCheck, recipeUncheck } from '../redux/actions/actions';

export class RecipeCardCheckbox extends Component {
	handleRecipeChecked(event) {
		event.target.checked ? this.props.recipeCheck(event.target.value) : this.props.recipeUncheck(event.target.value);
	}
	
	render() {
		const { recipeName, recipesChecked } = this.props;
    let isChecked = recipesChecked[recipeName];
		
		return (
			<div className='recipeCardCheckbox'>
				<div className='recipeCardCheckbox-question lead text-center'>
					Mmmmm...{recipeName}.
				</div>
				<hr />
				<form className='form-inline text-center'>
					<label className='checkbox-inline'>
						<input type='checkbox' className='checkbox' id={recipeName} value={recipeName} defaultChecked={isChecked} onChange={this.handleRecipeChecked.bind(this)} />
						<span className='recipeCardCheckbox-word lead text-center'> 
							View Ingredients
						</span>
					</label>
				</form>
			</div>
		)
	}
}

function mapStateToProps({ recipesChecked = {} } = {}) {
	return { recipesChecked }
}

RecipeCardCheckbox.propTypes = {
	recipeName: PropTypes.string.isRequired,
	recipesChecked: PropTypes.object,
	onChange: PropTypes.func.isRequired,
	handleRecipeChecked: PropTypes.func.isRequired,
  recipeCheck: React.PropTypes.func.isRequired,
  recipeUnCheck: React.PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { recipeCheck, recipeUncheck })(RecipeCardCheckbox);