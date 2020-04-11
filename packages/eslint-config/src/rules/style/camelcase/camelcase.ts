import { EsLintStyleRules as R, Severity } from '../../../enums';

export default {
	[R.Camelcase]: [Severity.error, { properties: 'never', ignoreDestructuring: false }],
};
