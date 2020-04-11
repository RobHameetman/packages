import { EsLintBestPracticesRules as R, Severity } from '../../../enums';

/**
 * @see: https://eslint.org/docs/rules/array-callback-return
 */
export default {
	[R.ArrayCallbackReturn]: [Severity.error, { allowImplicit: true }],
};
