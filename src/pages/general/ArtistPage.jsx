import { useDispatch, useSelector } from 'react-redux';
import { useSingleEffect } from 'react-haiku';
import { TRIGGER_HOME_DATA } from '../../redux/actions/music/home.actions';
import { HOME_HAS_DATA } from '../../redux/reducers/music/home/home.slice';
import TopArtist from '../../components/music/home/TopArtist';

const ArtistPage = () => {
	const dispatch = useDispatch();
	const hasData = useSelector(HOME_HAS_DATA);

	useSingleEffect(() => {
		if (!hasData) {
			dispatch(TRIGGER_HOME_DATA());
		}
	});

	return (
		<section className="dark:text-light py-4">
			<div className="container">
				<div className="mb-10">
					<TopArtist />
				</div>
			</div>
		</section>
	);
};
export default ArtistPage;
