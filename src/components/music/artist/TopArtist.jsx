import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { useSingleEffect } from 'react-haiku';
import { TRIGGER_ARTIST_DATA } from '../../../redux/actions/music/artist.actions';
import { ARTIST_DATA, ARTIST_LOADING } from '../../../redux/reducers/music/artist/artist.slice';
import HomeSongCard from '../home/HomeSongCard';
import PageHeading from '../../common/heading/PageHeading';

const TopArtist = () => {
	const artists = useSelector(ARTIST_DATA);
	const loading = useSelector(ARTIST_LOADING);
	const dispatch = useDispatch();

	useSingleEffect(() => {
		if (!loading.listsData) {
			dispatch(TRIGGER_ARTIST_DATA());
		}
	});

	return (
		<>
			<div className="mb-10">
				<PageHeading name="Top Artists" icon="fluent-emoji:man-singer-medium-light" />
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-5">
					{artists.map((item, index) => {
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

export default TopArtist;
