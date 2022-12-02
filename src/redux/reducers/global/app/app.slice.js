import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	dark: false,
	persist: false,
};

export const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		SET_THEME: (state) => {
			state.dark = !state.dark;
		},
		SET_PERSIST: (state, action) => {
			state.persist = action.payload;
		},
	},
});

export const { SET_THEME, SET_PERSIST } = appSlice.actions;

export const THEME_MODE = (state) => state.global.app.dark;
