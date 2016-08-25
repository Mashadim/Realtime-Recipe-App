import React from 'react';
import expect, { createSpy } from 'expect';
import { shallow, mount } from 'enzyme';
import theStore from '../../redux/store';
import { Form } from '../../containers/Form';

function setup() {
  const props = {
    recipeSearch: '', 
		findRecipe: () => {},
    handleRecipeSearch: expect.createSpy(),
  }; 
  const wrapper = shallow(
    <Form {...props} />
  );
	const testWrapper = mount(
		<Form {...props} onChange={props.handleRecipeSearch} />
	)
  return {
		props,
    wrapper,
		testWrapper
  }
};

describe('Form Container', () => {
	let props;
	let wrapper;
	let testWrapper;
	
	beforeEach(() => {
		({ props, wrapper, testWrapper } = setup());
	});
    
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
		testWrapper.props().onChange('enchiladas');
		expect(props.handleRecipeSearch).toHaveBeenCalled();
		expect(props.handleRecipeSearch.calls.length).toEqual(1);
		
		testWrapper.props().onChange('pierogi');
		expect(props.handleRecipeSearch).toHaveBeenCalled();
		expect(props.handleRecipeSearch.calls.length).toEqual(2);
  })
	
	it('should track calls of handleRecipeSearch function', () => {
		testWrapper.props().onChange('enchiladas');
		testWrapper.props().onChange('pierogi');
		
		expect(props.handleRecipeSearch.calls[0].arguments[0]).toBe('enchiladas')
		expect(props.handleRecipeSearch.calls[1].arguments[0]).toBe('pierogi')
	});
});