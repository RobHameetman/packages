import { isBlockStatement } from './isBlockStatement';
import { fakeBlockStatement } from '@test/fakes/estree/fakeBlockStatement';

describe('isBlockStatement()', () => {
	it('should return true given a valid BlockStatement', () => {
		expect(isBlockStatement(fakeBlockStatement())).toBe(true);
	});

	it('should return false given an invalid BlockStatement', () => {
		expect(isBlockStatement(fakeBlockStatement({ type: null }))).toBe(false);
	});
});
