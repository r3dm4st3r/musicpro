import { combineReducers } from '@reduxjs/toolkit';
import { playerConfigSlice } from './config.slice';
import { playingSlice } from './playing.slice';

export const playerReducer = combineReducers({
	config: playerConfigSlice.reducer,
	playing: playingSlice.reducer,
});
