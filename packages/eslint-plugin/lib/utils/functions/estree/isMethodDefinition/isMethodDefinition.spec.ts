import { isMethodDefinition } from './isMethodDefinition';
import { fakeMethodDefinition } from '@test/fakes/estree/fakeMethodDefinition';

describe('isMethodDefinition()', () => {
	it('should return true given a valid MethodDefinition', () => {
		expect(isMethodDefinition(fakeMethodDefinition())).toBe(true);
	});

	it('should return false given an invalid MethodDefinition', () => {
		expect(isMethodDefinition(fakeMethodDefinition({ type: null }))).toBe(false);
	});
});
