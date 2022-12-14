import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	loading: {
		isLoading: true,
		hasData: false,
		listsData: false,
	},
	lists: [],
	details: {
		id: '',
		title: '',
		subtitle: '',
		description: '',
		type: '',
		thumb: [],
		songs: [],
		artists: [],
		language: '',
		year: '',
		song_count: '',
		copyright: '',
	},
};

export const albumSlice = createSlice({
	name: 'album',
	initialState,
	reducers: {
		SET_ALBUM_DATA: (state, action) => ({
			...state,
			lists: [...action.payload],
			loading: {
				...state.loading,
				listsData: true,
			},
		}),

		SET_ALBUM_LOADING: (state, action) => ({
			...state,
			loading: {
				...state.loading,
				isLoading: action.payload,
			},
		}),

		SET_ALBUM_DETAILS: (state, action) => ({
			...state,
			details: action.payload,
			loading: {
				...state.loading,
				hasData: false,
			},
		}),
	},
});

export const { SET_ALBUM_DATA, SET_ALBUM_DETAILS, SET_ALBUM_LOADING } = albumSlice.actions;
export const ALBUM_LOADING = (state) => state.music.album.loading;
export const ALBUM_DATA = (state) => state.music.album.lists;
export const ALBUM_DETAILS = (state) => state.music.album.details;
