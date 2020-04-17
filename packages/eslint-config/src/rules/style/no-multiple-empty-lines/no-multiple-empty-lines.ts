import { EsLintStyleRules as R, Severity } from '../../../enums';

export default {
	[R.NoMultipleEmptyLines]: [Severity.error, { max: 1, maxBOF: 0, maxEOF: 0 }],
};
