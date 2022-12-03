import Greetings from '../../components/common/Greetings';
import { useDispatch, useSelector } from 'react-redux';
import { useSingleEffect } from 'react-haiku';
import { TRIGGER_HOME_DATA } from '../../redux/actions/music/home.actions';
import { HOME_HAS_DATA } from '../../redux/reducers/music/home/home.slice';
import NewTrending from '../../components/music/home/NewTrending';
import NewAlbum from '../../components/music/home/NewAlbum';

const TrendingPage = () => {
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
				<div className="grid grid-cols-1">
					<Greetings />
				</div>

				<div className="mb-10">
					<NewTrending />
				</div>
				<div className="mb-10">
					<NewAlbum />
				</div>
			</div>
		</section>
	);
};
export default TrendingPage;
