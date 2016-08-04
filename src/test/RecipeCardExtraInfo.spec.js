import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { RecipeCardExtraInfo } from '../components/RecipeCardExtraInfo';

function setup() {
  const props = {
    recipeCookTime: 25,
    recipeType: 'American'
  }; 
  const wrapper = shallow(
    <RecipeCardExtraInfo {...props} />
  );
  
  return {
    props,
    wrapper
  }
}
  
describe('RecipeCardExtraInfo Component', () => {
  const { wrapper, props } = setup();
    
  it('should render self and subcomponents', () => {  
    expect(wrapper.length).toEqual(1);
    expect(wrapper.find('div').length).toEqual(1);
    expect(wrapper.find('div').hasClass('recipeCardExtraInfo lead general-padding')).toEqual(true);
    expect(wrapper.find('span').hasClass('glyphicon glyphicon-time')).toEqual(true);
    expect(wrapper.find('span').prop('aria-hidden')).toEqual('true');
  });
  
  it('should render props according to info passed', () => {
    expect(wrapper.find('div').childAt(1).text()).toEqual(props.recipeCookTime);
     expect(wrapper.find('div').childAt(5).text()).toBe(props.recipeType);
  });
  
});