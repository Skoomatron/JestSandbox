import React from 'react';

const TestButtons = () => {

  const test1 = () => {
    console.log('this will be a test')
  }

  return (
    <div>
      <button onClick={test1}>
        Test 1
      </button>
    </div>
  )
}

export default TestButtons;