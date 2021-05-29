import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counterSlice';

const store = configureStore(counterSlice);

// dla większej liczby plastrów
// const store = configureStore({ counter: counterSlice, another: anotherSlice });

export default store;
