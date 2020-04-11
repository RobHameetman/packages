import { EsLintStyleRules as R, Severity } from '../../../enums';

export default {
	[R.CommaDangle]: [
		Severity.error,
		{
			arrays: 'always-multiline',
			objects: 'always-multiline',
			imports: 'always-multiline',
			exports: 'always-multiline',
			functions: 'always-multiline',
		},
	],
};
