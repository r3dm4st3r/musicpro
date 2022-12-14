import { AnimatePresence, motion } from 'framer-motion';

const Loading = ({ isLoading }) => {
	return (
		<AnimatePresence>
			{isLoading && (
				<motion.div
					key={`${isLoading}`}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{
						type: 'spring',
						stiffness: 90,
						ease: 'linear',
					}}
					className="flex items-center justify-center absolute inset-0 bg-white dark:bg-dark"
				>
					<span className="loader"></span>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default Loading;
