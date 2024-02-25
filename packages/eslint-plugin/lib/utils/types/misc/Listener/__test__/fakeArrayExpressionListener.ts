import { ArrayExpression } from 'estree';
import { fakeListenerFn } from './fakeListenerGeneric';

export const fakeArrayExpressionListener = () =>
	jest.fn(fakeListenerFn<ArrayExpression>);
