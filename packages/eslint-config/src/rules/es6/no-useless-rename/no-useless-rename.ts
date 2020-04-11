import { EsLintEs6Rules as R, Severity } from '../../../enums';

export default {
	[R.NoUselessRename]: [
		Severity.error,
		{
			ignoreDestructuring: false,
			ignoreImport: false,
			ignoreExport: false,
		},
	],
};
