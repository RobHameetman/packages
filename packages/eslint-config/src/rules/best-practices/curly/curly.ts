import { EsLintBestPracticesRules as R, Severity } from '../../../enums';

export default {
	[R.Curly]: [Severity.error, 'multi-line'],
};
