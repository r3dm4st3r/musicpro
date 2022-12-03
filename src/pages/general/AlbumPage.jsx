import { useDispatch, useSelector } from 'react-redux';
import { useSingleEffect } from 'react-haiku';
import { ALBUM_HAS_DATA } from '../../redux/reducers/music/album/album.slice';
import { TRIGGER_ALBUM_DATA } from '../../redux/actions/music/album.actions';
import LatestAlbum from '../../components/music/album/LatestAlbum';

const AlbumPage = () => {
	const dispatch = useDispatch();
	const hasAlbumData = useSelector(ALBUM_HAS_DATA);

	useSingleEffect(() => {
		if (!hasAlbumData) {
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
