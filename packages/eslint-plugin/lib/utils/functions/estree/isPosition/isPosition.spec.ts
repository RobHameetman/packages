import { isPosition } from './isPosition';
import { fakePosition } from '@test/fakes/estree/fakePosition';

describe('isPosition()', () => {
	it('should return true given a valid Position', () => {
		expect(isPosition(fakePosition({ perf: false }))).toBe(true);
	});

	it('should return false given an invalid Position', () => {
		expect(isPosition(fakePosition({ line: 0 }))).toBe(false);
	});
});
