import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	loading: {
		isLoading: true,
		hasData: false,
	},
	song: {
		id: '',
		title: '',
		url: {
			high: '',
		},
		thumb: { sm: '', lg: '' },
		duration: '',
	},
};

export const playingSlice = createSlice({
	name: 'playingSlice',
	initialState,
	reducers: {
		SET_CURRENTLY_PLAYING: (state, action) => ({
			...state,
			loading: {
				isLoading: false,
				hasData: true,
			},
			song: action.payload,
		}),
	},
});

export const { SET_CURRENTLY_PLAYING } = playingSlice.actions;

export const CURRENTLY_PLAYING_SONG = (state) => state.player.playing;
