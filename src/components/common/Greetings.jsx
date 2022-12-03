import { useState } from 'react';
import { useSingleEffect } from 'react-haiku';

const Greetings = () => {
	const [welcome, setWelcome] = useState('');
	const greet = [
			[0, 'Hey! Mid Night Monster! 😍'],
			[1, 'Howdy, Night Master! 🙂'],
			[2, 'Hey, Take Rest! 🙂'],
			[4, 'Woah! Early Bird! 😍'],
			[7, 'Hey, Fresh Morning! 😍'],
			[12, 'Hey, Good Afternoon! 😻'],
			[17, 'Good Evening Mate 😺'],
			[20, 'Welcome to spicy evening 😉'],
			[21, 'Woah! Funky Funky Night...🤤'],
			[23, 'Hey, Working Late Mate 😉'],
		],
		hr = new Date().getHours();

	useSingleEffect(() => {
		const gIndex = greet.findIndex((item) => item[0] >= hr);
		setWelcome(greet[gIndex][1]);
	});

	return (
		<div className="flex text-2xl relative tracking-wide">
			<div className="font-head font-extrabold text-darkOne dark:text-light">
				<span>{welcome}</span>
			</div>
		</div>
	);
};

export default Greetings;
