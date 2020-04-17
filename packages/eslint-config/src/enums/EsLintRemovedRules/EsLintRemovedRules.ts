export enum EsLintRemovedRules {
	GeneratorStar = 'generator-star',
	GlobalStrict = 'global-strict',
	NoArrowCondition = 'no-arrow-condition',
	NoCommaDangle = 'no-comma-dangle',
	NoEmptyClass = 'no-empty-class',
	NoEmptyLabel = 'no-empty-label',
	NoExtraStrict = 'no-extra-strict',
	NoReservedKeys = 'no-reserved-keys',
	NoSpaceBeforeSemi = 'no-space-before-semi',
	NoWrapFunc = 'no-wrap-func',
	SpaceAfterFunctionName = 'space-after-function-name',
	SpaceAfterKeywords = 'space-after-keywords',
	SpaceBeforeFunctionParentheses = 'space-before-function-parentheses',
	SpaceBeforeKeywords = 'space-before-keywords',
	SpaceInBrackets = 'space-in-brackets',
	SpaceReturnThrowCase = 'space-return-throw-case',
	SpaceUnaryWordOps = 'space-unary-word-ops',
	SpacedLineComment = 'spaced-line-comment',
}

export type EsLintRemovedRule = keyof typeof EsLintRemovedRules;

export const isEsLintRemovedRule = (
	value: unknown,
): value is EsLintRemovedRule =>
	typeof value === 'string' &&
	(Object.values(EsLintRemovedRules) as Array<string>).includes(value);
