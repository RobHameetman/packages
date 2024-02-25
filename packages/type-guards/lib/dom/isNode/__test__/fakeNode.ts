import { faker } from '@faker-js/faker';
import { fakeNodeList } from '@/dom/isNodeList/__test__';
import { fakeEventTarget } from '@/dom/isEventTarget/__test__';
import { DomNodeType, DomNodeTypes } from '@/utils/enums/DomNodeTypes';
import { randomDomNodeType } from '@/utils/enums/DomNodeTypes/__test__';
import { isServer } from '@/utils/functions/isServer';

const xml = () =>
	new DOMParser().parseFromString('<xml></xml>', 'application/xml');

export const fakeNode = ({
	ssr = isServer(),
	baseURI = ssr ? faker.internet.url() : window.location.href,
	childNodes = [],
	data = undefined,
	firstChild = null,
	isConnected = faker.datatype.boolean(),
	lastChild = null,
	name = 'role',
	nextSibling = null,
	namespaceURI = null as string | null,
	options = undefined,
	parentElement = null,
	parentNode = null,
	previousSibling = null,
	tag = 'div',
	textContent = null,
	type = randomDomNodeType(),
	value = 'button',
	...overrideProps
}: Record<string, unknown> = {}) => {
	let node = {} as object;

	if (!ssr) {
		const factories = {
			ELEMENT_NODE: () =>
				namespaceURI
					? document.createElementNS(
							namespaceURI as string,
							(tag as string).toLowerCase(),
							options as ElementCreationOptions,
						)
					: document.createElement(
							(tag as string).toLowerCase(),
							options as ElementCreationOptions,
						),
			ATTRIBUTE_NODE: () =>
				namespaceURI
					? document.createAttributeNS(namespaceURI as string, name as string)
					: document.createAttribute(name as string),
			TEXT_NODE: () =>
				document.createTextNode((data as string) || faker.lorem.words()),
			CDATA_SECTION_NODE: () =>
				xml().createCDATASection(
					data ? (data as string).replace(']]', '') : '< > &',
				),
			PROCESSING_INSTRUCTION_NODE: () =>
				document.createComment((data as string) || 'target'),
			COMMENT_NODE: () =>
				document.createComment((data as string) || faker.lorem.words()),
			DOCUMENT_NODE: () => document,
			DOCUMENT_TYPE_NODE: () => document.doctype,
			DOCUMENT_FRAGMENT_NODE: () => document.createDocumentFragment(),
		};

		node = factories[type as keyof typeof factories]() as object;

		(childNodes as ReadonlyArray<Node>).forEach((childNode) =>
			(node as Node).appendChild(childNode),
		);
	} else {
		node = fakeEventTarget({
			ssr,
			baseURI,
			childNodes: fakeNodeList({ ssr, nodes: childNodes }),
			firstChild,
			isConnected,
			lastChild,
			nextSibling,
			namespaceURI,
			nodeName: name,
			nodeType: DomNodeTypes[type as DomNodeType],
			ownerDocument: type === 'DOCUMENT_NODE' || ssr ? null : document,
			parentElement,
			parentNode,
			previousSibling,
			ELEMENT_NODE: DomNodeTypes.ELEMENT_NODE,
			ATTRIBUTE_NODE: DomNodeTypes.ATTRIBUTE_NODE,
			TEXT_NODE: DomNodeTypes.TEXT_NODE,
			CDATA_SECTION_NODE: DomNodeTypes.CDATA_SECTION_NODE,
			ENTITY_REFERENCE_NODE: DomNodeTypes.ENTITY_REFERENCE_NODE,
			ENTITY_NODE: DomNodeTypes.ENTITY_NODE,
			COMMENT_NODE: DomNodeTypes.COMMENT_NODE,
			DOCUMENT_NODE: DomNodeTypes.DOCUMENT_NODE,
			DOCUMENT_TYPE_NODE: DomNodeTypes.DOCUMENT_TYPE_NODE,
			DOCUMENT_FRAGMENT_NODE: DomNodeTypes.DOCUMENT_FRAGMENT_NODE,
			NOTATION_NODE: DomNodeTypes.NOTATION_NODE,
			DOCUMENT_POSITION_DISCONNECTED: 0x01,
			DOCUMENT_POSITION_PRECEDING: 0x02,
			DOCUMENT_POSITION_FOLLOWING: 0x04,
			DOCUMENT_POSITION_CONTAINS: 0x08,
			DOCUMENT_POSITION_CONTAINED_BY: 0x10,
			DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: 0x20,
		});

		/**
		 * These properties are not provided to `fakeEventTarget()` because they
		 * are not `readonly`.
		 */
		Object.defineProperty(node, 'nodeValue', {
			writable: true,
			value,
		});

		Object.defineProperty(node, 'textContent', {
			writable: true,
			value: textContent,
		});
	}

	const mock = (prop: string) => {
		Object.defineProperty(node, prop, {
			writable: false,
			value: prop in overrideProps
				? overrideProps[prop]
				: !ssr
					? /* @ts-expect-error - A spread argument must either have a tuple type or be passed to a rest parameter. */
						jest.fn((...args) => Node.prototype[prop](...args))
					: jest.fn(),
		});

		if (prop in overrideProps) {
			delete overrideProps[prop];
		}
	}

	mock('appendChild');
	mock('cloneNode');
	mock('compareDocumentPosition');
	mock('contains');
	mock('getRootNode');
	mock('hasChildNodes');
	mock('insertBefore');
	mock('isDefaultNamespace');
	mock('isEqualNode');
	mock('isSameNode');
	mock('lookupNamespaceURI');
	mock('lookupPrefix');
	mock('normalize');
	mock('removeChild');
	mock('replaceChild');

	Object.entries(overrideProps).forEach(([key, value]) => {
		const prop = Object.getOwnPropertyDescriptor(node, key) || {
			writable: false,
		};

		Object.defineProperty(node, key, {
			...prop,
			value,
		});
	});

	return node as Node;
};
