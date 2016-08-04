import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { App } from '../components/App';

function setup() {
  const props = {
    recipeSearch: '', 
    recipes: [],
    recipesChecked: {},
    viewRecipes: [],
    viewIngredients: []
  }; 
  const wrapper = shallow(
    <App {...props} />
  );
  return {
    props,
    wrapper
  }
}

describe('App Component', () => {
  const { wrapper, props } = setup();
  
  it('should render self and subcomponents', () => {  
    expect(wrapper.length).toEqual(1);
    expect(wrapper.find('Form').length).toEqual(1);
    expect(wrapper.find('RecipeList').length).toEqual(1);
    expect(wrapper.find('RecipeListss').length).toEqual(0);
    expect(wrapper.find('IngredientList').length).toEqual(1);
    expect(wrapper.find('div').at(0).hasClass('container container-div')).toEqual(true);
    expect(wrapper.find('div').at(1).hasClass('row')).toEqual(true);
    expect(wrapper.find('div').at(2).hasClass('col-xs-7')).toEqual(true);
    expect(wrapper.find('div').at(3).hasClass('col-xs-5')).toEqual(true);
  });
  
  
  it('should pass type-case tests for subcomponents\'s props', () => {;
    expect(wrapper.find('Form').prop('recipeSearch')).toBe('');
    expect(wrapper.find('Form').prop('recipeSearch')).toNotBe('random words here');
    expect(wrapper.find('Form').prop('handleRecipeSearch')).toBeA('function');
    expect(wrapper.find('RecipeList').prop('viewRecipes')).toBeA('array');
    expect(wrapper.find('RecipeList').prop('recipes')).toBeA('array');
    expect(wrapper.find('RecipeList').prop('handleRecipeChecked')).toBeA('function');
    expect(wrapper.find('Form').prop('handleRecipeSearch')).toBeA('function');
    expect(wrapper.find('IngredientList').prop('viewIngredients')).toBeA('array');
  });
  
});
