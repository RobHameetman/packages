import { EsLintStyleRules as R, Severity } from '../../../enums';

export default {
	[R.NoUnneededTernary]: [Severity.error, { defaultAssignment: false }],
};
