import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';
// import { useContext } from 'react';
// import CounterContetx from '../ContextApi/counter-context';
import { counterActions } from '../slice/counterSlice';
import React from 'react';
import { render } from '@testing-library/react';
import { connect } from 'react-redux';

const Counter = () => {
  //Use Slice Reducer
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  // Use Context API
  // const counterCtx = useContext(CounterContetx);
  // console.log(counterCtx);

  //Use Redux
  // const dispatch = useDispatch();
  // const counter = useSelector((state) => state.counter);

  const incrementHandler = () => {
    // dispatch({ type: 'INCREMENT' });
    // counterCtx.increment();
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    // dispatch({ type: 'DECREMENT' });
    // counterCtx.decrement();
    dispatch(counterActions.decrement());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button>Toggle Counter</button>
    </main>
  );
};

//Class component
// class Counter extends React.Component {
//   incrementHandler = () => {
//     this.props.increment();
//   };

//   decrementHandler = () => {
//     this.props.decrement();
//   };

//   render(props) {
//     console.log(this.props);
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: 'INCREMENT' }),
//     decrement: () => dispatch({ type: 'DECREMENT' }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export default Counter;
