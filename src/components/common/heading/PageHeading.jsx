import { Icon } from '@iconify/react';

const PageHeading = ({ name = 'Heading', icon = 'fluent-emoji:fire' }) => {
	return (
		<div className="grid grid-cols-1 mt-2 mb-6">
			<div className="flex items-center">
				<Icon width={30} icon={icon} />
				<h5 className="ml-3">{name}</h5>
			</div>
		</div>
	);
};
export default PageHeading;
