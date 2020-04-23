import { RoleTiers } from '../../enums';

export const isNotLeadership = (tier?: RoleTiers): boolean => {
	return tier !== RoleTiers.SeniorLeadership && tier !== RoleTiers.Leadership;
};
