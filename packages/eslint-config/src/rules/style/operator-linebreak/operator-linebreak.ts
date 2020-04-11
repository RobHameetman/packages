import { EsLintStyleRules as R, Severity } from '../../../enums';

export default {
	[R.OperatorLinebreak]: [Severity.error, 'before', { overrides: { '=': 'after' } }],
};
