import { EsLintErrorRules as R, Severity } from '../../../enums';

export default {
	[R.ValidTypeof]: [Severity.error, { requireStringLiterals: true }],
};
