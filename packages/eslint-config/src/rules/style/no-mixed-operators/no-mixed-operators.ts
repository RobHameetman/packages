import { EsLintStyleRules as R, Severity } from '../../../enums';

export default {
	[R.NoMixedOperators]: [
		Severity.error,
		{
			/*
			 * the list of arthmetic groups disallows mixing `%` and `**`
			 * with other arithmetic operators.
			 */
			groups: [
				['%', '**'],
				['%', '+'],
				['%', '-'],
				['%', '*'],
				['%', '/'],
				['/', '*'],
				['&', '|', '<<', '>>', '>>>'],
				['==', '!=', '===', '!=='],
				['&&', '||'],
			],
			allowSamePrecedence: false,
		},
	],
};
