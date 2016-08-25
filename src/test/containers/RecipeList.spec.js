import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { RecipeList } from '../../containers/RecipeList';
import RecipeCard from '../../containers/RecipeCard';

function setup() {
  const props = {
    viewRecipes: [],
    recipes: ['Pierogi', 'Borscht', 'Pancakes'],
  }; 
  const wrapper = shallow(
    <RecipeList {...props} />
  );
  
  return {
    props,
    wrapper
  }
}
  
describe('RecipeList Container', () => {
  const { wrapper, props } = setup();
    
  it('should render self and subcomponents', () => {  
    expect(wrapper.length).toEqual(1);
    expect(wrapper.find('div').length).toEqual(4);
    expect(wrapper.find('div').at(0).hasClass('recipeList')).toEqual(true);
  });
  
  it('view variable should be be recipes if viewRecipes is empty', () => {
    expect(wrapper.find(RecipeCard).length).toEqual(3);
    expect(wrapper.find(RecipeCard).length).toNotEqual(2);
  });
  
  it('view variable should be be viewRecipes if viewRecipes is not empty', () => {  
    const testProps = {
    	viewRecipes: ['Pierogi', 'Borscht'],
    	recipes: ['Pierogi', 'Borscht', 'Pancakes'],
    }
    const testWrapper = shallow(
      <RecipeList {...Object.assign({}, props, testProps)}/>
    )
    
    expect(testWrapper.find(RecipeCard).length).toEqual(2);
    expect(testWrapper.find(RecipeCard).length).toNotEqual(3);
  });
  
});