import { EsLintEs6Rules as R, Severity, Usage } from '../../../enums';

export default {
	[R.ArrowBodyStyle]: [
		Severity.error,
		Usage.asNeeded,
		{ requireReturnForObjectLiteral: false },
	],
};
