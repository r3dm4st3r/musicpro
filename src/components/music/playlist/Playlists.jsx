import { motion } from 'framer-motion';
import PageHeading from '../../common/heading/PageHeading';
import HomeSongCard from '../home/HomeSongCard';
import { useSelector } from 'react-redux';
import { PLAYLIST_DATA } from '../../../redux/reducers/music/playlist/playlist.slice';

const Playlists = () => {
	const playlists = useSelector(PLAYLIST_DATA);

	return (
		<>
			<div>
				<PageHeading
					name="Featured Playlists"
					icon="fluent-emoji:man-singer-medium-light"
				/>
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-5">
					{playlists.map((item, index) => {
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
								<HomeSongCard
									song={item}
									type={item.type}
									key={`${index}${item.id}`}
								/>
							</motion.div>
						);
					})}
				</div>
			</div>
		</>
	);
};
export default Playlists;
