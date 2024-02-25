import { isListenerNode } from './ListenerNode';
import { fakeListenerNode } from './__test__';

describe('isListenerNode()', () => {
	it('should return true given a valid ListenerNode', () => {
		expect(isListenerNode(fakeListenerNode())).toBe(true);
	});

	it('should return false given an invalid ListenerNode', () => {
		expect(isListenerNode(fakeListenerNode({ type: 'test', parent: null }))).toBe(false);
	});
});