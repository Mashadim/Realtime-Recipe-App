import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getData } from '../redux/actions/actions';
import Form from './Form';
import RecipeList from './RecipeList';
import IngredientList from './IngredientList';

export class App extends Component {
	componentDidMount() {
		this.props.getData();
	}
	
	render() {
		return (
			<div className='container container-div'>
				<Form />
				<div className="row">
  					<div className="col-xs-7">
						<RecipeList />
					</div>
  					<div className="col-xs-5">
						<IngredientList />
					</div>
				</div>
			</div>
		)
	}
};

App.propTypes = {
	getData: React.PropTypes.func.isRequired
};

export default connect(null, { getData })(App);