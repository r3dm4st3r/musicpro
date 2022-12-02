import { SET_THEME } from '../reducers/global/app/app.slice';
import { TOGGLE_POPUP } from '../reducers/global/config/config.slice';

const TRIGGER_THEME_MODE = () => async (dispatch) => {
	await dispatch(SET_THEME());
};

const TRIGGER_POPUP = (type) => async (dispatch) => {
	await dispatch(TOGGLE_POPUP(type));
};

export { TRIGGER_THEME_MODE, TRIGGER_POPUP };
