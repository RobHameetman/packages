import { RoleTiers } from '../../enums';

export const isManagement = (tier?: RoleTiers): boolean => {
	return (
		tier === RoleTiers.SeniorLeadership ||
		tier === RoleTiers.Leadership ||
		tier === RoleTiers.Management
	);
};
