import { EsLintPluginImportRules as R, Severity, Usage } from '../../../enums';

export default {
	[R.Extensions]: [
		Severity.error,
		'ignorePackages',
		{
			ts: Usage.never,
			tsx: Usage.never,
			js: Usage.never,
			jsx: Usage.never,
			mjs: Usage.never,
		},
	],
};
