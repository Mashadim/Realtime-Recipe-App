import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { Form } from '../components/Form';

function setup() {
  const props = {
    recipeSearch: '', 
    viewRecipes: [],
    handleRecipeSearch: expect.createSpy(),
  }; 
  const wrapper = shallow(
    <Form {...props} />
  );
  return {
    props,
    wrapper
  }
}

describe('Form Component', () => {
  const { wrapper, props } = setup();
    
  it('should render self and subcomponents', () => {  
    expect(wrapper.length).toEqual(1);
    expect(wrapper.find('div').length).toEqual(2);
    expect(wrapper.find('div').at(0).hasClass('form text-center')).toEqual(true);
    expect(wrapper.find('div').at(1).hasClass('form-group form-group-lg')).toEqual(true);
    expect(wrapper.find('label').text()).toEqual('Search Recipes');
    expect(wrapper.find('form').length).toEqual(1);
    expect(wrapper.find('form').hasClass('form-inline')).toEqual(true);
    expect(wrapper.find('input').length).toEqual(1);
    expect(wrapper.find('input').prop('value')).toEqual(props.recipeSearch);
    expect(wrapper.find('input').prop('onChange')).toBeA('function');
    expect(wrapper.find('input').prop('placeholder')).toEqual('Search Recipes');
    expect(wrapper.find('input').hasClass('form-control input-lg text-center lead')).toEqual(true);
  });
  
  it('should call handleRecipeSearch function when onChange is triggered', () => {
    const input = wrapper.find('input');
    
    expect(props.handleRecipeSearch.calls.length).toEqual(0);
    wrapper.find('input').simulate('change');
    expect(props.handleRecipeSearch.calls.length).toEqual(1);
    wrapper.find('input').simulate('change');
    expect(props.handleRecipeSearch.calls.length).toEqual(2);
    input.props().onChange('enchiladas');
    expect(props.handleRecipeSearch.calls.length).toEqual(3);
    input.props().onChange('pierogi');
    expect(props.handleRecipeSearch.calls.length).toEqual(4);
  })
  
  it('should track calls of handleRecipeSearch function', () => {
    expect(props.handleRecipeSearch.calls[2].arguments).toEqual(['enchiladas'])
    expect(props.handleRecipeSearch.calls[3].arguments).toEqual(['pierogi'])
  });
});