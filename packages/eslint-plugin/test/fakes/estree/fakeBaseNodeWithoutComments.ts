import type { BaseNodeWithoutComments } from 'estree';
import { faker } from '@faker-js/faker';
import { fakeSourceLocation } from './fakeSourceLocation';

export const fakeBaseNodeWithoutComments = ({ perf = true, ...overrideProps }: Record<string, unknown> = {}) => {
	const baseNodeWithoutComments: Partial<BaseNodeWithoutComments> = {
		type: faker.lorem.word(),
	};

	if (!perf) {
		faker.helpers.maybe(() => {
			baseNodeWithoutComments.loc = faker.helpers.arrayElement([
				fakeSourceLocation({ perf }),
				null,
			]);
		});

		faker.helpers.maybe(() => {
			baseNodeWithoutComments.range = [
				faker.number.int({ min: 0, max: 100 }),
				faker.number.int({ min: 0, max: 100 }),
			];
		});
	}

	return {
		...baseNodeWithoutComments,
		...overrideProps,
	} as BaseNodeWithoutComments;
};
