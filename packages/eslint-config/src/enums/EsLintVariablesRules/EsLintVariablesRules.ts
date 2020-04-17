export enum EsLintVariablesRules {
	InitDeclarations = 'init-declarations',
	NoDeleteVar = 'no-delete-var',
	NoLabelVar = 'no-label-var',
	NoRestrictedGlobals = 'no-restricted-globals',
	NoShadow = 'no-shadow',
	NoShadowRestrictedNames = 'no-shadow-restricted-names',
	NoUndef = 'no-undef',
	NoUndefInit = 'no-undef-init',
	NoUndefined = 'no-undefined',
	NoUnusedVars = 'no-unused-vars',
	NoUseBeforeDefine = 'no-use-before-define',
}

export type EsLintVariablesRule = keyof typeof EsLintVariablesRules;

export const isEsLintVariablesRule = (
	value: unknown,
): value is EsLintVariablesRule =>
	typeof value === 'string' &&
	(Object.values(EsLintVariablesRules) as Array<string>).includes(value);
