import { Rule as _Rule } from 'eslint';
import { Statement } from 'estree';
import { CustomRuleExampleOptions as Options, schema } from './custom-rule-example.schema';
import { Body, Categories, CustomESLintRule } from '../../utils';

const DEFAULT_MAX_STATEMENTS = 1;

/**
 * @see https://eslint.org/docs/developer-guide/working-with-rules
 */
export default new CustomESLintRule<Options>(schema)
	.info({
		name: 'custom-rule-example',
		description: 'TODO: Add a short description here.',
		category: Categories.PossibleProblems,
	})
	.validate({
		/**
		 * Should be keys of the ESLint `NodeListener` interface.
		 */
		check: ['FunctionDeclaration', 'FunctionExpression', 'ArrowFunctionExpression'],
		/**
		 * This is always a curried function, the outer function taking the rule
		 * context and the inner function being the listener attached to the
		 * `NodeListener` keys listed above.
		 */
		task: ({ options, report }) =>
			(node) => {
				const [{ maximumStatements: maxStatements }] = options || [{
					maximumStatements: DEFAULT_MAX_STATEMENTS,
				}];

				const isLonelyIfStatement = (statement: Statement) => {
					return statement.type === 'IfStatement' && statement.alternate == null;
				}

				const isOffendingConsequent = (consequent: Statement) => {
					return (
						(consequent.type === 'ExpressionStatement' && maxStatements === 0) ||
						(consequent.type === 'BlockStatement' &&
							consequent.body.length > maxStatements)
					);
				}

				const isOffendingIfStatement = (statement: Statement) => {
					return (
						isLonelyIfStatement(statement) &&
						'consequent' in statement &&
						isOffendingConsequent(statement.consequent)
					);
				}

				const hasSimplifiableConditionalBody = (functionBody: Body) => {
					const isBlockStatement = 'type' in functionBody && functionBody.type === 'BlockStatement';
					const hasBody = 'body' in functionBody;

					const { body } =
						isBlockStatement && hasBody
							? functionBody
							: { body: [] };

					return (
						body.length === 1 &&
						isOffendingIfStatement(body[0])
					);
				}

				const { body } = node;

				if (hasSimplifiableConditionalBody(body)) {
					report({
						node: body,
						message: 'Prefer an early return to a conditionally-wrapped function body',
					});
				}
			}
		});
