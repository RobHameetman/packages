import { RoleTiers } from '../../enums';

export const isAManager = (tier?: RoleTiers): boolean => {
	return tier === RoleTiers.Management;
};
