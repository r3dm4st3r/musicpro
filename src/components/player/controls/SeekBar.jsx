import React, { useCallback, useRef, useState } from 'react';
import { useAudioPosition } from 'react-use-audio-player';
import ProgressBar from './ProgressBar';
import { timeToReadableFormat } from '../../../utils/global.functions';

const SeekBar = () => {
	const seekbarRef = useRef(null);
	const { percentComplete, duration, seek } = useAudioPosition({
		highRefreshRate: true,
	});
	const [timeFrag, setTimeFrag] = useState({ left: 0, time: '' });

	const goToPosition = useCallback(
		(event) => {
			const { pageX: eventOffsetX } = event;

			if (seekbarRef.current) {
				const percent =
					(eventOffsetX - seekbarRef.current.offsetLeft) / seekbarRef.current.clientWidth;
				seek(percent * duration);
			}
		},
		[duration, seek]
	);

	const handleHoverPosition = (event) => {
		const { pageX: eventOffsetX } = event;
		if (seekbarRef.current) {
			const percent =
				(eventOffsetX - seekbarRef.current.offsetLeft) / seekbarRef.current.clientWidth;
			const time = timeToReadableFormat(percent * duration);
			// console.log('time', time);
			setTimeFrag((prevState) => {
				return {
					...prevState,
					left: eventOffsetX - seekbarRef.current.offsetLeft,
					time: time,
				};
			});
		}
	};

	return (
		<ProgressBar
			seekbarRef={seekbarRef}
			percentComplete={percentComplete}
			onBarPositionClick={goToPosition}
			onBarPositionHover={handleHoverPosition}
			timeFrag={timeFrag}
		/>
	);
};

export default SeekBar;
