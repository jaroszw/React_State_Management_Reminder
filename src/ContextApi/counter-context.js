import React from 'react';

const CounterContext = React.createContext({
  counter: 0,
  increment: () => {},
  decrement: () => {},
});

export default CounterContext;
