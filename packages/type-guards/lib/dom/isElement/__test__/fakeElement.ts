import { faker } from '@faker-js/faker';
import { fakeNode } from '@/dom/isNode/__test__';
import { isServer } from '@/utils/functions/isServer';
import { fakeAttributes } from '@/utils/types/Attributes/__test__';

export const fakeElement = ({
	defaultValue = false,
	ssr = isServer(),
	namespaceURI = null,
	scrollTop = 0,
	scrollLeft = 0,
	shadowRoot = null,
	slot = '',
	tagName: _tagName = faker.helpers.arrayElement([
		faker.lorem.word(),
		`${faker.lorem.word()}:${faker.lorem.word()}`,
	]),
	value = defaultValue ? faker.lorem.word() : '',
	...overrideProps
}: Record<string, unknown> = {}) => {
	const nodeName = (_tagName as string).toLowerCase();
	const nomenclature = (nodeName as string).split(':');
	const hasPrefix = nomenclature.length > 1;
	const [nameOrPrefix, localName] = nomenclature;

	const element = fakeNode({
		ssr,
		type: 'ELEMENT_NODE',
		attributes: fakeAttributes({ ssr }),
		clientHeight: faker.number.int({ min: 0, max: 1000 }),
		clientLeft: faker.number.int({ min: 0, max: 1000 }),
		clientTop: faker.number.int({ min: 0, max: 1000 }),
		clientWidth: faker.number.int({ min: 0, max: 1000 }),
		id: faker.lorem.word(),
		localName: hasPrefix ? localName : nameOrPrefix,
		name: nodeName,
		namespaceURI,
		outerHTML: `<${nodeName}></${nodeName}>`,
		ownerDocument: !ssr ? document : null,
		part: [],
		prefix: hasPrefix ? nameOrPrefix : null,
		scrollHeight: faker.number.int({ min: 0, max: 1000 }),
		scrollWidth: faker.number.int({ min: 0, max: 1000 }),
		scrollLeft,
		scrollTop,
		shadowRoot,
		slot,
		tag: nodeName,
		tagName: _tagName,
		attachShadow: jest.fn(),
		checkVisibility: jest.fn(),
		closest: jest.fn(() => null),
		computedStyleMap: jest.fn(),
		getAttribute: jest.fn(() => null),
		getAttributeNS: jest.fn(() => null),
		getAttributeNames: jest.fn(() => []),
	});

	Object.entries(overrideProps).forEach(([key, value]) => {
		const prop = Object.getOwnPropertyDescriptor(element, key) || {
			writable: false,
		};

		Object.defineProperty(element, key, {
			...prop,
			value,
		});
	});

	return element as Element;
};
