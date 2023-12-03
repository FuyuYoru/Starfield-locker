const easy = {
	sectionsCount: 2,
	minSegments: 4,
	maxSegments: 6,
	falseDigipicks: 2,
}

const medium = {
	sectionsCount: 3,
	minSegments: 5,
	maxSegments: 7,
	falseDigipicks: 3,
}

const expert = {
	sectionsCount: 4,
	minSegments: 5,
	maxSegments: 7,
	falseDigipicks: 4,
}

const master = {
	sectionsCount: 5,
	minSegments: 5,
	maxSegments: 7,
	falseDigipicks: 5,
}
interface ILevel {
	sectionsCount: number;
	minSegments: number;
	maxSegments: number;
	falseDigipicks: number;
}
interface ILeves {
	[key: string]: ILevel;
}

export const levelProps: ILeves = {
	'easy': easy,
	'medium': medium,
	'expert': expert,
	'master': master,
}