import { useDispatch, useSelector } from 'react-redux';
import { useSingleEffect } from 'react-haiku';
import { ALBUM_LOADING } from '../../redux/reducers/music/album/album.slice';
import { TRIGGER_ALBUM_DATA } from '../../redux/actions/music/album.actions';
import LatestAlbum from '../../components/music/album/LatestAlbum';

const AlbumPage = () => {
	const dispatch = useDispatch();
	const loading = useSelector(ALBUM_LOADING);

	useSingleEffect(() => {
		if (!loading.listsData) {
			dispatch(TRIGGER_ALBUM_DATA());
		}
	});

	return (
		<section className="dark:text-light py-4">
			<div className="container">
				<div className="mb-10">
					<LatestAlbum />
				</div>
			</div>
		</section>
	);
};
export default AlbumPage;
