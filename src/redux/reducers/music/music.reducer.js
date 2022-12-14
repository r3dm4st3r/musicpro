import { combineReducers } from '@reduxjs/toolkit';
import { homeSlice } from './home/home.slice';
import { albumSlice } from './album/album.slice';
import { artistSlice } from './artist/artist.slice';
import { playlistSlice } from './playlist/playlist.slice';

export const musicReducer = combineReducers({
	home: homeSlice.reducer,
	album: albumSlice.reducer,
	artist: artistSlice.reducer,
	playlist: playlistSlice.reducer,
});
