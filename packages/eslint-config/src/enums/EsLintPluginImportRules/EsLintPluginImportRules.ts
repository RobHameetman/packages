export enum EsLintPluginImportRules {
	Default = 'import/default',
	DynamicImportChunkname = 'import/dynamic-import-chunkname',
	Export = 'import/export',
	ExportsLast = 'import/exports-last',
	Extensions = 'import/extensions',
	First = 'import/first',
	GroupExports = 'import/group-exports',
	MaxDependencies = 'import/max-dependencies',
	Named = 'import/named',
	Namespace = 'import/namespace',
	NewlineAfterImport = 'import/newline-after-import',
	NoAbsolutePath = 'import/no-absolute-path',
	NoAmd = 'import/no-amd',
	NoAnonymousDefaultExport = 'import/no-anonymous-default-export',
	NoCommonjs = 'import/no-commonjs',
	NoCycle = 'import/no-cycle',
	NoDefaultExport = 'import/no-default-export',
	NoDeprecated = 'import/no-deprecated',
	NoDuplicates = 'import/no-duplicates',
	NoDynamicRequire = 'import/no-dynamic-require',
	NoExtraneousDependencies = 'import/no-extraneous-dependencies',
	NoInternalModules = 'import/no-internal-modules',
	NoMutableExports = 'import/no-mutable-exports',
	NoNamedAsDefault = 'import/no-named-as-default',
	NoNamedAsDefaultMember = 'import/no-named-as-default-member',
	NoNamedExport = 'import/no-named-export',
	NoNamespace = 'import/no-namespace',
	NoNodejsModules = 'import/no-nodejs-modules',
	NoRelativeParentImports = 'import/no-relative-parent-imports',
	NoRestrictedPaths = 'import/no-restricted-paths',
	NoSelfImport = 'import/no-self-import',
	NoUnassignedImport = 'import/no-unassigned-import',
	NoUnresolved = 'import/no-unresolved',
	NoUnusedModules = 'import/no-unused-modules',
	NoUselessPathSegments = 'import/no-useless-path-segments',
	NoWebpackLoaderSyntax = 'import/no-webpack-loader-syntax',
	Order = 'import/order',
	PreferDefaultExport = 'import/prefer-default-export',
	Unambiguous = 'import/unambiguous',
}

export type EsLintPluginImportRule = keyof typeof EsLintPluginImportRules;

export const isEsLintPluginImportRule = (
	value: unknown,
): value is EsLintPluginImportRule =>
	typeof value === 'string' &&
	(Object.values(EsLintPluginImportRules) as Array<string>).includes(value);
