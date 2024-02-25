/**
 * ListenerTypes used for custom ESLint rule validation.
 */
export enum ListenerTypes {
	ArrayExpression,
	ArrayPattern,
	ArrowFunctionExpression,
	AssignmentExpression,
	AssignmentPattern,
	AwaitExpression,
	BinaryExpression,
	BlockStatement,
	BreakStatement,
	CallExpression,
	CatchClause,
	ChainExpression,
	ClassBody,
	ClassDeclaration,
	ClassExpression,
	ConditionalExpression,
	ContinueStatement,
	DebuggerStatement,
	DoWhileStatement,
	EmptyStatement,
	ExportAllDeclaration,
	ExportDefaultDeclaration,
	ExportNamedDeclaration,
	ExportSpecifier,
	ExpressionStatement,
	ForInStatement,
	ForOfStatement,
	ForStatement,
	FunctionDeclaration,
	FunctionExpression,
	Identifier,
	IfStatement,
	ImportDeclaration,
	ImportDefaultSpecifier,
	ImportExpression,
	ImportNamespaceSpecifier,
	ImportSpecifier,
	LabeledStatement,
	Literal,
	LogicalExpression,
	MemberExpression,
	MetaProperty,
	MethodDefinition,
	NewExpression,
	ObjectExpression,
	ObjectPattern,
	Program,
	Property,
	RestElement,
	ReturnStatement,
	SequenceExpression,
	SpreadElement,
	Super,
	SwitchCase,
	SwitchStatement,
	TaggedTemplateExpression,
	TemplateElement,
	TemplateLiteral,
	ThisExpression,
	ThrowStatement,
	TryStatement,
	UnaryExpression,
	UpdateExpression,
	VariableDeclaration,
	VariableDeclarator,
	WhileStatement,
	WithStatement,
	YieldExpression,
}

/**
 * Union type of enum keys (i.e. `"ArrayExpression" | "ArrayPattern" | ...`).
 * Represents any one of the listener types defined in the above enum values.
 */
export type ListenerType = keyof typeof ListenerTypes;

/**
 * An array of all possible `ListenerType`s.
 */
export const LISTENER_TYPES = Object.freeze(
	Object.keys(ListenerTypes)
		.filter((key) => isNaN(Number(key)))
);

/**
 * Checks that an `unknown` value is a `ListenerType`.
 *
 * Requirements:
 *   - `value` must be included as a value of `ListenerTypes`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a `ListenerType`.
 */
export const isListenerType = (value: unknown): value is ListenerType => {
	return (
		/**
		 * value
		 */
		typeof value === 'string' &&
		LISTENER_TYPES.map(String).includes(value)
	);
}
