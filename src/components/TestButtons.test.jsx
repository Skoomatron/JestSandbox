import TestButtons from './TestButtons.jsx';
import React from 'react';
import {mount} from 'enzyme';

describe('Component', () => {

  it('should have a clickable button', () => {
    const testing = jest.fn();
    const element = mount(<TestButtons onClick={testing}/>);
    element.find('button').simulate('click');
    expect(testing).toHaveBeenCalled();
  })
})