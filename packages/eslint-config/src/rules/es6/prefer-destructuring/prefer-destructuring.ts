import { EsLintEs6Rules as R, Severity } from '../../../enums';

export default {
	[R.PreferDestructuring]: [
		Severity.error,
		{
			VariableDeclarator: {
				array: false,
				object: true,
			},
			AssignmentExpression: {
				array: true,
				object: false,
			},
		},
		{ enforceForRenamedProperties: false },
	],
};
