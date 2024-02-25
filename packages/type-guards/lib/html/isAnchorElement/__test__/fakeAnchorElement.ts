import { faker } from '@faker-js/faker';
import { fakeHtmlElement } from '@/html/isHtmlElement/__test__';
import { isServer } from '@/utils/functions/isServer';

export const fakeAnchorElement = ({
	ssr = isServer(),
	newTab = false,
	charset = 'utf-8',
	href = faker.internet.url(),
	target = newTab ? '_blank' : faker.helpers.arrayElement(['_blank', '_self', '_parent', '_top']),
	type = 'text/html',
	...overrideProps
}: Record<string, unknown> = {}) => {
	const anchorElement = fakeHtmlElement({
		ssr,
		charset,
		href,
		tagName: 'A',
		target,
		type,
	});

	Object.entries(overrideProps).forEach(([key, value]) => {
		const prop = Object.getOwnPropertyDescriptor(anchorElement, key) || {
			writable: false,
		};

		Object.defineProperty(anchorElement, key, {
			...prop,
			value,
		});
	});

	return anchorElement as HTMLAnchorElement;
};
