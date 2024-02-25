import { ArrowFunctionExpression } from 'estree';
import { fakeListenerFn } from './fakeListenerGeneric';

export const fakeArrowFunctionExpressionListener = () =>
	jest.fn(fakeListenerFn<ArrowFunctionExpression>);
