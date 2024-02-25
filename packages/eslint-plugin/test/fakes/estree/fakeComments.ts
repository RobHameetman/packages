import type { Comment } from 'estree';
import { faker } from '@faker-js/faker';
import { fakeComment } from './fakeComment';

export const fakeComments = ({ perf = true, ...overrideProps }: Record<string, unknown> = {}) =>
	Array.from(
		{ length: faker.number.int({ min: 0, max: 10 }) },
		() => fakeComment({ perf, ...overrideProps })
	) as Array<Comment>;
