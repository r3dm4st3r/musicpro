import PropTypes from 'prop-types';
import { AnimatePresence, motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const Play = (props) => {
	const { togglePlayPause, playing } = props;
	return (
		<AnimatePresence>
			<button className="btn-action-icon overflow-hidden play" onClick={togglePlayPause}>
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
						<span>
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
						<span>
							<Icon icon="mdi:pause" />
						</span>
					</motion.div>
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
