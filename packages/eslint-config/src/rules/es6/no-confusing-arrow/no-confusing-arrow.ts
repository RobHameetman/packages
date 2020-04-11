import { EsLintEs6Rules as R, Severity } from '../../../enums';

export default {
	[R.NoConfusingArrow]: [Severity.error, { allowParens: true }],
};
