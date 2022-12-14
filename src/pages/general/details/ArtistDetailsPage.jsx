import { Icon } from '@iconify/react';
import { Link, useParams } from 'react-router-dom';
import { GENERAL_BASE_ROUTES } from '../../../routes/baseRoutes';
import { useSingleEffect } from 'react-haiku';
import { useDispatch, useSelector } from 'react-redux';
import { timeToReadableFormat } from '../../../utils/global.functions';
import { ARTIST_DETAILS, ARTIST_LOADING } from '../../../redux/reducers/music/artist/artist.slice';
import { TRIGGER_ARTIST_DETAILS_DATA } from '../../../redux/actions/music/artist.actions';
import Loading from '../../../components/common/Loading';
import PageHeading from '../../../components/common/heading/PageHeading';
import { motion } from 'framer-motion';
import HomeSongCard from '../../../components/music/home/HomeSongCard';
import TogglePlay from '../../../components/music/player/TogglePlay';

const ArtistDetailsPage = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const artist = useSelector(ARTIST_DETAILS);
	const loading = useSelector(ARTIST_LOADING);

	useSingleEffect(() => {
		dispatch(TRIGGER_ARTIST_DETAILS_DATA(id));
	});

	if (loading.isLoading) {
		return <Loading isLoading={loading.isLoading} />;
	}

	return (
		<>
			<section className="dark:text-light py-8 bg-white dark:bg-darkOne shadow">
				<div className="container">
					<div className="grid grid-cols-1">
						<div className="flex items-center gap-10">
							<div className="max-w-[250px]">
								<img
									className="shadow-lg drop-shadow-lg"
									src={artist.thumb.lg}
									alt={artist.title}
								/>
							</div>
							<div>
								<h3 dangerouslySetInnerHTML={{ __html: artist.name }} />
								{artist.subtitle && (
									<p className={'my-2'}>
										By {artist.subtitle} - {artist.song_count} songs
									</p>
								)}
								<p>{artist.description}</p>
								<p className="my-2">{artist.copyright}</p>
								<div className="mt-8 font-extrabold font-head">
									<button className="btn py-2 px-4 flex items-center gap-1">
										<span className="relative top-[-1px]">
											<Icon width={30} icon="mdi:play" />
										</span>
										<span>Play</span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="py-10 dark:text-light">
				<div className="container">
					<div className="grid grid-cols-1">
						<ul>
							{artist.songs.map((song, songIndex) => {
								return (
									<li
										key={songIndex}
										className="bg-white shadow dark:bg-darkOne p-3 mb-3 last:mb-0"
									>
										<div className="flex items-center justify-between gap-5">
											<div className="flex items-center gap-5 w-full max-w-[550px]">
												<div className="w-[50px] h-[50px] flex items-center justify-center">
													<img src={song.thumb.sm} alt={song.title} />
												</div>
												<div className="w-[calc(100%-50px)]">
													<h6
														dangerouslySetInnerHTML={{
															__html: song.title,
														}}
													/>
												</div>
											</div>
											<div className="font-bold w-[100px] text-center p-1">
												<span className="text-sm">
													{timeToReadableFormat(song.duration)}
												</span>
											</div>
											<TogglePlay song={song} />
										</div>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
				{artist && artist.artists && (
					<div className="container">
						<div className="grid grid-cols-1">
							<div className="flex items-center gap-2 mb-10">
								<span className="text-5xl">
									<Icon icon="fluent-emoji:man-singer-medium-light" />
								</span>
								<h3>Artists</h3>
							</div>
						</div>
						<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-5">
							{artist.artists.map((artist, i) => {
								return (
									<Link
										to={`${GENERAL_BASE_ROUTES.ARTIST}/${artist.id}`}
										key={i}
										className="bg-white shadow drop-shadow-sm dark:bg-darkOne dark:text-light dark:hover:text-theme flex items-center flex-col h-full"
									>
										<div>
											<img
												className="p-2"
												src={artist.thumb.lg}
												alt={artist.name}
											/>
										</div>
										<div className="text-center flex items-center justify-center p-4">
											<h3 className="text-xs">{artist.name}</h3>
										</div>
									</Link>
								);
							})}
						</div>
					</div>
				)}
			</section>
			<section className="pb-10 dark:text-light">
				<div className="container">
					{artist.playlist.dedicated.length > 0 && (
						<div className="mb-10">
							<PageHeading
								name={`More by ${artist.name}`}
								icon="fluent-emoji:man-singer-medium-light"
							/>
							<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-5">
								{artist.playlist.dedicated.map((item, index) => {
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
					)}

					<div className="mb-10">
						<PageHeading
							name="Featured Playlist"
							icon="fluent-emoji:man-singer-medium-light"
						/>
						<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-5">
							{artist.playlist.featured.map((item, index) => {
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
				</div>
			</section>
		</>
	);
};
export default ArtistDetailsPage;
