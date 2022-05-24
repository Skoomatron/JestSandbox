import React from 'react';
const test = require('./TestButtons.test.jsx');

const TestButtons = () => {

  const test1 = () => {
    console.log('this will be a test')
  }

  return (
    <div>
      <button className='test' onClick={test1}>
        Test 1
      </button>
    </div>
  )
}



export default TestButtons;