import React from 'react';
import expect, { createSpy } from 'expect';
import { shallow, mount } from 'enzyme';
import { RecipeCardCheckbox } from '../../containers/RecipeCardCheckbox';

function setup() {
  const props = {
    recipeName: 'Pancakes',
    recipesChecked: {},
		recipeCheck: () => {},
		recipeUnCheck: () => {},
		handleRecipeChecked: expect.createSpy()
  }; 
	
  const wrapper = shallow(
    <RecipeCardCheckbox {...props} />
  );
	
	const testWrapper = mount(
		<RecipeCardCheckbox {...props} onChange={props.handleRecipeChecked} />
  );
  
  return {
    props,
    wrapper,
		testWrapper
  }
};
  
describe('RecipeCardCheckbox Container', () => {

	const { props, wrapper, testWrapper } = setup();
	
    
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
    testWrapper.props().onChange(true);
		expect(props.handleRecipeChecked).toHaveBeenCalled();
    expect(props.handleRecipeChecked.calls.length).toEqual(1);
		
    testWrapper.props().onChange(false);
		expect(props.handleRecipeChecked).toHaveBeenCalled();
    expect(props.handleRecipeChecked.calls.length).toEqual(2);
  });
  
  it('should have recipe equal undefined and not checked if recipe not inside recipeChecked', () => {
    expect(wrapper.find('input').prop('checked')).toEqual(undefined);
  }); 
  
  it('should have recipe equal true and checked if recipe inside recipeChecked', () => {
    const testProps = {
      recipeName: 'Pancakes',
      recipesChecked: {Pancakes: true},
			recipeCheck: () => {},
			recipeUnCheck: () => {},
			handleRecipeChecked: expect.createSpy()
    }
    const testWrapper = mount(
      <RecipeCardCheckbox {...Object.assign({}, props, testProps)}/>
    )
    expect(testWrapper.find('input').prop('defaultChecked')).toBeA('boolean');
    expect(testWrapper.find('input').prop('defaultChecked')).toEqual(true);
  });

});