import { combineReducers } from '@reduxjs/toolkit';
import { homeSlice } from './home/home.slice';

export const musicReducer = combineReducers({
	home: homeSlice.reducer,
});
