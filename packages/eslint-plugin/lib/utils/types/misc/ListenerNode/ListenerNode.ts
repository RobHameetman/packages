import { Listener } from '../Listener';
import {
	isArrayExpression,
	isArrayPattern,
	isArrowFunctionExpression,
	isAssignmentExpression,
	isAssignmentPattern,
	isAwaitExpression,
	isBinaryExpression,
	isBlockStatement,
	isBreakStatement,
	isCallExpression,
	isCatchClause,
	isChainExpression,
	isClassBody,
	isClassDeclaration,
	isClassExpression,
	isConditionalExpression,
	isContinueStatement,
	isDebuggerStatement,
	isDoWhileStatement,
	isEmptyStatement,
	isExportAllDeclaration,
	isExportDefaultDeclaration,
	isExportNamedDeclaration,
	isExportSpecifier,
	isExpressionStatement,
	isForInStatement,
	isForOfStatement,
	isForStatement,
	isFunctionDeclaration,
	isFunctionExpression,
	isIdentifier,
	isIfStatement,
	isImportDeclaration,
	isImportDefaultSpecifier,
	isImportExpression,
	isImportNamespaceSpecifier,
	isImportSpecifier,
	isLabeledStatement,
	isLiteral,
	isLogicalExpression,
	isMemberExpression,
	isMetaProperty,
	isMethodDefinition,
	isNewExpression,
	isNode,
	isObjectExpression,
	isObjectPattern,
	isProgram,
	isProperty,
	isRestElement,
	isReturnStatement,
	isSequenceExpression,
	isSpreadElement,
	isSuper,
	isSwitchCase,
	isSwitchStatement,
	isTaggedTemplateExpression,
	isTemplateElement,
	isTemplateLiteral,
	isThisExpression,
	isThrowStatement,
	isTryStatement,
	isUnaryExpression,
	isUpdateExpression,
	isVariableDeclaration,
	isVariableDeclarator,
	isWhileStatement,
	isWithStatement,
	isYieldExpression,
} from '../../estree';
import { isObject } from '../../../functions';

/**
 * A node passed to any listener function.
 */
export type ListenerNode<T extends Listener = Listener> =
	T extends ((node: infer U) => void | undefined)
		? U
		: never;

/**
 * Checks that an `unknown` value is a `ListenerNode`.
 *
 * Requirements:
 *   - `value` must be a valid implementation of any of the ESTree types below:
 *     - `ArrayExpression`
 *     - `ArrayPattern`
 *     - `ArrowFunctionExpression`
 *     - `AssignmentExpression`
 *     - `AssignmentPattern`
 *     - `AwaitExpression`
 *     - `BinaryExpression`
 *     - `BlockStatement`
 *     - `BreakStatement`
 *     - `CallExpression`
 *     - `CatchClause`
 *     - `ChainExpression`
 *     - `ClassBody`
 *     - `ClassDeclaration`
 *     - `ClassExpression`
 *     - `ConditionalExpression`
 *     - `ContinueStatement`
 *     - `DebuggerStatement`
 *     - `DoWhileStatement`
 *     - `EmptyStatement`
 *     - `ExportAllDeclaration`
 *     - `ExportDefaultDeclaration`
 *     - `ExportNamedDeclaration`
 *     - `ExportSpecifier`
 *     - `ExpressionStatement`
 *     - `ForInStatement`
 *     - `ForOfStatement`
 *     - `ForStatement`
 *     - `FunctionDeclaration`
 *     - `FunctionExpression`
 *     - `Identifier`
 *     - `IfStatement`
 *     - `ImportDeclaration`
 *     - `ImportDefaultSpecifier`
 *     - `ImportExpression`
 *     - `ImportNamespaceSpecifier`
 *     - `ImportSpecifier`
 *     - `LabeledStatement`
 *     - `Literal`
 *     - `LogicalExpression`
 *     - `MemberExpression`
 *     - `MetaProperty`
 *     - `MethodDefinition`
 *     - `NewExpression`
 *     - `ObjectExpression`
 *     - `ObjectPattern`
 *     - `Program`
 *     - `Property`
 *     - `RestElement`
 *     - `ReturnStatement`
 *     - `SequenceExpression`
 *     - `SpreadElement`
 *     - `Super`
 *     - `SwitchCase`
 *     - `SwitchStatement`
 *     - `TaggedTemplateExpression`
 *     - `TemplateElement`
 *     - `TemplateLiteral`
 *     - `ThisExpression`
 *     - `ThrowStatement`
 *     - `TryStatement`
 *     - `UnaryExpression`
 *     - `UpdateExpression`
 *     - `VariableDeclaration`
 *     - `VariableDeclarator`
 *     - `WhileStatement`
 *     - `WithStatement`
 *     - `YieldExpression`
 *   - `value.parent` is required unless `value` is a valid `Program` and must
 *     be a valid `ListenerNode` if provided
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not an `ListenerNode`.
 */
