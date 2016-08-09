import React, { Component } from 'react';
import shallowCompare from 'react/lib/shallowCompare';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../redux/actions/actions';
import Form from './Form';
import RecipeList from './RecipeList';
import IngredientList from './IngredientList';

export class App extends Component {
	constructor(props) {
		super(props);
		this.handleRecipeSearch = this.handleRecipeSearch.bind(this);
		this.handleRecipeChecked = this.handleRecipeChecked.bind(this);
	}
	
	shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }
	
	componentDidMount() {
		const dataRqst = new Request('/static/recipes.json', { method: 'GET' });
		this.props.actions.getData(dataRqst);
	}
	
	handleRecipeSearch(event) {
		this.props.actions.findRecipe(event.target.value);
	}
	
	handleRecipeChecked(event) {
		event.target.checked ? this.props.actions.recipeCheck(event.target.value) : this.props.actions.recipeUncheck(event.target.value);
	}
	
	render() {
		const { recipeSearch, viewIngredients, viewRecipes, recipesChecked, recipes } = this.props;
		return (
			<div className='container container-div'>
				<Form recipeSearch={recipeSearch} handleRecipeSearch={this.handleRecipeSearch} />
				<div className="row">
  					<div className="col-xs-7">
						<RecipeList viewRecipes={viewRecipes} recipes={recipes} handleRecipeChecked={this.handleRecipeChecked} recipesChecked={recipesChecked} />
					</div>
  					<div className="col-xs-5">
						<IngredientList viewIngredients={viewIngredients} />
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return state
};

const mapDispatchToProps = (dispatch) => { 
	return {
		actions: bindActionCreators(actions, dispatch)
	} 
};

export default connect(mapStateToProps, mapDispatchToProps)(App);