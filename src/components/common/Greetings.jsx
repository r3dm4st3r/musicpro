import { useState } from 'react';
import { useSingleEffect } from 'react-haiku';
import { useSelector } from 'react-redux';
import { GREETINGS } from '../../redux/reducers/global/config/config.slice';

const Greetings = () => {
	const [welcome, setWelcome] = useState('');
	const greet = useSelector(GREETINGS);
	const hr = new Date().getHours();

	useSingleEffect(() => {
		const gIndex = greet.findIndex((item) => item[0] >= hr);
		setWelcome(greet[gIndex][1]);
	});

	return (
		<div className="flex text-left text-2xl relative py-4 shadow drop-shadow-md tracking-wide text-darkOne dark:text-light gap-2">
			<div className="relative z-[1] flex items-center justify-center text-center gap-5 text-light">
				<span>{welcome}</span>
			</div>
		</div>
	);
};

export default Greetings;
