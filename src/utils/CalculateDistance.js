export default function calculateDistance(array) {
	const result = [0];
	if (array.length < 1) {
		return [];
	}
	if (array.length === 1) {
		return [0]
	}
	for (let i = 0; i < array.length; i++) {
		if (i === array.length - 1) {
			const tmp = Math.max(array[i], array[0]) - Math.min(array[i], array[0]);
			result.push(tmp);
		} else {
			const tmp = Math.max(array[i], array[i + 1]) - Math.min(array[i], array[i + 1]);
			result.push(tmp);
		}
	}
	return result;
};