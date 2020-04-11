import { EsLintBestPracticesRules as R, Severity } from '../../../enums';

export default {
	[R.GroupedAccessorPairs]: [Severity.error, 'getBeforeSet'],
};
