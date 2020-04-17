import { EsLintStyleRules as R, Severity } from '../../../enums';

export default {
	[R.BraceStyle]: [Severity.error, '1tbs', { allowSingleLine: true }],
};
