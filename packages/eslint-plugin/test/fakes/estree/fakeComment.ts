import type { Comment } from 'estree';
import { faker } from '@faker-js/faker';

export const fakeComment = ({ perf = true, ...overrideProps }: Record<string, unknown> = {}) => {
	const comment: Partial<Comment> = {
		type: faker.helpers.arrayElement(['Line', 'Block']),
	};

	if (!perf) {
		faker.helpers.maybe(() => {
			comment.value = faker.lorem.sentence();
		});
	}

	return {
		...comment,
		...overrideProps,
	} as Comment;
};
