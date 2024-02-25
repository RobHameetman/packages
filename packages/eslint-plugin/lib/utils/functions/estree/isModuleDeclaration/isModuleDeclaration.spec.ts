import { isModuleDeclaration } from './isModuleDeclaration';
import { fakeMethodDefinition } from '@test/fakes/estree/fakeMethodDefinition';

describe('isModuleDeclaration()', () => {
	it('should return true given a valid MethodDefinition', () => {
		expect(isModuleDeclaration(fakeMethodDefinition())).toBe(true);
	});

	it('should return false given an invalid MethodDefinition', () => {
		expect(isModuleDeclaration(fakeMethodDefinition({ type: null }))).toBe(false);
	});
});
