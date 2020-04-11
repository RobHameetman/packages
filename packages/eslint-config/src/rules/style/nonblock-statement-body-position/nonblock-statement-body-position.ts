import { EsLintBestPracticesRules as R, Severity } from '../../../enums';

export default {
	[R.BlockScopedVar]: [Severity.error],
};
