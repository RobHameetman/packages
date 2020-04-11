import ArrayBracketNewlineRule from './array-bracket-newline';
import ArrayBracketSpacingRule from './array-bracket-spacing';
import ArrayElementNewlineRule from './array-element-newline';
import BlockSpacingRule from './block-spacing';
import BraceStyleRule from './brace-style';
import CamelcaseRule from './camelcase';
import CapitalizedCommentsRule from './capitalized-comments';
import CommaDangleRule from './comma-dangle';
import CommaSpacingRule from './comma-spacing';
import CommaStyleRule from './comma-style';
import ComputedPropertySpacingRule from './computed-property-spacing';
import ConsistentThisRule from './consistent-this';
import EolLastRule from './eol-last';
import FuncCallSpacingRule from './func-call-spacing';
import FuncNameMatchingRule from './func-name-matching';
import FuncNamesRule from './func-names';
import FuncStyleRule from './func-style';
import FunctionCallArgumentNewlineRule from './function-call-argument-newline';
import FunctionParenNewlineRule from './function-paren-newline';
import IdBlacklistRule from './id-blacklist';
import IdLengthRule from './id-length';
import IdMatchRule from './id-match';
import ImplicitArrowLinebreakRule from './implicit-arrow-linebreak';
import IndentRule from './indent';
import JsxQuotesRule from './jsx-quotes';
import KeySpacingRule from './key-spacing';
import KeywordSpacingRule from './keyword-spacing';
import LineCommentPositionRule from './line-comment-position';
import LinebreakStyleRule from './linebreak-style';
import LinesAroundCommentRule from './lines-around-comment';
import LinesBetweenClassMembersRule from './lines-between-class-members';
import MaxDepthRule from './max-depth';
import MaxLenRule from './max-len';
import MaxLinesRule from './max-lines';
import MaxLinesPerFunctionRule from './max-lines-per-function';
import MaxNestedCallbacksRule from './max-nested-callbacks';
import MaxParamsRule from './max-params';
import MaxStatementsRule from './max-statements';
import MaxStatementsPerLineRule from './max-statements-per-line';
import MultilineCommentStyleRule from './multiline-comment-style';
import MultilineTernaryRule from './multiline-ternary';
import NewCapRule from './new-cap';
import NewlinePerChainedCalledRule from './newline-per-chained-call';
import NoArrayConstructorRule from './no-array-constructor';
import NoBitwiseRule from './no-bitwise';
import NoContinueRule from './no-continue';
import NoInlineCommentsRule from './no-inline-comments';
import NoLonelyIfRule from './no-lonely-if';
import NoMixedOperatorsRule from './no-mixed-operators';
import NoMixedSpacesAndsTabsRule from './no-mixed-spaces-and-tabs';
import NoMultiAssignRule from './no-multi-assign';
import NoMultipleEmptyLinesRule from './no-multiple-empty-lines';
import NoNegatedConditionRule from './no-negated-condition';
import NoNestedTernaryRule from './no-nested-ternary';
import NoTrailingSpacesRule from './no-trailing-spaces';
import NoUnderscoreDangleRule from './no-underscore-dangle';
import NoUnneededTernaryRule from './no-unneeded-ternary';
import NoWhitespaceBeforePropertyRule from './no-whitespace-before-property';
import NonblockStatementBodyPositionRule from './nonblock-statement-body-position';
import ObjectCurlyNewlineRule from './object-curly-newline';
import ObjectPropertyNewlineRule from './object-property-newline';
import OneVarRule from './one-var';
import OneVarDeclarationPerLineRule from './one-var-declaration-per-line';
import OperatorAssignmentRule from './operator-assignment';
import OperatorLinebreakRule from './operator-linebreak';
import PaddedBlocksRule from './padded-blocks';
import PaddingLineBetweenStatementsRule from './padding-line-between-statements';
import PreferExponentiationOperatorRule from './prefer-exponentiation-operator';
import PreferObjectSpreadRule from './prefer-object-spread';
import QuotePropsRule from './quote-props';
import QuotesRule from './quotes';
import SemiRule from './semi';
import SemiSpacingRule from './semi-spacing';
import SemiStyleRule from './semi-style';
import SortKeysRule from './sort-keys';
import SpaceBeforeBlocksRule from './space-before-blocks';
import SpaceBeforeFunctionParenRule from './space-before-function-paren';
import SpaceInParensRule from './space-in-parens';
import SpaceInfixOpsRule from './space-infix-ops';
import SpaceUnaryOpsRule from './space-unary-ops';
import SpacedCommentRule from './spaced-comment';
import SwitchColonSpacingRule from './switch-colon-spacing';
import TemplateTagSpacingRule from './template-tag-spacing';
import UnicodeBomRule from './unicode-bom';
import WrapRegexRule from './wrap-regex';

