import type { Position } from 'estree';
import { faker } from '@faker-js/faker';

export const fakePosition = ({ perf = true, ...overrideProps }: Record<string, unknown> = {}) => {
	const position: Partial<Position> = {};

	if (!perf) {
		position.line = faker.number.int({ min: 1, max: 10000 });
		position.column = faker.number.int({ min: 0, max: 200 });
	}

	return {
		...position,
		...overrideProps,
	} as Position;
};
