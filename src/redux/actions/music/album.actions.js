import ax from '../../../api/axios';
import { SET_ALBUM_DATA } from '../../reducers/music/album/album.slice';

const TRIGGER_ALBUM_DATA = () => async (dispatch) => {
	return await ax.get('/album').then((response) => {
		dispatch(SET_ALBUM_DATA(response.data.data));
	});
};

export { TRIGGER_ALBUM_DATA };
