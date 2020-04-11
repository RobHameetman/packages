import { EsLintVariablesRules as R, Severity } from '../../../enums';

export default {
	[R.NoUnusedVars]: [Severity.error, { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
};
