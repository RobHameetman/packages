import { EsLintBestPracticesRules as R, Severity } from '../../../enums';

export default {
	[R.ClassMethodsUseThis]: [Severity.error, { exceptMethods: [] }],
};
