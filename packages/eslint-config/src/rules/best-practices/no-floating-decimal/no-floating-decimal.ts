import { EsLintBestPracticesRules as R, Severity } from '../../../enums';

export default {
	[R.NoFloatingDecimal]: [Severity.error],
};
