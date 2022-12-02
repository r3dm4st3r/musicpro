import PropTypes from 'prop-types';
import { useAudioPlayer } from 'react-use-audio-player';
import SeekBar from './controls/SeekBar';
import SongDuration from './controls/SongDuration';
import { useUpdateEffect } from 'react-haiku';
import Play from './controls/Play';
import Next from './controls/Next';
import Prev from './controls/Prev';
import Vol from './controls/Vol';
import List from './controls/List';
import Repeat from './controls/Repeat';
import { useState } from 'react';

const AudioPlayer = (props) => {
	const { audio } = props;
	const [repeated, setRepeated] = useState(false);

	const { togglePlayPause, mute, ready, loading, playing, fade, player } = useAudioPlayer({
		src: audio.src,
		format: 'mp3',
		html5: false,
		autoplay: false,
		onend: () => console.log('sound has ended!'),
	});

	const handleRepeat = () => {
		setRepeated(!repeated);
	};

	useUpdateEffect(() => {
		fade(0, 1, 5000);
	}, [fade]);

	useUpdateEffect(() => {
		player.loop(repeated);
	}, [repeated]);

	if (!ready && !loading) return <div>No audio to play</div>;
	if (loading) return <div>Loading audio</div>;

	return (
		<div className="bg-white dark:bg-darkOne dark:text-white relative z-[10]">
			<SeekBar />
			<div className="flex items-center justify-between px-2 py-2">
				<div className="w-full flex items-center gap-3">
					<div className="w-[50px] h-[50px] flex items-center justify-center">
						<img className="shadow drop-shadow rounded" src={audio.thumb} alt="test" />
					</div>
					<div className="w-[calc(100%-50px)] overflow-hidden">
						<p className="text-[14px] mb-1 font-bold font-head">
							Manike - O lala re o lala re
						</p>
						<SongDuration ready={ready} />
					</div>
				</div>
				<div className="w-full flex items-center justify-center gap-3">
					<Prev />
					<Play playing={playing} togglePlayPause={togglePlayPause} />
					<Next />
				</div>
				<div className="w-full flex items-center justify-end">
					<div className="font-extrabold mr-2">
						<span className="text-[10px] block text-warning/70 border border-warning/30 px-2 py-0.5">
							HD
						</span>
					</div>
					<Vol mute={mute} />
					<Repeat repeated={repeated} handleRepeat={handleRepeat} />
					<List />
				</div>
			</div>
		</div>
	);
};

AudioPlayer.propTypes = {
	audio: PropTypes.object,
};
export default AudioPlayer;
