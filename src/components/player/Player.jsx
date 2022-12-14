import { AudioPlayerProvider } from 'react-use-audio-player';
import AudioPlayer from './AudioPlayer';
import PopUpPlaylist from '../popup/PopUpPlaylist';
import { useSelector } from 'react-redux';
import { CURRENTLY_PLAYING_SONG } from '../../redux/reducers/player/playing.slice';

const Player = () => {
	const nowPlaying = useSelector(CURRENTLY_PLAYING_SONG);

	return (
		<div className="sticky bottom-0 left-0 right-0 bg-white shadow">
			<PopUpPlaylist />
			<AudioPlayerProvider>
				<AudioPlayer audio={nowPlaying} />
			</AudioPlayerProvider>
		</div>
	);
};
export default Player;
