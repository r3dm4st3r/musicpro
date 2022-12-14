import ax from '../../../api/axios';
import {
	SET_ALBUM_DATA,
	SET_ALBUM_DETAILS,
	SET_ALBUM_LOADING,
} from '../../reducers/music/album/album.slice';

const TRIGGER_ALBUM_DATA = () => async (dispatch) => {
	dispatch(SET_ALBUM_LOADING(true));
	return await ax
		.post('/album')
		.then((response) => {
			dispatch(SET_ALBUM_DATA(response.data.data));
		})
		.catch((error) => {
			console.log('error', error);
		})
		.finally(() => {
			dispatch(SET_ALBUM_LOADING(false));
		});
};

const TRIGGER_ALBUM_DETAILS_DATA = (id) => async (dispatch) => {
	dispatch(SET_ALBUM_LOADING(true));
	return await ax
		.post(`/album/${id}`)
		.then((response) => {
			dispatch(SET_ALBUM_DETAILS(response.data.data));
		})
		.catch((error) => {
			console.log('error', error);
		})
		.finally(() => {
			setTimeout(() => {
				dispatch(SET_ALBUM_LOADING(false));
			}, 500);
		});
};

export { TRIGGER_ALBUM_DATA, TRIGGER_ALBUM_DETAILS_DATA };
