import { createSlice } from '@reduxjs/toolkit';
import { POPUP_TYPE } from '../../../constants/popup';

const initialState = {
	greetings: [
		[0, 'Hey!, Mid Night Monster! 😍'],
		[1, 'Howdy, Night Master! 🙂'],
		[2, 'Hey, Take Rest! 🙂'],
		[4, 'Woah!, Early Bird! 😍'],
		[7, 'Hey, Fresh Morning! 😍'],
		[12, 'Hey, Good Afternoon! 😻'],
		[17, 'Good Evening Mate 😺'],
		[20, 'Welcome to spicy evening 😉'],
		[21, 'Woah! Funky Funky Night...🤤'],
		[22, 'Hey, Working Late Mate 😉'],
	],
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
export const GREETINGS = (state) => state.global.config.greetings;
