import { EsLintPluginImportRules as R, Severity } from '../../../enums';

export default {
	[R.Order]: [Severity.error, { groups: [['builtin', 'external', 'internal']] }],
};
