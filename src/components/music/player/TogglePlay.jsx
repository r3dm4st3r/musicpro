import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { TRIGGER_CURRENTLY_PLAYING } from '../../../redux/actions/player/player.actions';

const TogglePlay = (props) => {
	const { song } = props;
	const dispatch = useDispatch();

	const handleCurrentPlay = (song, e) => {
		e.preventDefault();
		const data = {
			id: song.id,
			title: song.title,
			url: song.url,
			thumb: song.thumb,
			duration: song.duration,
		};
		dispatch(TRIGGER_CURRENTLY_PLAYING(data));
	};

	return (
		<div className="flex items-center">
			<button
				onClick={(e) => handleCurrentPlay(song, e)}
				className="w-[40px] h-[40px] p-1 rounded-full bg-theme dark:bg-theme text-white dark:text-dark flex items-center justify-center"
			>
				<div>
					<Icon width={20} icon="mdi:play" />
				</div>
			</button>
		</div>
	);
};

TogglePlay.propTypes = {
	song: PropTypes.object,
};

export default TogglePlay;
