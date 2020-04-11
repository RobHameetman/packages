import ArrowBodyStyleRule from './arrow-body-style';
import ArrowParensRule from './arrow-parens';
import ConstructorSuperRule from './constructor-super';
import GeneratorStarSpacingRule from './generator-star-spacing';
import NoClassAssignRule from './no-class-assign';
import NoConfusingArrowRule from './no-confusing-arrow';
import NoConstAssignRule from './no-const-assign';
import NoDupeClassMembersRule from './no-dupe-class-members';
import NoDuplicateImportsRule from './no-duplicate-imports';
import NoRestrictedExportsRule from './no-restricted-exports';
import NoRestrictedImportsRule from './no-restricted-imports';
import NoThisBeforeSuperRule from './no-this-before-super';
import NoUselessComputedKey from './no-useless-computed-key';
import NoUselessConstructorRule from './no-useless-constructor';
import NoUselessRenameRule from './no-useless-rename';
import NoVarRule from './no-var';
import ObjectShorthandRule from './object-shorthand';
import PreferArrowCallbackRule from './prefer-arrow-callback';
import PreferConstRule from './prefer-const';
import PreferDestructuringRule from './prefer-destructuring';
import PreferNumericLiteralsRule from './prefer-numeric-literals';
import PreferRestParamsRule from './prefer-rest-params';
import PreferSpreadRule from './prefer-spread';
import PreferTemplateRule from './prefer-template';
import RequireYieldRule from './require-yield';
import RestSpreadSpacingRule from './rest-spread-spacing';
import SortImportsRule from './sort-imports';
import SymbolDescriptionRule from './symbol-description';
import TemplateCurlySpacingRule from './template-curly-spacing';
import YieldStarSpacingRule from './yield-star-spacing';

export const rules = {
	...ArrowBodyStyleRule,
	...ArrowParensRule,
	...ConstructorSuperRule,
	...GeneratorStarSpacingRule,
	...NoClassAssignRule,
	...NoConfusingArrowRule,
	...NoConstAssignRule,
	...NoDupeClassMembersRule,
	...NoDuplicateImportsRule,
	...NoRestrictedExportsRule,
	...NoRestrictedImportsRule,
	...NoThisBeforeSuperRule,
	...NoUselessComputedKey,
	...NoUselessConstructorRule,
	...NoUselessRenameRule,
	...NoVarRule,
	...ObjectShorthandRule,
	...PreferArrowCallbackRule,
	...PreferConstRule,
	...PreferDestructuringRule,
	...PreferNumericLiteralsRule,
	...PreferRestParamsRule,
	...PreferSpreadRule,
	...PreferTemplateRule,
	...RequireYieldRule,
	...RestSpreadSpacingRule,
	...SortImportsRule,
	...SymbolDescriptionRule,
	...TemplateCurlySpacingRule,
	...YieldStarSpacingRule,
};
