import { AudioPlayerProvider } from 'react-use-audio-player';
import AudioPlayer from './AudioPlayer';
import PopUpPlaylist from '../popup/PopUpPlaylist';

const Player = () => {
	const song = {
		name: 'Test song',
		src: 'https://aac.saavncdn.com/298/6e6b85cc771c01427d0b3c6927575b83_320.mp4',
		thumb: 'https://sdlhivkcdnems03.cdnsrv.jio.com/c.saavncdn.com/933/Manike-From-Thank-God-Hindi-2022-20220920201002-500x500.jpg',
	};

	return (
		<div className="sticky bottom-0 left-0 right-0 bg-white shadow">
			<PopUpPlaylist />
			<AudioPlayerProvider>
				<AudioPlayer audio={song} />
			</AudioPlayerProvider>
		</div>
	);
};
export default Player;
