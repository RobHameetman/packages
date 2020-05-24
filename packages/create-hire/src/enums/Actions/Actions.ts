export enum Actions {
	Exit = 'Exit',
	ReviewResume = 'Review my resumé',
	BrowseProjects = 'Browse public projects',
	RequestInterview = 'Request an interview',
}

export type Action = keyof typeof Actions;

export const isAction = (value: unknown): value is Action => {
	return typeof value === 'string' && Object.keys(Actions).includes(value);
};
