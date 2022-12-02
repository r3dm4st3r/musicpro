import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { APPLICATION } from '../../../routes/baseRoutes';

const Logo = (props) => {
	const { width = 80 } = props;

	return (
		<Link
			to={APPLICATION.HOME}
			className="dark:text-white font-extrabold text-black inline-flex items-center flex-start font-head"
		>
			<Icon width={width} icon="fxemoji:musicalnote" />
			<span className="text-3xl inline-block ml-2 text-black dark:text-white dark:hover:text-white">
				PRO
			</span>
		</Link>
	);
};

export default Logo;
