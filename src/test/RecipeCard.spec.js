import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { RecipeCard } from '../components/RecipeCard';

function setup() {
  const props = {
    recipeImage: '../../images/pancakes.jpg',
    recipeName: 'Pancakes',
    recipeRating: 3,
    recipeCookTime: 25,
    recipeType: 'American',
    handleRecipeChecked: () => {}
  }; 
  const wrapper = shallow(
    <RecipeCard {...props} />
  );
  
  return {
    props,
    wrapper
  }
}
  
describe('RecipeCard Component', () => {
  const { wrapper, props } = setup();
    
  it('should render self and subcomponents', () => {  
    expect(wrapper.length).toEqual(1);
    expect(wrapper.find('div').length).toEqual(1);
    expect(wrapper.find('div').at(0).hasClass('recipeCard')).toEqual(true);
    expect(wrapper.find('RecipeCardImage').length).toEqual(1);
    expect(wrapper.find('RecipeCardImage').prop('recipeImage')).toBe(props.recipeImage);
    expect(wrapper.find('RecipeCardInfo').length).toEqual(1);
    expect(wrapper.find('RecipeCardInfo').prop('handleRecipeChecked')).toBeA('function');
  });
  
  it('should pass down props according to props received', () => {
    expect(wrapper.find('RecipeCardInfo').prop('recipeName')).toBe(props.recipeName);
    expect(wrapper.find('RecipeCardInfo').prop('recipeRating')).toBe(props.recipeRating);
    expect(wrapper.find('RecipeCardInfo').prop('recipeType')).toBe(props.recipeType);
    expect(wrapper.find('RecipeCardInfo').prop('handleRecipeChecked')).toBe(props.handleRecipeChecked);
  });
  
});