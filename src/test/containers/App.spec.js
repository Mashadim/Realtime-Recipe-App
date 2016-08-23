import React from 'react';
import expect, { createSpy, spyOn } from 'expect';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import theStore from '../../redux/store';
import reducer from '../../redux/reducer';
import { App } from '../../containers/App';
import Form from '../../containers/Form';
import RecipeList from '../../containers/RecipeList';
import IngredientList from '../../containers/IngredientList';

function setup() {
	const props = {
    recipeSearch: '', 
    recipes: [],
    recipesChecked: {},
    viewRecipes: [],
    viewIngredients: [],
		getData: expect.createSpy(),
  }; 
	
  const wrapper = shallow(
		<App {...props} />
  );
		
	const storeWrapper = mount(
		<Provider store={createStore(reducer)}>
			<App {...props} />
		</Provider>
  );

  return {
    props,
		wrapper,
		storeWrapper,
  }
}

describe('App Container', () => {
  let wrapper;
	let storeWrapper;
	let props;
	
	beforeEach(() => {
		({ props, wrapper, storeWrapper } = setup());
	})
	
	// working on this one
	it('should call componentDidMount', () => {
		let app = mount(
			<App getData={expect.createSpy()} {...props} />, 
		);
		expect(app.props.getData).toHaveBeenCalled();
		expect(app.props.getData.calls.length).toEqual(1);
	});
	
  it('should render self and subcomponents', () => { 
    expect(wrapper.length).toEqual(1);
    expect(wrapper.find(Form).length).toEqual(1);
    expect(wrapper.find(RecipeList).length).toEqual(1);
    expect(wrapper.find(IngredientList).length).toEqual(1);
    expect(wrapper.find('div').at(0).hasClass('container container-div')).toEqual(true);
    expect(wrapper.find('div').at(1).hasClass('row')).toEqual(true);
    expect(wrapper.find('div').at(2).hasClass('col-xs-7')).toEqual(true);
    expect(wrapper.find('div').at(3).hasClass('col-xs-5')).toEqual(true);
  });
  
});
