import React, { Component, PropTypes } from 'react';
import shallowCompare from 'react/lib/shallowCompare';
import { connect } from 'react-redux';
import { findRecipe } from '../redux/actions/actions';

export class Form extends Component {	
	shouldComponentUpdate(nextProps, nextState) {
		return shallowCompare(this, nextProps, nextState);
	};
	
	handleRecipeSearch(event) {
		this.props.findRecipe(event.target.value);
	};
	
	render() {
		const { recipeSearch } = this.props;

		return (
			<div className='form text-center'>
				<form className='form-inline'>
					<div className='form-group form-group-lg'>
						<label htmlFor='recipeSearchbox' className='sr-only'>Search Recipes</label>
						<input type='text' className='form-control input-lg text-center lead' id='recipeSearchbox' value={recipeSearch} onChange={this.handleRecipeSearch.bind(this)} placeholder="Search Recipes"/>
					</div>
				</form>
			</div>
		)
	}
};

function mapStateToProps({ recipeSearch = '' } = {}) {
	return { recipeSearch }
};

Form.propTypes = {
	handleRecipeSearch: React.PropTypes.func,
	recipeSearch: React.PropTypes.string.isRequired,
  findRecipe: React.PropTypes.func.isRequired
};

export default connect(mapStateToProps, { findRecipe })(Form);