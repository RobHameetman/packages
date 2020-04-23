import { RoleTiers } from '../../enums';

export const isLeadership = (tier?: RoleTiers): boolean => {
	return tier === RoleTiers.SeniorLeadership || tier === RoleTiers.Leadership;
};
