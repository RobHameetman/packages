import { EsLintBestPracticesRules as R, Severity } from '../../../enums';

export default {
	[R.DotLocation]: [Severity.error, 'property'],
};
