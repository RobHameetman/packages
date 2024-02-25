import type { BaseNode } from 'estree';
import { faker } from '@faker-js/faker';
import { fakeComments } from './fakeComments';
import { fakeBaseNodeWithoutComments } from './fakeBaseNodeWithoutComments';

export const fakeBaseNode = ({ perf = true, ...overrideProps }: Record<string, unknown> = {}) => {
	const baseNode: Partial<BaseNode> = fakeBaseNodeWithoutComments({ perf });

	if (!perf) {
		faker.helpers.maybe(() => {
			baseNode.leadingComments = fakeComments({ perf });
		});

		faker.helpers.maybe(() => {
			baseNode.trailingComments = fakeComments({ perf });
		});
	}

	return {
		...baseNode,
		...overrideProps,
	} as BaseNode;
};
