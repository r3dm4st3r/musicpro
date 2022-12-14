import { SET_CURRENTLY_PLAYING } from '../../reducers/player/playing.slice';

const TRIGGER_CURRENTLY_PLAYING = (song) => async (dispatch) => {
	return await dispatch(SET_CURRENTLY_PLAYING(song));
};

export { TRIGGER_CURRENTLY_PLAYING };
