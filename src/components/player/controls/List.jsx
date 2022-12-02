import { Icon } from '@iconify/react';
import { useDispatch } from 'react-redux';
import { TRIGGER_POPUP } from '../../../redux/actions/global.actions';
import { POPUP_TYPE } from '../../../redux/constants/popup';

const List = () => {
	const dispatch = useDispatch();
	return (
		<button
			className="btn-action-icon"
			onClick={() => dispatch(TRIGGER_POPUP(POPUP_TYPE.PLAYLIST))}
		>
			<Icon icon="mdi:playlist-music-outline" />
		</button>
	);
};
export default List;
