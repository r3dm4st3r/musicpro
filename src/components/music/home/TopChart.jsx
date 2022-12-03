import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { HOME_DATA } from '../../../redux/reducers/music/home/home.slice';
import HomeSongCard from './HomeSongCard';
import PageHeading from '../../common/heading/PageHeading';

const TopChart = () => {
	const home = useSelector(HOME_DATA);

	return (
		<div>
			<PageHeading name="Top Chart" icon="fluent-emoji:bar-chart" />
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-5">
				{home.charts.map((item, index) => {
					return (
						<motion.div
							key={item.id}
							transition={{
								delay: 0.02 * index,
								type: 'tween',
								ease: 'backInOut',
								stiffness: 100,
								bounceStiffness: 50,
								staggerChildren: 100,
								duration: 1,
							}}
							initial={{ opacity: 0, y: 100 }}
							whileInView={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: 100 }}
							viewport={{ once: true }}
						>
							<HomeSongCard song={item} type={item.type} key={`${index}${item.id}`} />
						</motion.div>
					);
				})}
			</div>
		</div>
	);
};

export default TopChart;
