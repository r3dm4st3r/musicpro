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
		thumb: { lg: '', sm: '' },
		songs: [],
		artists: [],
		language: '',
		year: '',
		song_count: '',
		copyright: '',
		lists: [],
	},
};

export const playlistSlice = createSlice({
	name: 'playlist',
	initialState,
	reducers: {
		SET_PLAYLIST_DATA: (state, action) => ({
			...state,
			lists: [...action.payload],
			loading: {
				...state.loading,
				listsData: true,
			},
		}),

		SET_PLAYLIST_LOADING: (state, action) => ({
			...state,
			loading: {
				...state.loading,
				isLoading: action.payload,
			},
		}),

		SET_PLAYLIST_DETAILS: (state, action) => {
			return Object.assign({}, state, {
				...state,
				details: {
					...action.payload,
					lists: action.payload,
				},
				loading: {
					...state.loading,
					hasData: false,
				},
			});
		},
	},
});

export const { SET_PLAYLIST_DATA, SET_PLAYLIST_DETAILS, SET_PLAYLIST_LOADING } =
	playlistSlice.actions;
export const PLAYLIST_LOADING = (state) => state.music.playlist.loading;
export const PLAYLIST_DATA = (state) => state.music.playlist.lists;
export const PLAYLIST_DETAILS = (state) => state.music.playlist.details;
