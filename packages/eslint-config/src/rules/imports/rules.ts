import DefaultRule from './default';
import DynamicImportChunknameRule from './dynamic-import-chunkname';
import ExportRule from './export';
import ExportLastRule from './exports-last';
import ExtensionsRule from './extensions';
import FirstRule from './first';
import GroupExportsRule from './group-exports';
import MaxDependenciesRule from './max-dependencies';
import NamedRule from './named';
import NamespaceRule from './namespace';
import NewlineAfterImportRule from './newline-after-import';
import NoAbsolutePathRule from './no-absolute-path';
import NoAmdRule from './no-amd';
import NoAnonymousDefaultExportRule from './no-anonymous-default-export';
import NoCommonjsRule from './no-commonjs';
import NoCycleRule from './no-cycle';
import NoDefaultExportRule from './no-default-export';
import NoDeprecatedRule from './no-deprecated';
import NoDuplicatesRule from './no-duplicates';
import NoDynamicRequireRule from './no-dynamic-require';
import NoExtraneousDependencies from './no-extraneous-dependencies';
import NoInternalModulesRule from './no-internal-modules';
import NoMutableExportsRule from './no-mutable-exports';
import NoNamedAsDefaultRule from './no-named-as-default';
import NoNamedAsDefaultMemberRule from './no-named-as-default-member';
import NoNamedExportRule from './no-named-export';
import NoNamespaceRule from './no-namespace';
import NoNodejsModulesRule from './no-nodejs-modules';
import NoRelativeParentImportsRule from './no-relative-parent-imports';
import NoRestrictedPathsRule from './no-restricted-paths';
import NoSelfImportRule from './no-self-import';
import NoUnassignedImportRule from './no-unassigned-import';
import NoUnresolvedRule from './no-unresolved';
import NoUnusedModulesRule from './no-unused-modules';
import NoUselessPathSegmentsRule from './no-useless-path-segments';
import NoWebpackLoaderSyntaxRule from './no-webpack-loader-syntax';
import OrderRule from './order';
import PreferDefaultExportRule from './prefer-default-export';
import UnambiguousRule from './unambiguous';

export const rules = {
	...DefaultRule,
	...DynamicImportChunknameRule,
	...ExportRule,
	...ExportLastRule,
	...ExtensionsRule,
	...FirstRule,
	...GroupExportsRule,
	...MaxDependenciesRule,
	...NamedRule,
	...NamespaceRule,
	...NewlineAfterImportRule,
	...NoAbsolutePathRule,
	...NoAmdRule,
	...NoAnonymousDefaultExportRule,
	...NoCommonjsRule,
	...NoCycleRule,
	...NoDefaultExportRule,
	...NoDeprecatedRule,
	...NoDuplicatesRule,
	...NoDynamicRequireRule,
	...NoExtraneousDependencies,
	...NoInternalModulesRule,
	...NoMutableExportsRule,
	...NoNamedAsDefaultRule,
	...NoNamedAsDefaultMemberRule,
	...NoNamedExportRule,
	...NoNamespaceRule,
	...NoNodejsModulesRule,
	...NoRelativeParentImportsRule,
	...NoRestrictedPathsRule,
	...NoSelfImportRule,
	...NoUnassignedImportRule,
	...NoUnresolvedRule,
	...NoUnusedModulesRule,
	...NoUselessPathSegmentsRule,
	...NoWebpackLoaderSyntaxRule,
	...OrderRule,
	...PreferDefaultExportRule,
	...UnambiguousRule,
};
