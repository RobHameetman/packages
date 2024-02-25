import { Rule } from 'eslint';

export const fakeListenerFn = <T>(_node: T & Rule.NodeParentExtension) => {};
