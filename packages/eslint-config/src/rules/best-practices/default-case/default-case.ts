import { EsLintBestPracticesRules as R, Severity } from '../../../enums';

export default {
	[R.DefaultCase]: [Severity.error, { commentPattern: '^no default$' }],
};
