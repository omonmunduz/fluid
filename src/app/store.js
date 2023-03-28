import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import componentListReducer from '../components/organisms/componentList/componentListSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    componentList: componentListReducer,
  },
});
