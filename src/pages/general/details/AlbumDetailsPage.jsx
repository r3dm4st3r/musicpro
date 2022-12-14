import { Icon } from '@iconify/react';
import { Link, useParams } from 'react-router-dom';
import { GENERAL_BASE_ROUTES } from '../../../routes/baseRoutes';
import { useSingleEffect } from 'react-haiku';
import { useDispatch, useSelector } from 'react-redux';
import { ALBUM_DETAILS, ALBUM_LOADING } from '../../../redux/reducers/music/album/album.slice';
import { TRIGGER_ALBUM_DETAILS_DATA } from '../../../redux/actions/music/album.actions';
import { timeToReadableFormat } from '../../../utils/global.functions';
import Loading from '../../../components/common/Loading';
import TogglePlay from '../../../components/music/player/TogglePlay';

const AlbumDetailsPage = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const album = useSelector(ALBUM_DETAILS);
	const loading = useSelector(ALBUM_LOADING);

	useSingleEffect(() => {
		dispatch(TRIGGER_ALBUM_DETAILS_DATA(id));
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
									src={album.thumb.lg}
									alt={album.title}
								/>
							</div>
							<div>
								<h3 dangerouslySetInnerHTML={{ __html: album.title }} />
								{album.subtitle && (
									<p className={'my-2'}>
										By {album.subtitle} - {album.song_count} songs
									</p>
								)}
								<p>{album.description}</p>
								<p className="my-2">{album.copyright}</p>
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
							{album.songs.map((song, songIndex) => {
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
				{album && album.artists && (
					<div className="container">
						<div className="grid grid-cols-1 mt-10">
							<div className="flex items-center gap-2 mb-10">
								<span className="text-5xl">
									<Icon icon="fluent-emoji:man-singer-medium-light" />
								</span>
								<h3>Artists</h3>
							</div>
						</div>
						<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-5">
							{album.artists.map((artist, i) => {
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
		</>
	);
};
export default AlbumDetailsPage;
