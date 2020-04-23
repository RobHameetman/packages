import { RoleTiers } from '../../enums';

export const isNotAManager = (tier?: RoleTiers): boolean => {
	return tier !== RoleTiers.Management;
};
