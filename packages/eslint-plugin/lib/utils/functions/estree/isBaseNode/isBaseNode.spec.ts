import { isBaseNodeWithoutComments } from './isBaseNodeWithoutComments';
import { fakeBaseNodeWithoutComments } from '@test/fakes/estree/fakeBaseNodeWithoutComments';

describe('isBaseNodeWithoutComments()', () => {
	it('should return true given a valid BaseNodeWithoutComments', () => {
		expect(isBaseNodeWithoutComments(fakeBaseNodeWithoutComments())).toBe(true);
	});

	it('should return false given an invalid BaseNodeWithoutComments', () => {
		expect(isBaseNodeWithoutComments(fakeBaseNodeWithoutComments({ type: null }))).toBe(false);
	});
});
