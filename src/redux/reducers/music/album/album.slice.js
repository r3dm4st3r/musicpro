import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	hasData: false,
	data: [],
};

export const albumSlice = createSlice({
	name: 'album',
	initialState,
	reducers: {
		SET_ALBUM_DATA: (state, action) => ({
			...state,
			data: [...action.payload],
			hasData: true,
		}),
	},
});

export const { SET_ALBUM_DATA } = albumSlice.actions;
export const ALBUM_DATA = (state) => state.music.album;
export const ALBUM_HAS_DATA = (state) => state.music.album.hasData;
