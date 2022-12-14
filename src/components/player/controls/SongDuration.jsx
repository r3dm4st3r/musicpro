import { useAudioPosition } from 'react-use-audio-player';
import { useState } from 'react';
import { useUpdateEffect } from 'react-haiku';
import { timeToReadableFormat } from '../../../utils/global.functions';
import PropTypes from 'prop-types';

const SongDuration = (props) => {
	const { ready } = props;
	const { position, duration } = useAudioPosition({
		highRefreshRate: true,
	});
	const [songTime, setSongTime] = useState('');

	useUpdateEffect(() => {
		const time = timeToReadableFormat(position);
		setSongTime(time);
	}, [position]);

	return (
		<>
			{ready && (
				<p className="font-bold text-xs">
					{songTime} / {timeToReadableFormat(duration)}
				</p>
			)}
		</>
	);
};
SongDuration.propTypes = {
	ready: PropTypes.bool,
};
export default SongDuration;
