import { faker } from '@faker-js/faker';
import { fakeEventTarget } from '@/dom/isEventTarget/__test__';
import { DomNodeTypes } from '@/utils/enums/DomNodeTypes';
import { fakeDomNodeNamespace } from '@/utils/enums/DomNodeNamespaces/__test__';
import { isServer } from '@/utils/functions/isServer';

const NAME_PROPS = Object.freeze(['localName', 'name', 'nodeName']);
const VALUE_PROPS = Object.freeze(['nodeValue', 'textContent', 'value']);

const OTHER_PROPS = Object.freeze([
	'firstChild',
	'lastChild',
	'nextSibling',
	'ownerElement',
	'parentElement',
	'parentNode',
	'prefix',
	'previousSibling',
]);

export const fakeAttr = ({
	defaultValue = false,
	ssr = isServer(),
	svg = false,
	name = faker.lorem.word(),
	namespaceURI = svg ? fakeDomNodeNamespace('SVG') : null,
	value = defaultValue ? faker.lorem.word() : '',
	...overrideProps
}: Record<string, unknown> = {}) => {
	let attr: Partial<Attr>;

	if (ssr) {
		attr = fakeEventTarget({ ssr }) as Partial<Attr>;

		Object.defineProperty(attr, 'nodeType', {
			writable: false,
			value: 'nodeType' in overrideProps
				? overrideProps.nodeType
				: DomNodeTypes.ATTRIBUTE_NODE,
		});

		Object.defineProperty(attr, 'specified', {
			writable: false,
			value: 'specified' in overrideProps
				? overrideProps.specified
				: true,
		});

		Object.defineProperty(attr, 'isConnected', {
			writable: false,
			value: 'isConnected' in overrideProps
				? overrideProps.isConnected
				: false,
		});

		Object.defineProperty(attr, 'childNodes', {
			writable: false,
			value: 'childNodes' in overrideProps
				? overrideProps.childNodes
				: [],
		});

		Object.defineProperty(attr, 'namespaceURI', {
			writable: false,
			value: namespaceURI,
		});

		OTHER_PROPS.forEach((prop) => {
			Object.defineProperty(attr, prop, {
				writable: false,
				value: prop in overrideProps
					? overrideProps[prop]
					: null,
			});
		});

		NAME_PROPS.forEach((prop) => {
			Object.defineProperty(attr, prop, {
				writable: false,
				value: prop in overrideProps
					? overrideProps[prop]
					: name,
			});
		});

		if (value) {
			VALUE_PROPS.forEach((prop) => {
				Object.defineProperty(attr, prop, {
					writable: true,
					value,
					set: (newValue: string) => {
						attr.nodeValue = newValue;
						attr.textContent = newValue;
						attr.value = newValue;
					},
				});
			});
		}
	} else {
		attr = document.createAttributeNS(namespaceURI as string, name as string);

		if (value) {
			attr.value = value as string;
		}
	}

	if (ssr && 'nodeType' in overrideProps) {
		delete overrideProps.nodeType;
	}

	if (ssr && 'specified' in overrideProps) {
		delete overrideProps.specified;
	}

	if (ssr && 'isConnected' in overrideProps) {
		delete overrideProps.isConnected;
	}

	if (ssr && 'childNodes' in overrideProps) {
		delete overrideProps.childNodes;
	}

	Object.entries(overrideProps).forEach(([key, value]) => {
		const prop = Object.getOwnPropertyDescriptor(attr, key) || {
			writable: false,
		};

		Object.defineProperty(attr, key, {
			...prop,
			value,
		});
	});

	return attr as Attr;
};
