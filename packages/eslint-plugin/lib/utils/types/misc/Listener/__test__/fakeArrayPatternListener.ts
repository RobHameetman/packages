import { ArrayPattern } from 'estree';
import { fakeListenerFn } from './fakeListenerGeneric';

export const fakeArrayPatternListener = () =>
	jest.fn(fakeListenerFn<ArrayPattern>);
