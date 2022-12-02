import { AnimatePresence, motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { POPUP_PLAYLIST } from '../../redux/reducers/global/config/config.slice';
import SongListCard from '../music/SongListCard';

const PopUpPlaylist = () => {
	const isOpen = useSelector(POPUP_PLAYLIST);
	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					initial={{
						opacity: 0,
						scale: 0,
						originY: 'bottom',
						originX: 'right',
					}}
					animate={{
						opacity: 1,
						scale: 1,
						originY: 'bottom',
						originX: 'right',
					}}
					exit={{
						opacity: 0,
						scale: 0,
						originY: 'bottom',
						originX: 'right',
					}}
					transition={{
						stiffness: 50,
						ease: 'easeInOut',
						duration: 0.3,
					}}
					className="fixed top-0 right-0 bottom-0 w-full max-w-[450px] h-[calc(100vh-71px)] z-[5] border-l dark:border-l-darkOne shadow-md drop-shadow-md bg-white dark:bg-darkOne dark:text-light pt-16"
				>
					<div className="p-5 grid grid-cols-1 gap-3 h-full">
						<div className="flex items-center justify-between gap-10">
							<div>
								<h4>Autoplay</h4>
							</div>
							<div>
								<label className="cl-switch cl-switch-green">
									<input type="checkbox" checked />
									<span className="switcher"></span>
								</label>
							</div>
						</div>
						<div className="grid grid-cols-1 gap-3 overflow-hidden overflow-y-auto h-full">
							<SongListCard />
							<SongListCard />
							<SongListCard />
							<SongListCard />
							<SongListCard />
							<SongListCard />
							<SongListCard />
							<SongListCard />
							<SongListCard />
							<SongListCard />
							<SongListCard />
							<SongListCard />
							<SongListCard />
							<SongListCard />
						</div>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default PopUpPlaylist;
