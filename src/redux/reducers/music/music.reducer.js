import { combineReducers } from '@reduxjs/toolkit';
import { homeSlice } from './home/home.slice';
import { albumSlice } from './album/album.slice';

export const musicReducer = combineReducers({
	home: homeSlice.reducer,
	album: albumSlice.reducer,
});
