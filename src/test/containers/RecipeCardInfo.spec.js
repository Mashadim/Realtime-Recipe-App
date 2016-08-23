import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { RecipeCardInfo } from '../../containers/RecipeCardInfo';
import RecipeCardCheckbox from '../../containers/RecipeCardCheckbox';
import RecipeCardRating from '../../components/RecipeCardRating';
import RecipeCardExtraInfo from '../../components/RecipeCardExtraInfo';

function setup() {
  const props = {
    recipeName: 'Pancakes',
    recipeRating: 3,
    recipeCookTime: 25,
    recipeType: 'American',
  }; 
  const wrapper = shallow(
    <RecipeCardInfo {...props} />
  );
  
  return {
    props,
    wrapper
  }
}
  
describe('RecipeCardInfo Container', () => {
  const { wrapper, props } = setup();
    
  it('should render self and subcomponents', () => {  
    expect(wrapper.length).toEqual(1);
    expect(wrapper.find('div').length).toEqual(5);
    expect(wrapper.find('div').at(0).hasClass('recipeCardInfo')).toEqual(true);
    expect(wrapper.find('div').at(1).hasClass('recipeName general-font general-padding')).toEqual(true);
    expect(wrapper.find('div').at(2).hasClass('row')).toEqual(true);
    expect(wrapper.find('div').at(3).hasClass('col-md-6')).toEqual(true);
    expect(wrapper.find('div').at(3).childAt(0).type()).toBe(RecipeCardRating);
    expect(wrapper.find('div').at(3).childAt(1).type()).toBe(RecipeCardExtraInfo);
    expect(wrapper.find('div').at(4).hasClass('col-md-6')).toEqual(true);
    expect(wrapper.find('div').at(4).childAt(0).type()).toBe(RecipeCardCheckbox);
  });
  
  it('should pass down props according to props received', () => {
    expect(wrapper.find('div').at(1).text()).toBe(props.recipeName);
    expect(wrapper.find(RecipeCardRating).prop('recipeRating')).toBe(props.recipeRating);
    expect(wrapper.find(RecipeCardExtraInfo).prop('recipeCookTime')).toBe(props.recipeCookTime);
    expect(wrapper.find(RecipeCardExtraInfo).prop('recipeType')).toBe(props.recipeType);
    expect(wrapper.find(RecipeCardCheckbox).prop('recipeName')).toBe(props.recipeName);
  });
  
});