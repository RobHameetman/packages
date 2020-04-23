import { DecisionTree } from '../DecisionTree';
import {
	Actions,
	ContactMethods,
	PayrollTypes,
	RoleTiers,
} from './../../../enums';

export const validDecisionTree: DecisionTree = {
	action: Actions.RequestInterview,
	contactMethod: ContactMethods.Email,
	pay: '"$130,000 - $160,000"',
	payrollType: PayrollTypes.Salary,
	projectToView: undefined,
	title: RoleTiers.SolutionOwner,
	yourCompany: 'Thoughtworks',
	yourName: 'Benjamin Caffrey',
	yourEmailAddress: 'bc212@thoughtworks.com',
	yourPhoneNumber: undefined,
	__type: 'DecisionTree',
};
