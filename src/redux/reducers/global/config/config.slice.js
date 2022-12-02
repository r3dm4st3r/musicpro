import { createSlice } from '@reduxjs/toolkit';
import { POPUP_TYPE } from '../../../constants/popup';

const initialState = {
	popup: {
		playlist: false,
	},
};

export const configSlice = createSlice({
	name: 'config',
	initialState,
	reducers: {
		TOGGLE_POPUP: (state, action) => {
			switch (action.payload) {
				case POPUP_TYPE.PLAYLIST: {
					return Object.assign({}, state, {
						...state,
						popup: {
							...state.popup,
							playlist: !state.popup.playlist,
						},
					});
				}
				default:
					return state;
			}
		},
	},
});

export const { TOGGLE_POPUP } = configSlice.actions;

export const POPUP_PLAYLIST = (state) => state.global.config.popup.playlist;
