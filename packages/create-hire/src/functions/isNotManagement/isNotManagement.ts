import { RoleTiers } from '../../enums';

export const isNotManagement = (tier?: RoleTiers): boolean => {
	return (
		tier !== RoleTiers.SeniorLeadership &&
		tier !== RoleTiers.Leadership &&
		tier !== RoleTiers.Management
	);
};
