import { EsLintStyleRules as R, Severity } from '../../../enums';

export default {
	[R.KeySpacing]: [Severity.error, { beforeColon: false, afterColon: true }],
};
