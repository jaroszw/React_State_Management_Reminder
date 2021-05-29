import React, { useState } from 'react';
import CounterContext from './counter-context';

const CounterProvider = (props) => {
  const [counterCount, setCounterCount] = useState(0);

  const incrementCounter = () => {
    setCounterCount((prevCounter) => prevCounter + 1);
  };

  const decrementCounter = () => {
    setCounterCount((prevCounter) => prevCounter - 1);
  };

  const counterContext = {
    counter: counterCount,
    increment: incrementCounter,
    decrement: decrementCounter,
  };

  return (
    <CounterContext.Provider value={counterContext}>
      {props.children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;
