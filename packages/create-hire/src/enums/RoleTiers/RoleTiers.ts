import isString from 'lodash/isString';

export enum RoleTiers {
	SeniorLeadership = 'Organizational Leadership / CTO / Co-founder',
	Leadership = 'Practice Leadership / Director of Engineering',
	Management = 'Technical Program Management / Engineering Management',
	SolutionOwner = 'Technical PM / Product Owner / Solution Architect',
	TeamLead = 'Tech Lead / Team Lead',
	SeniorContributor = 'Sr. Individual Contributor',
	IndividualContributor = 'Individual Contributor',
}

export type RoleTier = keyof typeof RoleTiers;

export const isRoleTier = (value: unknown): value is RoleTier => {
	return isString(value) && Object.keys(RoleTiers).includes(value);
};
