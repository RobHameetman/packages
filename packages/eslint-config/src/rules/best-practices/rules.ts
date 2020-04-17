import AccessorPairsRule from './accessor-pairs';
import ArrayCallbackReturnRule from './array-callback-return';
import BlockScopedVarRule from './block-scoped-var';
import ClassMethodsUseThisRule from './class-methods-use-this';
import ComplexityRule from './complexity';
import ConsistentReturnRule from './consistent-return';
import CurlyRule from './curly';
import DefaultCaseRule from './default-case';
import DefaultParamLastRule from './default-param-last';
import DotLocationRule from './dot-location';
import DotNotationRule from './dot-notation';
import EqeqeqRule from './eqeqeq';
import GroupedAccessorPairsRule from './grouped-accessor-pairs';
import GuardForInRule from './guard-for-in';
import MaxClassesPerFileRule from './max-classes-per-file';
import NoAlertRule from './no-alert';
import NoCallerRule from './no-caller';
import NoCaseDeclarationsRule from './no-case-declarations';
import NoConstructorReturnRule from './no-constructor-return';
import NoDivRegexRule from './no-div-regex';
import NoElseReturnRule from './no-else-return';
import NoEmptyFunctionRule from './no-empty-function';
import NoEqNullRule from './no-eq-null';
import NoEvalRule from './no-eval';
import NoExtraBindRule from './no-extra-bind';
import NoExtraLabelRule from './no-extra-label';
import NoFallthroughRule from './no-fallthrough';
import NoFloatingDecimalRule from './no-floating-decimal';
import NoGlobalAssignRule from './no-global-assign';
import NoImplicitCoercionRule from './no-implicit-coercion';
import NoImplicitGlobalsRule from './no-implicit-globals';
import NoImpliedEvalRule from './no-implied-eval';
import NoInvalidThisRule from './no-invalid-this';
import NoIteratorRule from './no-iterator';
import NoLabelsRule from './no-labels';
import NoLoneBlocksRule from './no-lone-blocks';
import NoLoopFuncRule from './no-loop-func';
import NoMagicNumbersRule from './no-magic-numbers';
import NoMultiSpacesRule from './no-multi-spaces';
import NoMultiStrRule from './no-multi-str';
import NoNewRule from './no-new';
import NoNewFuncRule from './no-new-func';
import NoNewWrappersRule from './no-new-wrappers';
import NoOctalRule from './no-octal';
import NoOctalEscapeRule from './no-octal-escape';
import NoParamReassignRule from './no-param-reassign';
import NoProtoRule from './no-proto';
import NoRedeclareRule from './no-redeclare';
import NoRestrictedPropertiesRule from './no-restricted-properties';
import NoReturnAssignRule from './no-return-assign';
import NoReturnAwaitRule from './no-return-await';
import NoScriptUrlRule from './no-script-url';
import NoSelfAssignRule from './no-self-assign';
import NoSequencesRule from './no-sequences';
import NoThrowLiteralRule from './no-throw-literal';
import NoUnmodifiedLoopConditionRule from './no-unmodified-loop-condition';
import NoUnusedExpressionsRule from './no-unused-expressions';
import NoUnusedLabelsRule from './no-unused-labels';
import NoUselessCallRule from './no-useless-call';
import NoUselessCatchRule from './no-useless-catch';
import NoUselessCocatRule from './no-useless-concat';
import NoUselessEscapeRule from './no-useless-escape';
import NoUselessReturnRule from './no-useless-return';
import NoVoidRule from './no-void';
import NoWarningCommentsRule from './no-warning-comments';
import NoWithRule from './no-with';
import PreferNamedCaptureGroupRule from './prefer-named-capture-group';
import PreferPromiseRejectErrorsRule from './prefer-promise-reject-errors';
import PreferRegexLiteralsRule from './prefer-regex-literals';
import RadixRule from './radix';
import RequireAwaitRule from './require-await';
import RequireUnicodeRegexpRule from './require-unicode-regexp';
import VarsOnTopRule from './vars-on-top';
import WrapIifeRule from './wrap-iife';
import YodaRule from './yoda';

export const rules = {
	...AccessorPairsRule,
	...ArrayCallbackReturnRule,
	...BlockScopedVarRule,
	...ClassMethodsUseThisRule,
	...ComplexityRule,
	...ConsistentReturnRule,
	...CurlyRule,
	...DefaultCaseRule,
	...DefaultParamLastRule,
	...DotLocationRule,
	...DotNotationRule,
	...EqeqeqRule,
	...GroupedAccessorPairsRule,
	...GuardForInRule,
	...MaxClassesPerFileRule,
	...NoAlertRule,
	...NoCallerRule,
	...NoCaseDeclarationsRule,
	...NoConstructorReturnRule,
	...NoDivRegexRule,
	...NoElseReturnRule,
	...NoEmptyFunctionRule,
	...NoEqNullRule,
	...NoEvalRule,
	...NoExtraBindRule,
	...NoExtraLabelRule,
	...NoFallthroughRule,
	...NoFloatingDecimalRule,
	...NoGlobalAssignRule,
	...NoImplicitCoercionRule,
	...NoImplicitGlobalsRule,
	...NoImpliedEvalRule,
	...NoInvalidThisRule,
	...NoIteratorRule,
	...NoLabelsRule,
	...NoLoneBlocksRule,
	...NoLoopFuncRule,
	...NoMagicNumbersRule,
	...NoMultiSpacesRule,
	...NoMultiStrRule,
	...NoNewRule,
	...NoNewFuncRule,
	...NoNewWrappersRule,
	...NoOctalRule,
	...NoOctalEscapeRule,
	...NoParamReassignRule,
	...NoProtoRule,
	...NoRedeclareRule,
	...NoRestrictedPropertiesRule,
	...NoReturnAssignRule,
	...NoReturnAwaitRule,
	...NoScriptUrlRule,
	...NoSelfAssignRule,
	...NoSequencesRule,
	...NoThrowLiteralRule,
	...NoUnmodifiedLoopConditionRule,
	...NoUnusedExpressionsRule,
	...NoUnusedLabelsRule,
	...NoUselessCallRule,
	...NoUselessCatchRule,
	...NoUselessCocatRule,
	...NoUselessEscapeRule,
	...NoUselessReturnRule,
	...NoVoidRule,
	...NoWarningCommentsRule,
	...NoWithRule,
	...PreferNamedCaptureGroupRule,
	...PreferPromiseRejectErrorsRule,
	...PreferRegexLiteralsRule,
	...RadixRule,
	...RequireAwaitRule,
	...RequireUnicodeRegexpRule,
	...VarsOnTopRule,
	...WrapIifeRule,
	...YodaRule,
};
