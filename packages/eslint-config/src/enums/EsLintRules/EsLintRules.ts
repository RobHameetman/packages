import { EsLintBestPracticesRules } from '../EsLintBestPracticesRules';
import { EsLintDeprecatedRules } from '../EsLintDeprecatedRules';
import { EsLintErrorRules } from '../EsLintErrorRules';
import { EsLintEs6Rules } from '../EsLintEs6Rules';
import { EsLintNodeRules } from '../EsLintNodeRules';
import { EsLintRemovedRules } from '../EsLintRemovedRules';
import { EsLintStrictRules } from '../EsLintStrictRules';
import { EsLintStyleRules } from '../EsLintStyleRules';
import { EsLintVariablesRules } from '../EsLintVariablesRules';

export const EsLintRules = {
	...EsLintBestPracticesRules,
	...EsLintDeprecatedRules,
	...EsLintErrorRules,
	...EsLintEs6Rules,
	...EsLintNodeRules,
	...EsLintRemovedRules,
	...EsLintStrictRules,
	...EsLintStyleRules,
	...EsLintVariablesRules,
};

export type EsLintActiveRules =
	| EsLintBestPracticesRules
	| EsLintErrorRules
	| EsLintEs6Rules
	| EsLintNodeRules
	| EsLintStrictRules
	| EsLintStyleRules
	| EsLintVariablesRules;

export type EsLintRules = EsLintActiveRules | EsLintDeprecatedRules | EsLintRemovedRules;
