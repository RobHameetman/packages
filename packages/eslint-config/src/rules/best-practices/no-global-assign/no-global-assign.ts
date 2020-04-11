import { EsLintBestPracticesRules as R, Severity } from '../../../enums';

export default {
	[R.NoGlobalAssign]: [Severity.error],
};
