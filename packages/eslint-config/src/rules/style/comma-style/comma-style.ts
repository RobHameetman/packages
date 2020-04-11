import { EsLintStyleRules as R, Severity } from '../../../enums';

export default {
	[R.CommaStyle]: [
		Severity.error,
		'last',
		{
			exceptions: {
				ArrayExpression: false,
				ArrayPattern: false,
				ArrowFunctionExpression: false,
				CallExpression: false,
				FunctionDeclaration: false,
				FunctionExpression: false,
				ImportDeclaration: false,
				ObjectExpression: false,
				ObjectPattern: false,
				VariableDeclaration: false,
				NewExpression: false,
			},
		},
	],
};
