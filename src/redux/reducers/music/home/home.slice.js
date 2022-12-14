import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	new_trending: [],
	new_albums: [],
	top_playlists: [],
	charts: [],
	discover: [],
	artist_radio: [],
	radio: [],
	hasData: false,
};

export const homeSlice = createSlice({
	name: 'home',
	initialState,
	reducers: {
		SET_HOME_DATA: (state, action) => ({
			...state,
			...action.payload,
			hasData: true,
		}),
	},
});

export const { SET_HOME_DATA } = homeSlice.actions;
export const HOME_DATA = (state) => state.music.home;
export const HOME_HAS_DATA = (state) => state.music.home.hasData;
