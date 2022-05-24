import TestButtons from './TestButtons.jsx';
import React from 'react';
import shallow from 'react-test-renderer';

it('should console log when clicked', () => {
  const button = shallow(<TestButtons>Test</TestButtons>);
  button.find('.test').simulate('click');
  // expect(button.onClick).toBe('this will be a test')
})