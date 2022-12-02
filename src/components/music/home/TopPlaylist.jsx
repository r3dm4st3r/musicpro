import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { HOME_DATA } from '../../../redux/reducers/music/home/home.slice';
import HomeSongCard from './HomeSongCard';
import PageHeading from '../../common/heading/PageHeading';

const TopPlaylist = () => {
	const home = useSelector(HOME_DATA);

	return (
		<div>
			<PageHeading name="Top Playlists" icon="fluent-emoji:glowing-star" />
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-5">
				{home.top_playlists.map((playlist, playlistIndex) => {
					return (
						<motion.div
							key={playlist.perma_id}
							transition={{
								delay: 0.02 * playlistIndex,
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
								song={playlist}
								key={`${playlistIndex}${playlist.perma_id}`}
							/>
						</motion.div>
					);
				})}
			</div>
		</div>
	);
};

export default TopPlaylist;
