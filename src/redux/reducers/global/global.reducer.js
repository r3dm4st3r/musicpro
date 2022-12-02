import { combineReducers } from '@reduxjs/toolkit';
import { appSlice } from './app/app.slice';
import { configSlice } from './config/config.slice';

export const globalReducer = combineReducers({
	app: appSlice.reducer,
	config: configSlice.reducer,
});
