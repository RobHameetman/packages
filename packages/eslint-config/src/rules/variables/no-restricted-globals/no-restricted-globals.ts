import {
	CONFUSING_BROWSER_GLOBALS,
	EsLintVariablesRules as R,
	Severity,
} from '../../../enums';

export default {
	[R.NoRestrictedGlobals]: [Severity.error, 'isFinite', 'isNaN'].concat(
		CONFUSING_BROWSER_GLOBALS,
	),
};
