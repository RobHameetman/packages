import { EsLintStyleRules as R, Severity, Usage } from '../../../enums';

export default {
	[R.ObjectCurlyNewline]: [
		Severity.error,
		{
			ObjectExpression: { multiline: true },
			ObjectPattern: { multiline: true },
			ImportDeclaration: Usage.never,
			ExportDeclaration: { multiline: true },
		},
	],
};
