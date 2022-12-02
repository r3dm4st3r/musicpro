import { Icon } from '@iconify/react';

const SongCard = () => {
	return (
		<div className="bg-white dark:bg-darkOne shadow drop-shadow-sm transition-all group">
			<div className="relative  cursor-pointer">
				<img
					src="https://sdlhivkcdnems03.cdnsrv.jio.com/c.saavncdn.com/933/Manike-From-Thank-God-Hindi-2022-20220920201002-500x500.jpg"
					alt="Ik Tu hi"
				/>
				<div className="absolute group-hover:scale-100 scale-0 transition-transform inset-0 z-0 w-full h-full flex items-center justify-center">
					<div className="text-2xl w-[35px] h-[35px] relative cursor-pointer sPulse bg-theme text-white rounded-full p-1 flex items-center justify-center">
						<Icon icon="ic:round-play-arrow" />
					</div>
				</div>
			</div>
			<div className="p-3">
				<h6 className="text-[14px]">Baarish Mein Tum</h6>
				<div className="flex items-center mt-2">
					<span>
						<Icon icon="uiw:time-o" />
					</span>
					<p className="text-xs font-bold ml-1">3:30</p>
				</div>
			</div>
		</div>
	);
};
export default SongCard;
