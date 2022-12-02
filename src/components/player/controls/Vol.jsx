import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useUpdateEffect } from 'react-haiku';
import { AnimatePresence, motion } from 'framer-motion';

const Vol = (props) => {
	const { mute } = props;
	const [isMuted, setMuted] = useState(false);

	useUpdateEffect(() => {
		mute(isMuted);
	}, [isMuted]);

	return (
		<AnimatePresence>
			<button onClick={() => setMuted(!isMuted)} className="btn-action-icon">
				{!isMuted && (
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ type: 'just', stiffness: 100, ease: 'backIn' }}
						exit={{ opacity: 0, scale: 0 }}
					>
						<span>
							<Icon icon="mdi:volume-high" />
						</span>
					</motion.div>
				)}
				{isMuted && (
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ type: 'just', stiffness: 100, ease: 'backIn' }}
						exit={{ opacity: 0, scale: 0 }}
					>
						<span>
							<Icon icon="mdi:volume-off" />
						</span>
					</motion.div>
				)}
			</button>
		</AnimatePresence>
	);
};

Vol.propTypes = {
	mute: PropTypes.func,
};
export default Vol;
