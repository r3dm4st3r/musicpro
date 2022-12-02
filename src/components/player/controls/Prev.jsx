import { Icon } from '@iconify/react';

const Prev = () => {
	return (
		<button className="btn-action-icon">
			<span>
				<Icon icon="mdi:skip-next" rotate={2} />
			</span>
		</button>
	);
};

export default Prev;
