import { Icon } from '@iconify/react';

const HomeSongCard = (props) => {
	const { song } = props;
	return (
		<div className="bg-white dark:bg-darkOne shadow drop-shadow-sm transition-all group">
			<div className="relative  cursor-pointer">
				<img src={song.thumb.lg} alt={song.title} />
				<div className="absolute group-hover:scale-100 scale-0 transition-transform inset-0 z-0 w-full h-full flex items-center justify-center">
					<div className="text-2xl w-[35px] h-[35px] relative cursor-pointer sPulse bg-theme text-white rounded-full p-1 flex items-center justify-center">
						<Icon icon="ic:round-play-arrow" />
					</div>
				</div>
			</div>
		</div>
	);
};
export default HomeSongCard;
