import React from 'react';
import expect from 'expect';
import { shallow, mount } from 'enzyme';
import { IngredientList } from '../../containers/IngredientList';
import Ingredient from '../../components/Ingredient';

function setup() {
  const props = {
    viewIngredients: []
  }; 
  const wrapper = shallow(
    <IngredientList {...props} />
  );

  return {
    props,
    wrapper
  }
}
  
describe('IngredientList Container', () => {
  const { wrapper, props } = setup();
    
  it('should render self and subcomponents', () => {  
    expect(wrapper.length).toEqual(1);
    expect(wrapper.find('div').length).toEqual(1);
    expect(wrapper.find('div').at(0).hasClass('text-center ingredientList')).toEqual(true);
    expect(wrapper.find('h3').text()).toEqual('Ingredients');
    expect(wrapper.find('h3').hasClass('general-font')).toEqual(true);
    expect(wrapper.find('hr').length).toEqual(1);
  });
  
  it('should not render Ingredient Component when viewIngredients array is empty', () => {
    expect(wrapper.find('div.ingredient').length).toEqual(0);
    expect(wrapper.find('Ingredient').length).toEqual(0);
    
  });
  
  it('should render Ingredient Component when viewIngredients array is not empty', () => {
    const testProps = {
      viewIngredients: ['potato', 'tomato']
    }
    const testWrapper = mount(
     <IngredientList {...testProps} />
    );
	
    expect(testWrapper.find('div.ingredient').length).toEqual(2);
    expect(testWrapper.find(Ingredient).length).toEqual(2);
  });
  
});