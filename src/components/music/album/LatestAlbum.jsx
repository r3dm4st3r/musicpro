import { useSelector } from 'react-redux';
import { ALBUM_DATA } from '../../../redux/reducers/music/album/album.slice';
import { motion } from 'framer-motion';
import PageHeading from '../../common/heading/PageHeading';
import HomeSongCard from '../home/HomeSongCard';

const LatestAlbum = () => {
	const album = useSelector(ALBUM_DATA);

	return (
		<>
			<div>
				<PageHeading name="New Albums" icon="fluent-emoji:clapper-board" />
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-5">
					{album.data.map((item, index) => {
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
export default LatestAlbum;
