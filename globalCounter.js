import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  decrement,
  increment,
  incrementByValue,
  selectCount
} from './src/features/counter/counterSlice';

const GlobalCounter = props => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementValue, setIncrementValue] = useState(2);

  return (
    <div>
      <button aria-label="increment" onClick={() => dispatch(increment())}>
        +
      </button>
      <span>{count}</span>
      <button aria-label="decrement" onClick={() => dispatch(decrement())}>
        -
      </button>
    </div>
  );
};

export default GlobalCounter;
