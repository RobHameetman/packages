import { EsLintEs6Rules as R, Severity } from '../../../enums';

export default {
	[R.PreferConst]: [
		Severity.error,
		{
			destructuring: 'any',
			ignoreReadBeforeAssign: true,
		},
	],
};
