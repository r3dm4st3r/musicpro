import { Icon } from '@iconify/react';
import { useDispatch, useSelector } from 'react-redux';
import { THEME_MODE } from '../../../redux/reducers/global/app/app.slice';
import { TRIGGER_THEME_MODE } from '../../../redux/actions/global.actions';
import { useEffect } from 'react';

const ToggleTheme = () => {
	const dispatch = useDispatch();
	const theme = useSelector(THEME_MODE);

	const toggleMode = () => {
		return dispatch(TRIGGER_THEME_MODE());
	};

	useEffect(() => {
		const selector = document.querySelector('html');
		const media = window.matchMedia('(prefers-color-scheme: dark)').matches;

		if (theme && media) {
			selector.classList.add('dark');
		} else {
			selector.classList.remove('dark');
		}
	}, [theme]);

	return (
		<button
			onClick={() => toggleMode()}
			className="rounded-full inline-flex items-center justify-center hover:text-black dark:text-white dark:hover:text-warning transition-colors"
		>
			{theme ? (
				<Icon width={40} icon="mingcute:sun-line" />
			) : (
				<Icon width={40} icon="mingcute:sun-fill" />
			)}
		</button>
	);
};
export default ToggleTheme;
