import { Icon } from '@iconify/react';

const SongListCard = () => {
	return (
		<div className="flex items-center gap-5 border-b group dark:border-gray-800 pb-3 last:border-b-0 last:pb-0">
			<div className="w-[50px] relative cursor-pointer">
				<img
					src="https://sdlhivkcdnems03.cdnsrv.jio.com/c.saavncdn.com/933/Manike-From-Thank-God-Hindi-2022-20220920201002-500x500.jpg"
					alt="Ik Tu hi"
				/>
				<div className="absolute transition-all inset-0 w-full h-full flex items-center justify-center bg-dark/70 opacity-0 group-hover:opacity-100">
					<span className="text-2xl">
						<Icon icon="mdi:play" />
					</span>
				</div>
			</div>
			<div className="w-[calc(100%-50px)]">
				<div className="flex items-start gap-5 justify-between">
					<div>
						<h6>Ik tu hi hai sanam</h6>
						<p>King</p>
					</div>
					<span>03:35</span>
				</div>
			</div>
		</div>
	);
};

export default SongListCard;
