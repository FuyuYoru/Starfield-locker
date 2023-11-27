export const getLockerSegments = () => {
	const count = Math.floor(Math.random() * 4 + 2);
	// const result = randomNumbers(0, 31, count);
	return randomNumbers(0, 31, count);
}

function randomNumbers(min, max, count) {
	if (count > (max - min + 1) || count < 0) {
		return
	}
	const result = [];
	while (result.length < count) {
		const tmp = Math.floor(Math.random() * (max - min + 1) + min);
		if (!result.includes(tmp)) {
			result.push(tmp);
		}
	}
	return result;
}
