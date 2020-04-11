import ForDirectionRule from './for-direction';
import GetterReturnRule from './getter-return';
import NoAsyncPromiseExecutorRule from './no-async-promise-executor';
import NoAwaitInLoopRule from './no-await-in-loop';
import NoCompareNegZeroRule from './no-compare-neg-zero';
import NoConsoleRule from './no-console';
import NoConstantConditionRule from './no-constant-condition';
import NoControlRegexRule from './no-control-regex';
import NoDebuggerRule from './no-debugger';
import NoDupeArgsRule from './no-dupe-args';
import NoDupeElseIfRule from './no-dupe-else-if';
import NoDuplicateCaseRule from './no-duplicate-case';
import NoEmptyRule from './no-empty';
import NoEmptyCharacterClassRule from './no-empty-character-class';
import NoExAssignRule from './no-ex-assign';
import NoExtraBooleanCastRule from './no-extra-boolean-cast';
import NoExtraParensRule from './no-extra-parens';
import NoExtraSemiRule from './no-extra-semi';
import NoFuncAssignRule from './no-func-assign';
import NoImportAssignRule from './no-import-assign';
import NoInnerDeclarationsRule from './no-inner-declarations';
import NoInvalidRegexpRule from './no-invalid-regexp';
import NoIrregularWhitespaceRule from './no-irregular-whitespace';
import NoMisleadingCharacterClassRule from './no-misleading-character-class';
import NoObjCallsRule from './no-obj-calls';
import NoPrototypeBuiltinsRule from './no-prototype-builtins';
import NoRegexSpacesRule from './no-regex-spaces';
import NoSetterReturnRule from './no-setter-return';
import NoSparseArraysRule from './no-sparse-arrays';
import NoTemplateCurlyInStringRule from './no-template-curly-in-string';
import NoUnexpectedMultilineRule from './no-unexpected-multiline';
import NoUnreachableRule from './no-unreachable';
import NoUnsafeFinallyRule from './no-unsafe-finally';
import NoUselessBackreferenceRule from './no-useless-backreference';
import RequireAtomicUpdatesRule from './require-atomic-updates';
import UseIsnanRule from './use-isnan';
import ValidTypeofRule from './valid-typeof';

export const rules = {
	...ForDirectionRule,
	...GetterReturnRule,
	...NoAsyncPromiseExecutorRule,
	...NoAwaitInLoopRule,
	...NoCompareNegZeroRule,
	...NoConsoleRule,
	...NoConstantConditionRule,
	...NoControlRegexRule,
	...NoDebuggerRule,
	...NoDupeArgsRule,
	...NoDupeElseIfRule,
	...NoDuplicateCaseRule,
	...NoEmptyRule,
	...NoEmptyCharacterClassRule,
	...NoExAssignRule,
	...NoExtraBooleanCastRule,
	...NoExtraParensRule,
	...NoExtraSemiRule,
	...NoFuncAssignRule,
	...NoImportAssignRule,
	...NoInnerDeclarationsRule,
	...NoInvalidRegexpRule,
	...NoIrregularWhitespaceRule,
	...NoMisleadingCharacterClassRule,
	...NoObjCallsRule,
	...NoPrototypeBuiltinsRule,
	...NoRegexSpacesRule,
	...NoSetterReturnRule,
	...NoSparseArraysRule,
	...NoTemplateCurlyInStringRule,
	...NoUnexpectedMultilineRule,
	...NoUnreachableRule,
	...NoUnsafeFinallyRule,
	...NoUselessBackreferenceRule,
	...RequireAtomicUpdatesRule,
	...UseIsnanRule,
	...ValidTypeofRule,
};
