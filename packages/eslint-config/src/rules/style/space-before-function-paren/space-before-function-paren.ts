import { EsLintStyleRules as R, Severity } from '../../../enums';

export default {
	[R.SpaceBeforeFunctionParen]: [
		Severity.error,
		{
			anonymous: 'always',
			named: 'never',
			asyncArrow: 'always',
		},
	],
};
