import { isSourceLocation } from './isSourceLocation';
import { fakeSourceLocation } from '@test/fakes/estree/fakeSourceLocation';

describe('isSourceLocation()', () => {
	it('should return true given a valid SourceLocation', () => {
		expect(isSourceLocation(fakeSourceLocation({ perf: false }))).toBe(true);
	});

	it('should return false given an invalid SourceLocation', () => {
		expect(isSourceLocation(fakeSourceLocation({ end: null }))).toBe(false);
	});
});
