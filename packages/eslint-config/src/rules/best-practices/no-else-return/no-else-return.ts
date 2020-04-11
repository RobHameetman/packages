import { EsLintBestPracticesRules as R, Severity } from '../../../enums';

export default {
	[R.NoElseReturn]: [Severity.error, { allowElseIf: false }],
};
