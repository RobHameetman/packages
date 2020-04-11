import { EsLintEs6Rules as R, Severity } from '../../../enums';

export default {
	[R.PreferArrowCallback]: [
		Severity.error,
		{
			allowNamedFunctions: false,
			allowUnboundThis: true,
		},
	],
};
