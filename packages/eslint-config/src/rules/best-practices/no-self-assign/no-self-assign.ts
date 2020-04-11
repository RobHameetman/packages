import { EsLintBestPracticesRules as R, Severity } from '../../../enums';

export default {
	[R.NoSelfAssign]: [Severity.error, { props: true }],
};
