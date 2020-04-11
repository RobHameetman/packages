import { EsLintBestPracticesRules as R, Severity } from '../../../enums';

export default {
	[R.MaxClassesPerFile]: [Severity.error, 1],
};
