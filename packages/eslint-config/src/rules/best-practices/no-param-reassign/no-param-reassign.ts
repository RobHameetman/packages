import { EsLintBestPracticesRules as R, Severity } from '../../../enums';

export default {
	[R.NoParamReassign]: [
		Severity.error,
		{
			props: true,
			ignorePropertyModificationsFor: [
				'acc', // for reduce accumulators
				'accumulator', // for reduce accumulators
				'e', // for e.returnvalue
				'ctx', // for Koa routing
				'req', // for Express requests
				'request', // for Express requests
				'res', // for Express responses
				'response', // for Express responses
				'$scope', // for Angular 1 scopes
				'staticContext', // for ReactRouter context
			],
		},
	],
};
