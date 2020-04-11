import { EsLintStyleRules as R, Severity } from '../../../enums';

export enum NewIsCapExceptions {}

export enum CapIsNewExceptions {
	'Immutable.Map',
	'Immutable.Set',
	'Immutable.List',
}

export default {
	[R.NewCap]: [
		Severity.error,
		{
			newIsCap: true,
			newIsCapExceptions: Object.keys(NewIsCapExceptions),
			capIsNew: true,
			capIsNewExceptions: Object.keys(CapIsNewExceptions),
		},
	],
};
