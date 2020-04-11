import { EsLintStyleRules as R, Severity, Usage } from '../../../enums';

export default {
	[R.SpacedComment]: [
		Severity.error,
		Usage.always,
		{
			line: {
				exceptions: ['-', '+'],
				markers: ['=', '!', '/', '|->'],
			},
			block: {
				exceptions: ['-', '+', '*'],
				markers: ['=', '!', ':', '::'],
				balanced: true,
			},
		},
	],
};
