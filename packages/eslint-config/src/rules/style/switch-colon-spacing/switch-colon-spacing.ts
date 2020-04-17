import { EsLintStyleRules as R, Severity } from '../../../enums';

export default {
	[R.SwitchColonSpacing]: [Severity.error, { after: true, before: false }],
};
