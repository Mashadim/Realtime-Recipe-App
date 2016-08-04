import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { RecipeCardCheckbox } from '../components/RecipeCardCheckbox';

function setup() {
  const props = {
    recipeName: 'Pancakes',
    handleRecipeChecked: expect.createSpy(),
  }; 
  const wrapper = shallow(
    <RecipeCardCheckbox {...props} />
  );
  
  return {
    props,
    wrapper
  }
}
  
describe('RecipeCardCheckbox Component', () => {
  const { wrapper, props } = setup();
    
  it('should render self and subcomponents', () => {  
    expect(wrapper.length).toEqual(1);
    expect(wrapper.find('div').length).toEqual(2);
    expect(wrapper.find('div').at(0).hasClass('recipeCardCheckbox')).toEqual(true);
    expect(wrapper.find('div').at(1).hasClass('recipeCardCheckbox-question lead text-center')).toEqual(true);
    expect(wrapper.find('div').at(1).text()).toBe(`Mmmmm...${props.recipeName}.`);
    expect(wrapper.find('hr').length).toEqual(1);
    expect(wrapper.find('form').length).toEqual(1);
    expect(wrapper.find('form').hasClass('form-inline text-center')).toEqual(true);
    expect(wrapper.find('label').length).toEqual(1);
    expect(wrapper.find('label').hasClass('checkbox-inline')).toEqual(true);
    expect(wrapper.find('input').length).toEqual(1);
    expect(wrapper.find('input').hasClass('checkbox')).toEqual(true);
    expect(wrapper.find('input').prop('id')).toBe(props.recipeName);
    expect(wrapper.find('input').prop('value')).toBe(props.recipeName);
    expect(wrapper.find('span').length).toEqual(1);
    expect(wrapper.find('span').hasClass('recipeCardCheckbox-word lead text-center')).toEqual(true);
    expect(wrapper.find('span').text()).toBe('View Ingredients');
    expect(wrapper.find('span').text()).toNotBe('Eat Ingredients');
  });
  
  it('should call handleRecipeChecked function when clicked', () => {
    expect(props.handleRecipeChecked.calls.length).toEqual(0);
    wrapper.find('input').simulate('click');
    expect(props.handleRecipeChecked.calls.length).toEqual(1);
    wrapper.find('input').simulate('click');
    expect(props.handleRecipeChecked.calls.length).toEqual(2);
  })
  
});