import PropTypes from 'prop-types';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const ProgressBar = (props) => {
	const { percentComplete, onBarPositionClick, seekbarRef, onBarPositionHover, timeFrag } = props;
	const [showTimer, setShowTimer] = useState(false);
	const handleTimer = (type, e) => {
		e.preventDefault();
		if (type === 'enter') {
			setShowTimer(true);
		} else {
			setShowTimer(false);
		}
	};
	return (
		<div
			ref={seekbarRef}
			onMouseMoveCapture={onBarPositionHover}
			onClick={onBarPositionClick}
			className="bg-gray-200 cursor-pointer dark:bg-gray-700 h-[5px]"
			data-frag={timeFrag.time}
			onMouseEnter={(e) => handleTimer('enter', e)}
			onMouseLeave={(e) => handleTimer('leave', e)}
		>
			<AnimatePresence>
				{showTimer && (
					<motion.span
						initial={{ y: 17, x: 0, originX: 'left', scale: 0, opacity: 0 }}
						animate={{ y: 0, scale: 1, originX: 'left', x: -20, opacity: 1 }}
						exit={{ y: 17, x: 0, originX: 'left', scale: 0, opacity: 0 }}
						className="absolute top-[-25px] shadow drop-shadow-sm text-[10px] font-bold py-0.5 bg-warning text-black rounded-full px-2"
						style={{ left: `${timeFrag.left}px` }}
					>
						{timeFrag.time}
					</motion.span>
				)}
			</AnimatePresence>
			<span className="progress" style={{ width: `${percentComplete}%` }} />
		</div>
	);
};

ProgressBar.propTypes = {
	percentComplete: PropTypes.number,
	onBarPositionClick: PropTypes.func,
	onBarPositionHover: PropTypes.func,
	timeFrag: PropTypes.object,
};
export default ProgressBar;
