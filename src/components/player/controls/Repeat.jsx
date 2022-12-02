import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';
import { AnimatePresence, motion } from 'framer-motion';

const Repeat = (props) => {
	const { handleRepeat, repeated } = props;
	return (
		<AnimatePresence>
			<button onClick={handleRepeat} className="btn-action-icon">
				{!repeated && (
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ type: 'just', stiffness: 100, ease: 'backIn' }}
						exit={{ opacity: 0, scale: 0 }}
					>
						<span>
							<Icon icon="mdi:repeat-off" />
						</span>
					</motion.div>
				)}
				{repeated && (
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ type: 'just', stiffness: 100, ease: 'backIn' }}
						exit={{ opacity: 0, scale: 0 }}
						className="text-theme"
					>
						<span>
							<Icon icon="mdi:repeat" />
						</span>
					</motion.div>
				)}
			</button>
		</AnimatePresence>
	);
};

Repeat.propTypes = {
	repeated: PropTypes.bool,
	handleRepeat: PropTypes.func,
};
export default Repeat;
