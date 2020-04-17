import {
	Linebreaks,
	EsLintStyleRules as R,
	Severity,
	Statements,
} from '../../../enums';

const EXPORT_STATEMENTS = [Statements.export, Statements.cjsExport];
const IMPORT_STATEMENTS = [Statements.import, Statements.cjsImport];
const SWITCH_LABELS = [Statements.case, Statements.default];
const VARIABLE_DECLARATIONS = [
	Statements.const,
	Statements.let,
	Statements.var,
];

const BLOCK_LIKE = [
	Statements.blockLike,
	Statements.multilineBlockLike,
	Statements.block,
	Statements.class,
	Statements.do,
	Statements.for,
	Statements.if,
	Statements.iife,
	Statements.switch,
	Statements.try,
	Statements.while,
];

export default {
	[R.PaddingLineBetweenStatements]: [
		Severity.error,
		{ blankLine: Linebreaks.always, prev: Statements.directive, next: '*' },
		{
			blankLine: Linebreaks.any,
			prev: Statements.directive,
			next: Statements.directive,
		},
		{ blankLine: Linebreaks.always, prev: IMPORT_STATEMENTS, next: '*' },
		{
			blankLine: Linebreaks.any,
			prev: IMPORT_STATEMENTS,
			next: IMPORT_STATEMENTS,
		},
		{ blankLine: Linebreaks.always, prev: VARIABLE_DECLARATIONS, next: '*' },
		{
			blankLine: Linebreaks.any,
			prev: VARIABLE_DECLARATIONS,
			next: VARIABLE_DECLARATIONS,
		},
		{ blankLine: Linebreaks.always, prev: BLOCK_LIKE, next: '*' },
		{ blankLine: Linebreaks.always, prev: BLOCK_LIKE, next: BLOCK_LIKE },
		{ blankLine: Linebreaks.never, prev: SWITCH_LABELS, next: '*' },
		{ blankLine: Linebreaks.always, prev: '*', next: 'return' },
		{ blankLine: Linebreaks.always, prev: EXPORT_STATEMENTS, next: '*' },
		{
			blankLine: Linebreaks.any,
			prev: EXPORT_STATEMENTS,
			next: EXPORT_STATEMENTS,
		},
	],
};
