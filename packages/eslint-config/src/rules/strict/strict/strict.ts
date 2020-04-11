import { EsLintStrictRules as R, Severity } from '../../../enums';

/**
 * @see: https://eslint.org/docs/rules/strict
 */
export default {
	[R.Strict]: [Severity.off],
};
