import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { Ingredient } from '../components/Ingredient';

function setup() {
  const props = {
    ingredient: 'potato'
  }; 
  const wrapper = shallow(
    <Ingredient {...props} />
  );
  
  return {
    props,
    wrapper
  }
}
  
describe('Ingredient Component', () => {
  const { wrapper, props } = setup();
    
  it('should render self and subcomponents', () => {  
    expect(wrapper.length).toEqual(1);
    expect(wrapper.find('div').length).toEqual(1);
    expect(wrapper.find('div').at(0).hasClass('ingredient general-font')).toEqual(true);
    expect(wrapper.find('h4').text()).toEqual(props.ingredient);
  });
  
});