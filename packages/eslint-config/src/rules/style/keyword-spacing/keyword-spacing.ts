import { EsLintStyleRules as R, Severity } from '../../../enums';

export default {
	[R.KeywordSpacing]: [
		Severity.error,
		{
			before: true,
			after: true,
			overrides: {
				if: { after: false },
				for: { after: false },
				while: { after: false },
				switch: { after: false },
				return: { after: true },
				throw: { after: true },
				case: { after: true },
			},
		},
	],
};
