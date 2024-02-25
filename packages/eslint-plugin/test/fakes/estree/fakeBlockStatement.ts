import type { BlockStatement } from 'estree';
import { faker } from '@faker-js/faker';

export const fakeBlockStatement = ({ perf = true, ...overrideProps }: Record<string, unknown> = {}) => {
	const blockStatement: Partial<BlockStatement> = {
		type: 'BlockStatement',
	};

	if (!perf) {
		blockStatement.body = [] as BlockStatement['body'];

		faker.helpers.maybe(() => {
			blockStatement.innerComments = [] as BlockStatement['innerComments'];
		});
	}

	return {
		...blockStatement,
		...overrideProps,
	} as BlockStatement;
};
