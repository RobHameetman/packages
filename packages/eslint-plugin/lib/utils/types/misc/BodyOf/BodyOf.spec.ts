import { isBodyOf } from './BodyOf';
import { fakeBody } from '../Body/__test__';

describe('isBodyOf()', () => {
	let body: unknown = null;

	beforeEach(() => {
		body = fakeBody();
	});

	afterEach(() => {
		body = null;
	});

	it('should return true given a valid BodyOf', () => {
		expect(isBodyOf(body, { body })).toBe(true);
	});

	it('should return false given an invalid BodyOf', () => {
		expect(isBodyOf(body, { subject: body, bodyKey: 'subject' })).toBe(false);
		expect(isBodyOf(body, body)).toBe(false);
	});
});
