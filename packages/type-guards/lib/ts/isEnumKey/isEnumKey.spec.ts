import { isEnumKey } from './isEnumKey';

enum TestNumericEnum {
	propWithoutNumber,
	prop1,
	prop2,
	prop3,
}

enum TestStringEnum {
	propWithoutNumber = 'test',
	prop1 = '3i04c3c',
	prop2 = 'c3nrcu43fim',
	prop3 = 'prop4',
}

describe('isEnumKey()', () => {
	it('should filter keys when a numeric enum is passed to Object.keys()', () => {
		expect(Object.keys(TestNumericEnum).filter(isEnumKey)).toBeInstanceOf(Array);
		expect(Object.keys(TestNumericEnum).filter(isEnumKey)).toHaveLength(4);
	});

	it('should filter keys when a string enum is passed to Object.keys()', () => {
		expect(Object.keys(TestStringEnum).filter(isEnumKey)).toBeInstanceOf(Array);
		expect(Object.keys(TestStringEnum).filter(isEnumKey)).toHaveLength(4);
	});
});
