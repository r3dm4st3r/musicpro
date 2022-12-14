import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isPlaying: false,
};

export const playerConfigSlice = createSlice({
	name: 'playerConfigSlice',
	initialState,
	reducers: {
		SET_IS_SONG_PLAYING: (state, action) => ({
			...state,
			isPlaying: action.payload,
		}),
	},
});

export const { SET_IS_SONG_PLAYING } = playerConfigSlice.actions;
