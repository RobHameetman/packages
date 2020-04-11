export enum EsLintEs6Rules {
	ArrowBodyStyle = 'arrow-body-style',
	ArrowParens = 'arrow-parens',
	ArrowSpacing = 'arrow-spacing',
	ConstructorSuper = 'constructor-super',
	GeneratorStarSpacing = 'generator-star-spacing',
	NoClassAssign = 'no-class-assign',
	NoConfusingArrow = 'no-confusing-arrow',
	NoConstAssign = 'no-const-assign',
	NopDupeClassMembers = 'no-dupe-class-members',
	NoDuplicateImports = 'no-duplicate-imports',
	NoNewSymbol = 'no-new-symbol',
	NoRestrictedExports = 'no-restricted-exports',
	NoRestrictedImports = 'no-restricted-imports',
	NoThisBeforeSuper = 'no-this-before-super',
	NoUselessComputedKey = 'no-useless-computed-key',
	NoUselessConstructor = 'no-useless-constructor',
	NoUselessRename = 'no-useless-rename',
	NoVar = 'no-var',
	ObjectShorthand = 'object-shorthand',
	PreferArrowCallback = 'prefer-arrow-callback',
	PreferConst = 'prefer-const',
	PreferDestructuring = 'prefer-destructuring',
	PreferNumericLiterals = 'prefer-numeric-literals',
	PreferRestParams = 'prefer-rest-params',
	PreferSpread = 'prefer-spread',
	PreferTemplate = 'prefer-template',
	RequireYield = 'require-yield',
	RestSpreadSpacing = 'rest-spread-spacing',
	SortImport = 'sort-imports',
	SymbolDescription = 'symbol-description',
	TemplateCurlySpacing = 'template-curly-spacing',
	YieldStarSpacing = 'yield-star-spacing',
}

export type EsLintEs6Rule = keyof typeof EsLintEs6Rules;

export const isEsLintEs6Rule = (value: unknown): value is EsLintEs6Rule =>
	typeof value === 'string' && (Object.values(EsLintEs6Rules) as Array<string>).includes(value);
