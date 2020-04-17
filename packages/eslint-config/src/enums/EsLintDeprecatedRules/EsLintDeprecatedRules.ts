export enum EsLintDeprecatedRules {
	IndentLegacy = 'indent-legacy',
	LinesAroundDirective = 'lines-around-directive',
	NewlineAfterVar = 'newline-after-var',
	NewlineBeforeVar = 'newline-before-var',
	NewlineBeforeReturn = 'newline-before-return',
	NoCatchShadow = 'no-catch-shadow',
	NoNativeReassign = 'no-native-reassign',
	NoNegatedInLhs = 'no-negated-in-lhs',
	NoSpacedFunc = 'no-spaced-func',
	PreferReflect = 'prefer-reflect',
	RequireJsdoc = 'require-jsdoc',
	ValidJsdoc = 'valid-jsdoc',
}

export type EsLintDeprecatedRule = keyof typeof EsLintDeprecatedRules;

export const isEsLintDeprecatedRule = (
	value: unknown,
): value is EsLintDeprecatedRule =>
	typeof value === 'string' &&
	(Object.values(EsLintDeprecatedRules) as Array<string>).includes(value);
