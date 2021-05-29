import { createStore } from 'redux';

const initialState = {
  counter: 1,
};

const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT': {
      return {
        counter: state.counter + 1,
      };
    }

    case 'DECREMENT': {
      return {
        counter: state.counter - 1,
      };
    }
    default: {
      return state;
    }
  }
};

const store = createStore(CounterReducer);

export default store;
