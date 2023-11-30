import calculateDistance from "./CalculateDistance";

export const createLockerSegments = (levelProps) => {
	const count = randomNumber(levelProps.minSegments, levelProps.maxSegments);
	return randomNumbers(0, 31, count).sort();
};

const createDigipicksSlices = (lockerSegment) => {
	const length = Math.floor(lockerSegment.length / 2);

	const digipicks = {
		'digipick_1': lockerSegment.slice(0, length),
		'digipick_2': lockerSegment.slice(length),
	};

	return digipicks;
};


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
};

function randomNumber(min, max) {
	if (min > max) {
		return
	}
	return Math.floor(Math.random() * max + min);
}

export const createDigipicks = (lockerSegment) => {
	const digipickSlices = createDigipicksSlices(lockerSegment);
	Object.keys(digipickSlices).map((key, index) => {
		const result = [0]
		const distances = calculateDistance(digipickSlices[key]);
		for (let i = 0; i < distances.length - 1; i++) {
			result.push(distances[i] + distances[i + 1])
		}
		const coef = randomNumber(1, 31);
		const indexes = indexMove(digipickSlices[key], coef);
		digipickSlices[key] = {
			distances: distances,
			indexes: indexes,
		};
	})
	return digipickSlices;
}

export const createFakeDigipick = (lockerSegment) => {
	const digipickSlices = createDigipicksSlices(lockerSegment);

	const key = Object.keys(digipickSlices)[0]
	const distances = calculateDistance(digipickSlices[key]);
	const indexes = indexMove(digipickSlices[key], randomNumber(1, 31));

	const shouldAddIndex = Math.random() < 0.5;
	if (shouldAddIndex) {
		const randomIndex = randomNumber(0, distances.length - 1);
		indexes.push(randomIndex);
	} else {
		indexes.pop();
	}
	return {
		distances: distances,
		indexes: indexes,
	};
};

function indexMove(array, coef) {
	return array.map(value => (value + coef) % 32);
}
