export const timeToReadableFormat = (sec) => {
	const minutes = Math.floor(sec / 60);
	const seconds = sec % 60;

	function padTo2Digits(num) {
		const number = Math.floor(num);
		return number.toString().padStart(2, '0');
	}

	return `${padTo2Digits(minutes)}:${padTo2Digits(seconds)}`;
};
