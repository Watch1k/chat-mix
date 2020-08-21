import { combineReducers } from '@reduxjs/toolkit';
import * as slices from '../slices';

export const rootReducer = combineReducers({
  auth: slices.authSlice.reducer,
});