export const rules = {
	...ArrayBracketNewlineRule,
	...ArrayBracketSpacingRule,
	...ArrayElementNewlineRule,
	...BlockSpacingRule,
	...BraceStyleRule,
	...CamelcaseRule,
	...CapitalizedCommentsRule,
	...CommaDangleRule,
	...CommaSpacingRule,
	...CommaStyleRule,
	...ComputedPropertySpacingRule,
	...ConsistentThisRule,
	...EolLastRule,
	...FuncCallSpacingRule,
	...FuncNameMatchingRule,
	...FuncNamesRule,
	...FuncStyleRule,
	...FunctionCallArgumentNewlineRule,
	...FunctionParenNewlineRule,
	...IdBlacklistRule,
	...IdLengthRule,
	...IdMatchRule,
	...ImplicitArrowLinebreakRule,
	...IndentRule,
	...JsxQuotesRule,
	...KeySpacingRule,
	...KeywordSpacingRule,
	...LineCommentPositionRule,
	...LinebreakStyleRule,
	...LinesAroundCommentRule,
	...LinesBetweenClassMembersRule,
	...MaxDepthRule,
	...MaxLenRule,
	...MaxLinesRule,
	...MaxLinesPerFunctionRule,
	...MaxNestedCallbacksRule,
	...MaxParamsRule,
	...MaxStatementsRule,
	...MaxStatementsPerLineRule,
	...MultilineCommentStyleRule,
	...MultilineTernaryRule,
	...NewCapRule,
	...NewlinePerChainedCalledRule,
	...NoArrayConstructorRule,
	...NoBitwiseRule,
	...NoContinueRule,
	...NoInlineCommentsRule,
	...NoLonelyIfRule,
	...NoMixedOperatorsRule,
	...NoMixedSpacesAndsTabsRule,
	...NoMultiAssignRule,
	...NoMultipleEmptyLinesRule,
	...NoNegatedConditionRule,
	...NoNestedTernaryRule,
	...NoTrailingSpacesRule,
	...NoUnderscoreDangleRule,
	...NoUnneededTernaryRule,
	...NoWhitespaceBeforePropertyRule,
	...NonblockStatementBodyPositionRule,
	...ObjectCurlyNewlineRule,
	...ObjectPropertyNewlineRule,
	...OneVarRule,
	...OneVarDeclarationPerLineRule,
	...OperatorAssignmentRule,
	...OperatorLinebreakRule,
	...PaddedBlocksRule,
	...PaddingLineBetweenStatementsRule,
	...PreferExponentiationOperatorRule,
	...PreferObjectSpreadRule,
	...QuotePropsRule,
	...QuotesRule,
	...SemiRule,
	...SemiSpacingRule,
	...SemiStyleRule,
	...SortKeysRule,
	...SpaceBeforeBlocksRule,
	...SpaceBeforeFunctionParenRule,
	...SpaceInParensRule,
	...SpaceInfixOpsRule,
	...SpaceUnaryOpsRule,
	...SpacedCommentRule,
	...SwitchColonSpacingRule,
	...TemplateTagSpacingRule,
	...UnicodeBomRule,
	...WrapRegexRule,
};
