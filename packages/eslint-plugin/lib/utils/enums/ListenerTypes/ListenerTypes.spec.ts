import { isListenerType } from './ListenerTypes';

describe('isListenerType()', () => {
	describe("given the string value 'ArrayExpression'", () => {
		it('should return true', () => {
			expect(isListenerType('ArrayExpression')).toBe(true);
		});
	});

	describe("given the string value 'ArrayPattern'", () => {
		it('should return true', () => {
			expect(isListenerType('ArrayPattern')).toBe(true);
		});
	});

	describe("given the string value 'ArrowFunctionExpression'", () => {
		it('should return true', () => {
			expect(isListenerType('ArrowFunctionExpression')).toBe(true);
		});
	});

	describe("given the string value 'AssignmentExpression'", () => {
		it('should return true', () => {
			expect(isListenerType('AssignmentExpression')).toBe(true);
		});
	});

	describe("given the string value 'AssignmentPattern'", () => {
		it('should return true', () => {
			expect(isListenerType('AssignmentPattern')).toBe(true);
		});
	});

	describe("given the string value 'AwaitExpression'", () => {
		it('should return true', () => {
			expect(isListenerType('AwaitExpression')).toBe(true);
		});
	});

	describe("given the string value 'BinaryExpression'", () => {
		it('should return true', () => {
			expect(isListenerType('BinaryExpression')).toBe(true);
		});
	});

	describe("given the string value 'BlockStatement'", () => {
		it('should return true', () => {
			expect(isListenerType('BlockStatement')).toBe(true);
		});
	});

	describe("given the string value 'BreakStatement'", () => {
		it('should return true', () => {
			expect(isListenerType('BreakStatement')).toBe(true);
		});
	});

	describe("given the string value 'CallExpression'", () => {
		it('should return true', () => {
			expect(isListenerType('CallExpression')).toBe(true);
		});
	});

	describe("given the string value 'CatchClause'", () => {
		it('should return true', () => {
			expect(isListenerType('CatchClause')).toBe(true);
		});
	});

	describe("given the string value 'ChainExpression'", () => {
		it('should return true', () => {
			expect(isListenerType('ChainExpression')).toBe(true);
		});
	});

	describe("given the string value 'ClassBody'", () => {
		it('should return true', () => {
			expect(isListenerType('ClassBody')).toBe(true);
		});
	});

	describe("given the string value 'ClassDeclaration'", () => {
		it('should return true', () => {
			expect(isListenerType('ClassDeclaration')).toBe(true);
		});
	});

	describe("given the string value 'ClassExpression'", () => {
		it('should return true', () => {
			expect(isListenerType('ClassExpression')).toBe(true);
		});
	});

	describe("given the string value 'ConditionalExpression'", () => {
		it('should return true', () => {
			expect(isListenerType('ConditionalExpression')).toBe(true);
		});
	});

	describe("given the string value 'ContinueStatement'", () => {
		it('should return true', () => {
			expect(isListenerType('ContinueStatement')).toBe(true);
		});
	});

	describe("given the string value 'DebuggerStatement'", () => {
		it('should return true', () => {
			expect(isListenerType('DebuggerStatement')).toBe(true);
		});
	});

	describe("given the string value 'DoWhileStatement'", () => {
		it('should return true', () => {
			expect(isListenerType('DoWhileStatement')).toBe(true);
		});
	});

	describe("given the string value 'EmptyStatement'", () => {
		it('should return true', () => {
			expect(isListenerType('EmptyStatement')).toBe(true);
		});
	});

	describe("given the string value 'ExportAllDeclaration'", () => {
		it('should return true', () => {
			expect(isListenerType('ExportAllDeclaration')).toBe(true);
		});
	});

	describe("given the string value 'ExportDefaultDeclaration'", () => {
		it('should return true', () => {
			expect(isListenerType('ExportDefaultDeclaration')).toBe(true);
		});
	});

	describe("given the string value 'ExportNamedDeclaration'", () => {
		it('should return true', () => {
			expect(isListenerType('ExportNamedDeclaration')).toBe(true);
		});
	});

	describe("given the string value 'ExportSpecifier'", () => {
		it('should return true', () => {
			expect(isListenerType('ExportSpecifier')).toBe(true);
		});
	});

	describe("given the string value 'ExpressionStatement'", () => {
		it('should return true', () => {
			expect(isListenerType('ExpressionStatement')).toBe(true);
		});
	});

	describe("given the string value 'ForInStatement'", () => {
		it('should return true', () => {
			expect(isListenerType('ForInStatement')).toBe(true);
		});
	});

	describe("given the string value 'ForOfStatement'", () => {
		it('should return true', () => {
			expect(isListenerType('ForOfStatement')).toBe(true);
		});
	});

	describe("given the string value 'ForStatement'", () => {
		it('should return true', () => {
			expect(isListenerType('ForStatement')).toBe(true);
		});
	});

	describe("given the string value 'FunctionDeclaration'", () => {
		it('should return true', () => {
			expect(isListenerType('FunctionDeclaration')).toBe(true);
		});
	});

	describe("given the string value 'FunctionExpression'", () => {
		it('should return true', () => {
			expect(isListenerType('FunctionExpression')).toBe(true);
		});
	});

	describe("given the string value 'Identifier'", () => {
		it('should return true', () => {
			expect(isListenerType('Identifier')).toBe(true);
		});
	});

	describe("given the string value 'IfStatement'", () => {
		it('should return true', () => {
			expect(isListenerType('IfStatement')).toBe(true);
		});
	});

	describe("given the string value 'ImportDeclaration'", () => {
		it('should return true', () => {
			expect(isListenerType('ImportDeclaration')).toBe(true);
		});
	});

	describe("given the string value 'ImportDefaultSpecifier'", () => {
		it('should return true', () => {
			expect(isListenerType('ImportDefaultSpecifier')).toBe(true);
		});
	});

	describe("given the string value 'ImportExpression'", () => {
		it('should return true', () => {
			expect(isListenerType('ImportExpression')).toBe(true);
		});
	});

	describe("given the string value 'ImportNamespaceSpecifier'", () => {
		it('should return true', () => {
			expect(isListenerType('ImportNamespaceSpecifier')).toBe(true);
		});
	});

	describe("given the string value 'ImportSpecifier'", () => {
		it('should return true', () => {
			expect(isListenerType('ImportSpecifier')).toBe(true);
		});
	});

	describe("given the string value 'LabeledStatement'", () => {
		it('should return true', () => {
			expect(isListenerType('LabeledStatement')).toBe(true);
		});
	});

	describe("given the string value 'Literal'", () => {
		it('should return true', () => {
			expect(isListenerType('Literal')).toBe(true);
		});
	});

	describe("given the string value 'LogicalExpression'", () => {
		it('should return true', () => {
			expect(isListenerType('LogicalExpression')).toBe(true);
		});
	});

	describe("given the string value 'MemberExpression'", () => {
		it('should return true', () => {
			expect(isListenerType('MemberExpression')).toBe(true);
		});
	});

	describe("given the string value 'MetaProperty'", () => {
		it('should return true', () => {
			expect(isListenerType('MetaProperty')).toBe(true);
		});
	});

	describe("given the string value 'MethodDefinition'", () => {
		it('should return true', () => {
			expect(isListenerType('MethodDefinition')).toBe(true);
		});
	});

	describe("given the string value 'NewExpression'", () => {
		it('should return true', () => {
			expect(isListenerType('NewExpression')).toBe(true);
		});
	});

	describe("given the string value 'ObjectExpression'", () => {
		it('should return true', () => {
			expect(isListenerType('ObjectExpression')).toBe(true);
		});
	});

	describe("given the string value 'ObjectPattern'", () => {
		it('should return true', () => {
			expect(isListenerType('ObjectPattern')).toBe(true);
		});
	});

	describe("given the string value 'Program'", () => {
		it('should return true', () => {
			expect(isListenerType('Program')).toBe(true);
		});
	});

	describe("given the string value 'Property'", () => {
		it('should return true', () => {
			expect(isListenerType('Property')).toBe(true);
		});
	});

	describe("given the string value 'RestElement'", () => {
		it('should return true', () => {
			expect(isListenerType('RestElement')).toBe(true);
		});
	});

	describe("given the string value 'ReturnStatement'", () => {
		it('should return true', () => {
			expect(isListenerType('ReturnStatement')).toBe(true);
		});
	});

	describe("given the string value 'SequenceExpression'", () => {
		it('should return true', () => {
			expect(isListenerType('SequenceExpression')).toBe(true);
		});
	});

	describe("given the string value 'SpreadElement'", () => {
		it('should return true', () => {
			expect(isListenerType('SpreadElement')).toBe(true);
		});
	});

	describe("given the string value 'Super'", () => {
		it('should return true', () => {
			expect(isListenerType('Super')).toBe(true);
		});
	});

	describe("given the string value 'SwitchCase'", () => {
		it('should return true', () => {
			expect(isListenerType('SwitchCase')).toBe(true);
		});
	});

	describe("given the string value 'SwitchStatement'", () => {
		it('should return true', () => {
			expect(isListenerType('SwitchStatement')).toBe(true);
		});
	});

	describe("given the string value 'TaggedTemplateExpression'", () => {
		it('should return true', () => {
			expect(isListenerType('TaggedTemplateExpression')).toBe(true);
		});
	});

	describe("given the string value 'TemplateElement'", () => {
		it('should return true', () => {
			expect(isListenerType('TemplateElement')).toBe(true);
		});
	});

	describe("given the string value 'TemplateLiteral'", () => {
		it('should return true', () => {
			expect(isListenerType('TemplateLiteral')).toBe(true);
		});
	});

	describe("given the string value 'ThisExpression'", () => {
		it('should return true', () => {
			expect(isListenerType('ThisExpression')).toBe(true);
		});
	});

	describe("given the string value 'ThrowStatement'", () => {
		it('should return true', () => {
			expect(isListenerType('ThrowStatement')).toBe(true);
		});
	});

	describe("given the string value 'TryStatement'", () => {
		it('should return true', () => {
			expect(isListenerType('TryStatement')).toBe(true);
		});
	});

	describe("given the string value 'UnaryExpression'", () => {
		it('should return true', () => {
			expect(isListenerType('UnaryExpression')).toBe(true);
		});
	});

	describe("given the string value 'UpdateExpression'", () => {
		it('should return true', () => {
			expect(isListenerType('UpdateExpression')).toBe(true);
		});
	});

	describe("given the string value 'VariableDeclaration'", () => {
		it('should return true', () => {
			expect(isListenerType('VariableDeclaration')).toBe(true);
		});
	});

	describe("given the string value 'VariableDeclarator'", () => {
		it('should return true', () => {
			expect(isListenerType('VariableDeclarator')).toBe(true);
		});
	});

	describe("given the string value 'WhileStatement'", () => {
		it('should return true', () => {
			expect(isListenerType('WhileStatement')).toBe(true);
		});
	});

	describe("given the string value 'WithStatement'", () => {
		it('should return true', () => {
			expect(isListenerType('WithStatement')).toBe(true);
		});
	});

	describe("given the string value 'YieldExpression'", () => {
		it('should return true', () => {
			expect(isListenerType('YieldExpression')).toBe(true);
		});
	});

	describe('given an empty string', () => {
		it('should return false', () => {
			expect(isListenerType('')).toBe(false);
		});
	});
});