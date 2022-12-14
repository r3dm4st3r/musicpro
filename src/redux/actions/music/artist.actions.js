import ax from '../../../api/axios';
import {
	SET_ARTIST_DATA,
	SET_ARTIST_DETAILS,
	SET_ARTIST_LOADING,
} from '../../reducers/music/artist/artist.slice';

const TRIGGER_ARTIST_DATA = () => async (dispatch) => {
	dispatch(SET_ARTIST_LOADING(true));
	return await ax
		.get('/artist')
		.then((response) => {
			dispatch(SET_ARTIST_DATA(response.data.data));
		})
		.catch((error) => {
			console.log('error', error);
		})
		.finally(() => {
			dispatch(SET_ARTIST_LOADING(false));
		});
};

const TRIGGER_ARTIST_DETAILS_DATA = (id) => async (dispatch) => {
	dispatch(SET_ARTIST_LOADING(true));
	return await ax
		.get(`/artist/${id}`)
		.then((response) => {
			dispatch(SET_ARTIST_DETAILS(response.data.data));
		})
		.catch((error) => {
			console.log('error', error);
		})
		.finally(() => {
			setTimeout(() => {
				dispatch(SET_ARTIST_LOADING(false));
			}, 500);
		});
};

export { TRIGGER_ARTIST_DATA, TRIGGER_ARTIST_DETAILS_DATA };
