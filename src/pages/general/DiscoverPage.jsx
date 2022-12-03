import { useDispatch, useSelector } from 'react-redux';
import { useSingleEffect } from 'react-haiku';
import { TRIGGER_HOME_DATA } from '../../redux/actions/music/home.actions';
import { HOME_HAS_DATA } from '../../redux/reducers/music/home/home.slice';
import Discover from '../../components/music/home/Discover';

const DiscoverPage = () => {
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
					<Discover />
				</div>
			</div>
		</section>
	);
};
export default DiscoverPage;
