export enum EsLintPluginTypeScriptRules {
	AdjacentOverloadSignatures = '@typescript-eslint/adjacent-overload-signatures',
	BanTsIgnore = '@typescript-eslint/ban-ts-ignore',
	BanTypes = '@typescript-eslint/ban-types',
	Camelcase = '@typescript-eslint/camelcase', //! Disable counterpart
	ClassNameCasing = '@typescript-eslint/class-name-casing',
	ConsistentTypeAssertions = '@typescript-eslint/consistent-type-assertions',
	ExplicitFunctionReturnType = '@typescript-eslint/explicit-function-return-type',
	InterfaceNamePrefix = '@typescript-eslint/interface-name-prefix',
	MemberDelimiterStyle = '@typescript-eslint/member-delimiter-style',
	NoArrayConstructor = '@typescript-eslint/no-array-constructor', //! Disable counterpart
	NoEmptyFunction = '@typescript-eslint/no-empty-function', //! Disable counterpart
	NoEmptyInterface = '@typescript-eslint/no-empty-interface',
	NoExplicitAny = '@typescript-eslint/no-explicit-any',
	NoInferrableTypes = '@typescript-eslint/no-inferrable-types',
	NoMisusedNew = '@typescript-eslint/no-misused-new',
	NoNamespace = '@typescript-eslint/no-namespace',
	NoNonNullAssertion = '@typescript-eslint/no-non-null-assertion',
	NoThisAlias = '@typescript-eslint/no-this-alias',
	NoUnusedVars = '@typescript-eslint/no-unused-vars', //! Disable counterpart
	NoUseBeforeDefine = '@typescript-eslint/no-use-before-define', //! Disable counterpart
	PreferNamespaceKeyword = '@typescript-eslint/prefer-namespace-keyword',
	TripleSlashReference = '@typescript-eslint/triple-slash-reference',
	TypeAnnotationSpacing = '@typescript-eslint/type-annotation-spacing',
}

export type EsLintPluginTypeScriptRule = keyof typeof EsLintPluginTypeScriptRules;

export const isEsLintPluginTypeScriptRule = (value: unknown): value is EsLintPluginTypeScriptRule =>
	typeof value === 'string' &&
	(Object.values(EsLintPluginTypeScriptRules) as Array<string>).includes(value);
