import { isClassBody } from './isClassBody';
import { fakeClassBody } from '@test/fakes/estree/fakeClassBody';

describe('isClassBody()', () => {
	it('should return true given a valid ClassBody', () => {
		expect(isClassBody(fakeClassBody())).toBe(true);
	});

	it('should return false given an invalid ClassBody', () => {
		expect(isClassBody(fakeClassBody({ type: null }))).toBe(false);
	});
});
