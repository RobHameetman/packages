import { faker } from '@faker-js/faker';
import { randomCategory } from '../../../../enums/Categories/__test__';
import { randomFixability } from '../../../../enums/Fixabilities/__test__';

export const fakeInfoMethodInput = ({ ...overrideProps } = {}) => {
	const infoMethodInput: Record<string, unknown> = {
		category: randomCategory(),
		description: faker.lorem.sentence(),
		name: `no-${faker.random.word().toLowerCase()}-${faker.random.word().toLowerCase()}`,
	};

	faker.helpers.maybe(() => {
		infoMethodInput.deprecated = true;
	});

	faker.helpers.maybe(() => {
		infoMethodInput.fixable = randomFixability();
	});

	faker.helpers.maybe(() => {
		infoMethodInput.hasSuggestions = true;
	});

	faker.helpers.maybe(() => {
		infoMethodInput.recommended = true;
	});

	return {
		...infoMethodInput,
		...overrideProps,
	}
};
