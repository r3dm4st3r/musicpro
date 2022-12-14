import { useDispatch, useSelector } from 'react-redux';
import { useSingleEffect } from 'react-haiku';
import { PLAYLIST_LOADING } from '../../redux/reducers/music/playlist/playlist.slice';
import { TRIGGER_PLAYLIST_DATA } from '../../redux/actions/music/playlist.actions';
import Playlists from '../../components/music/playlist/Playlists';

const PlayListPage = () => {
	const dispatch = useDispatch();
	const loading = useSelector(PLAYLIST_LOADING);

	useSingleEffect(() => {
		if (!loading.listsData) {
			dispatch(TRIGGER_PLAYLIST_DATA());
		}
	});

	return (
		<section className="dark:text-light py-4">
			<div className="container">
				<div className="mb-10">
					<Playlists />
				</div>
			</div>
		</section>
	);
};
export default PlayListPage;
