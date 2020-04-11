import { EsLintBestPracticesRules as R, Severity } from '../../../enums';

export default {
	[R.GuardForIn]: [Severity.error],
};
