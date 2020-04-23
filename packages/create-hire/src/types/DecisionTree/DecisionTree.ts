import { Answers } from 'inquirer';
import {
	Actions,
	ContactMethods,
	PayrollTypes,
	PublicProjects,
	RoleTiers,
} from '../../enums';
import { Untyped } from '../Untyped';

export interface DecisionTree extends Answers {
	readonly action: Actions;
	readonly contactMethod?: ContactMethods;
	readonly pay?: string;
	readonly payrollType?: PayrollTypes;
	readonly projectToView?: PublicProjects;
	readonly title?: RoleTiers;
	readonly yourCompany?: string;
	readonly yourName?: string;
	readonly yourEmailAddress?: string;
	readonly yourPhoneNumber?: string;
	readonly __type: 'DecisionTree';
}

export type DecisionsFromArgs = Pick<DecisionTree, 'action'>;

export const DEFAULT_DECISION_TREE: Untyped<DecisionTree> = {
	action: Actions.Exit,
	contactMethod: undefined,
	pay: undefined,
	payrollType: undefined,
	projectToView: undefined,
	title: undefined,
	yourCompany: undefined,
	yourName: undefined,
	yourEmailAddress: undefined,
	yourPhoneNumber: undefined,
};

export const createDecisionTree = (
	options: Partial<Untyped<DecisionTree>> = {},
): DecisionTree => ({
	action: DEFAULT_DECISION_TREE.action,
	contactMethod: DEFAULT_DECISION_TREE.contactMethod,
	pay: DEFAULT_DECISION_TREE.pay,
	payrollType: DEFAULT_DECISION_TREE.payrollType,
	projectToView: DEFAULT_DECISION_TREE.projectToView,
	title: DEFAULT_DECISION_TREE.title,
	yourCompany: DEFAULT_DECISION_TREE.yourCompany,
	yourName: DEFAULT_DECISION_TREE.yourName,
	yourEmailAddress: DEFAULT_DECISION_TREE.yourEmailAddress,
	yourPhoneNumber: DEFAULT_DECISION_TREE.yourPhoneNumber,
	...options,
	['__type']: 'DecisionTree',
});

export const isDecisionTree = (value: unknown): value is DecisionTree => {
	return (
		typeof value === 'object' &&
		value !== null &&
		'__type' in value &&
		(value as Partial<DecisionTree>)['__type'] === 'DecisionTree'
	);
};
