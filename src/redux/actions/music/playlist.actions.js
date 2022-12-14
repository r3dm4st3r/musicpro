import ax from '../../../api/axios';
import {
	SET_PLAYLIST_DATA,
	SET_PLAYLIST_DETAILS,
	SET_PLAYLIST_LOADING,
} from '../../reducers/music/playlist/playlist.slice';

const TRIGGER_PLAYLIST_DATA = () => async (dispatch) => {
	dispatch(SET_PLAYLIST_LOADING(true));
	return await ax
		.post('/playlist')
		.then((response) => {
			dispatch(SET_PLAYLIST_DATA(response.data.data));
		})
		.catch((error) => {
			console.log('error', error);
		})
		.finally(() => {
			dispatch(SET_PLAYLIST_LOADING(false));
		});
};

const TRIGGER_PLAYLIST_DETAILS_DATA = (id) => async (dispatch) => {
	dispatch(SET_PLAYLIST_LOADING(true));
	return await ax
		.post(`/playlist/${id}`)
		.then((response) => {
			dispatch(SET_PLAYLIST_DETAILS(response.data.data));
		})
		.catch((error) => {
			console.log('error', error);
		})
		.finally(() => {
			setTimeout(() => {
				dispatch(SET_PLAYLIST_LOADING(false));
			}, 500);
		});
};

export { TRIGGER_PLAYLIST_DATA, TRIGGER_PLAYLIST_DETAILS_DATA };
