import PropTypes from 'prop-types';
import { AnimatePresence, motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const Play = (props) => {
	const { togglePlayPause, playing } = props;
	return (
		<AnimatePresence>
			<button className="btn-action-icon play" onClick={togglePlayPause}>
				{!playing && (
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ type: 'just', stiffness: 100, ease: 'backIn' }}
						exit={{ opacity: 0, scale: 0 }}
					>
						<span>
							<Icon icon="mdi:play" />
						</span>
					</motion.div>
				)}
				{playing && (
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ type: 'just', stiffness: 100, ease: 'backIn' }}
						exit={{ opacity: 0, scale: 0 }}
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