export const isListenerNode = <T extends Listener = Listener>(
	value: unknown,
): value is ListenerNode<T> => {
	return (
		/**
		 * value
		 */
		isObject(value) &&
		(
			isArrayExpression(value) ||
			isArrayPattern(value) ||
			isArrowFunctionExpression(value) ||
			isAssignmentExpression(value) ||
			isAssignmentPattern(value) ||
			isAwaitExpression(value) ||
			isBinaryExpression(value) ||
			isBlockStatement(value) ||
			isBreakStatement(value) ||
			isCallExpression(value) ||
			isCatchClause(value) ||
			isChainExpression(value) ||
			isClassBody(value) ||
			isClassDeclaration(value) ||
			isClassExpression(value) ||
			isConditionalExpression(value) ||
			isContinueStatement(value) ||
			isDebuggerStatement(value) ||
			isDoWhileStatement(value) ||
			isEmptyStatement(value) ||
			isExportAllDeclaration(value) ||
			isExportDefaultDeclaration(value) ||
			isExportNamedDeclaration(value) ||
			isExportSpecifier(value) ||
			isExpressionStatement(value) ||
			isForInStatement(value) ||
			isForOfStatement(value) ||
			isForStatement(value) ||
			isFunctionDeclaration(value) ||
			isFunctionExpression(value) ||
			isIdentifier(value) ||
			isIfStatement(value) ||
			isImportDeclaration(value) ||
			isImportDefaultSpecifier(value) ||
			isImportExpression(value) ||
			isImportNamespaceSpecifier(value) ||
			isImportSpecifier(value) ||
			isLabeledStatement(value) ||
			isLiteral(value) ||
			isLogicalExpression(value) ||
			isMemberExpression(value) ||
			isMetaProperty(value) ||
			isMethodDefinition(value) ||
			isNewExpression(value) ||
			isObjectExpression(value) ||
			isObjectPattern(value) ||
			isProgram(value) ||
			isProperty(value) ||
			isRestElement(value) ||
			isReturnStatement(value) ||
			isSequenceExpression(value) ||
			isSpreadElement(value) ||
			isSuper(value) ||
			isSwitchCase(value) ||
			isSwitchStatement(value) ||
			isTaggedTemplateExpression(value) ||
			isTemplateElement(value) ||
			isTemplateLiteral(value) ||
			isThisExpression(value) ||
			isThrowStatement(value) ||
			isTryStatement(value) ||
			isUnaryExpression(value) ||
			isUpdateExpression(value) ||
			isVariableDeclaration(value) ||
			isVariableDeclarator(value) ||
			isWhileStatement(value) ||
			isWithStatement(value) ||
			isYieldExpression(value)
		) &&
		/**
		 * value.parent
		 */
		(!isProgram(value)
			? (
					'parent' in value &&
					isNode(value.parent)
				)
			: true)
	)
}