import PropTypes from 'prop-types';
import { AnimatePresence, motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const Play = (props) => {
	const { togglePlayPause, playing, loading, ready } = props;
	return (
		<AnimatePresence>
			<button
				disabled={loading}
				className="btn-action-icon relative overflow-hidden play"
				onClick={togglePlayPause}
			>
				{loading ? (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{
							type: 'spring',
							stiffness: 90,
							ease: 'linear',
						}}
						className="absolute inset-0 flex items-center justify-center"
					>
						<div>
							<svg
								className="animate-spin h-8 w-8 text-white"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
							>
								<circle
									className="opacity-25"
									cx="12"
									cy="12"
									r="10"
									stroke="currentColor"
									strokeWidth="4"
								></circle>
								<path
									className="opacity-75"
									fill="currentColor"
									d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
								></path>
							</svg>
						</div>
					</motion.div>
				) : (
					<>
						{!playing && (
							<motion.div
								initial={{ opacity: 0, scale: 0, y: -150 }}
								animate={{ opacity: 1, scale: 1, y: 0 }}
								exit={{ opacity: 0, scale: 0, y: -150 }}
								transition={{
									type: 'spring',
									stiffness: 90,
									ease: 'linear',
								}}
							>
								<span className="text-white">
									<Icon icon="mdi:play" />
								</span>
							</motion.div>
						)}
						{playing && (
							<motion.div
								initial={{ opacity: 0, scale: 0, y: 150 }}
								animate={{ opacity: 1, scale: 1, y: 0 }}
								exit={{ opacity: 0, scale: 0, y: 150 }}
								transition={{
									type: 'spring',
									stiffness: 90,
									ease: 'linear',
								}}
							>
								<span className="text-white">
									<Icon icon="mdi:pause" />
								</span>
							</motion.div>
						)}
					</>
				)}
			</button>
		</AnimatePresence>
	);
};
Play.propTypes = {
	playing: PropTypes.bool,
	togglePlayPause: PropTypes.func,
};
export default Play;
