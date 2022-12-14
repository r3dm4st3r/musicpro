import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	loading: {
		isLoading: true,
		hasData: false,
		listsData: false,
	},
	lists: [],
	details: {
		thumb: {
			lg: '',
		},
		playlist: {
			dedicated: [],
			featured: [],
		},
	},
};

export const artistSlice = createSlice({
	name: 'artist',
	initialState,
	reducers: {
		SET_ARTIST_DATA: (state, action) => ({
			...state,
			lists: [...action.payload],
			loading: {
				...state.loading,
				listsData: true,
			},
		}),

		SET_ARTIST_LOADING: (state, action) => ({
			...state,
			loading: {
				...state.loading,
				isLoading: action.payload,
			},
		}),

		SET_ARTIST_DETAILS: (state, action) => ({
			...state,
			details: action.payload,
			loading: {
				...state.loading,
				hasData: false,
			},
		}),
	},
});

export const { SET_ARTIST_DATA, SET_ARTIST_DETAILS, SET_ARTIST_LOADING } = artistSlice.actions;
export const ARTIST_LOADING = (state) => state.music.artist.loading;
export const ARTIST_DATA = (state) => state.music.artist.lists;
export const ARTIST_DETAILS = (state) => state.music.artist.details;
