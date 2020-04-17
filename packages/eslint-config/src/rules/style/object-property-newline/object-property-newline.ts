import { EsLintStyleRules as R, Severity } from '../../../enums';

export default {
	[R.ObjectPropertyNewline]: [
		Severity.error,
		{ allowAllPropertiesOnSameLine: true },
	],
};
