import type { SourceLocation } from 'estree';
import { faker } from '@faker-js/faker';
import { fakePosition } from './fakePosition';

export const fakeSourceLocation = ({ perf = true, ...overrideProps }: Record<string, unknown> = {}) => {
	const sourceLocation: Partial<SourceLocation> = {};

	if (!perf) {
		sourceLocation.start = fakePosition({ perf });
		sourceLocation.end = fakePosition({ perf });

		faker.helpers.maybe(() => {
			sourceLocation.source = faker.system.filePath();
		});
	}

	return {
		...sourceLocation,
		...overrideProps,
	} as SourceLocation;
};
