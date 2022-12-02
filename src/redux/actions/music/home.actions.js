import ax from '../../../api/axios';
import { SET_HOME_DATA } from '../../reducers/music/home/home.slice';

const TRIGGER_HOME_DATA = () => async (dispatch) => {
	return await ax.get('/home').then((response) => {
		console.log('response', response);
		dispatch(SET_HOME_DATA(response.data.data));
	});
};

export { TRIGGER_HOME_DATA };
