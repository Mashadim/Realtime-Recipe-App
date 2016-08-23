import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { RecipeCardImage } from '../../components/RecipeCardImage';

function setup() {
  const props = {
    recipeImage: '../../images/pancakes.jpg',
  }; 
  const wrapper = shallow(
    <RecipeCardImage {...props} />
  );
  
  return {
    props,
    wrapper
  }
}
  
describe('RecipeCardImage Component', () => {
  const { wrapper, props } = setup();
    
  it('should render self and subcomponents', () => {  
    expect(wrapper.length).toEqual(1);
    expect(wrapper.find('div').length).toEqual(1);
    expect(wrapper.find('div').at(0).hasClass('recipeCardImageDiv')).toEqual(true);
    expect(wrapper.find('img').length).toEqual(1);
    expect(wrapper.find('img').at(0).hasClass('recipeCardImage img-responsive center-block')).toEqual(true);
  });
  
  it('should render recipeImage prop received in src attribute', () => {
    expect(wrapper.find('img').prop('src')).toBe(props.recipeImage);
  });
  
});