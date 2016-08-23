import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { RecipeCardRating } from '../../components/RecipeCardRating';

function setup() {
  const props = {
    recipeRating: 3,
  }; 
  const wrapper = shallow(
    <RecipeCardRating {...props} />
  );
  
  return {
    props,
    wrapper
  }
}
  
describe('RecipeCardRating Component', () => {
  const { wrapper, props } = setup();
    
  it('should render self and subcomponents', () => {  
    expect(wrapper.length).toEqual(1);
    expect(wrapper.find('div').length).toEqual(1);
    expect(wrapper.find('div').hasClass('recipeCardRating general-font lead general-padding')).toEqual(true);
    expect(wrapper.find('span').first().hasClass('glyphicon glyphicon-star')).toEqual(true);
    expect(wrapper.find('span').first().prop('aria-hidden')).toBe('true');
  });
  
  it('should render star amount according to recipeRating amount', () => {
    expect(wrapper.find('span').length).toEqual(props.recipeRating);
  });
  
});