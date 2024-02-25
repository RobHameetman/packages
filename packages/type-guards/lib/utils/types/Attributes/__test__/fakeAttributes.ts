import { isServer } from '@/utils/functions/isServer';
import { fakeAttr } from '@/utils/types/Attr/__test__';

const findNamedItem =
	(name: string) =>
	({ localName }: Attr) =>
		localName === name;

const findNamedItemNS =
	(ns: string | null, name: string) =>
	({ localName, namespaceURI }: Attr) =>
		localName === name && (namespaceURI?.includes(ns ?? '') || false);

const retrieveAttr = (name: string, ns?: string | null) =>
	ns ? findNamedItemNS(ns, name) : findNamedItem(name);

class FakeAttributes {
	#attributes: Array<Attr>;

	constructor(attributes: Array<Attr> = []) {
		this.#attributes = attributes;
	}

	getNamedItem = jest.fn((name: string) => {
		return this.#attributes.find(this.#findNamedItem(name)) ?? null;
	});

	getNamedItemNS = jest.fn((ns: string, name: string) => {
		return this.#attributes.find(this.#findNamedItemNS(ns, name)) ?? null;
	});

	item = jest.fn((index: number) => {
		return this.#attributes[index] ?? null;
	});

	removeNamedItem = jest.fn((name: string) => {
		return this.#removeOrThrowError(name);
	});

	removeNamedItemNS = jest.fn((ns: string, name: string) => {
		return this.#removeOrThrowError(name);
	});

	setNamedItem = jest.fn((attr: Attr) => {
		return this.#setOrReplace(attr);
	});

	setNamedItemNS = jest.fn((attr: Attr) => {
		return this.#setOrReplace(attr);
	});

	#findNamedItem =
		(name: string) =>
		({ localName }: Attr) =>
			localName === name;

	#findNamedItemNS =
		(ns: string, name: string) =>
		({ localName, namespaceURI }: Attr) =>
			localName === name && (namespaceURI?.includes(ns) || false);

	#removeOrThrowError(name: string, ns?: string) {
		const attr = this.#attributes.find(
			ns ? this.#findNamedItemNS(ns, name) : this.#findNamedItem(name),
		);

		if (!attr) {
			throw new Error(`Could not find attribute ${name}`);
		}

		this.#attributes = this.#attributes.filter((_attr) => _attr !== attr);

		return attr;
	}

	#setOrReplace(attr: Attr) {
		const { localName: name, namespaceURI: ns } = attr;
		const existingAttr = this.#attributes.find(
			ns ? this.#findNamedItemNS(ns, name) : this.#findNamedItem(name),
		);

		if (!attr) {
			this.#attributes = [...this.#attributes, attr];

			return null;
		}

		this.#attributes = [
			...this.#attributes.filter((_attr) => _attr !== existingAttr),
			attr,
		];

		return attr;
	}
}

export const fakeAttributes = ({
	ssr = isServer(),
	seed = false,
	attrName = 'role',
	attrValue = 'button',
	...overrideProps
}: Record<string, unknown> = {}) => {
	let attributes: object;

	if (!ssr) {
		const $element = document.createElement('div');

		({ attributes } = $element);
	} else {
		const _attributeList: Array<Attr> = [];
		const _attributeMap = {} as Record<string | number, Attr>;

		Object.defineProperty(_attributeMap, 'getNamedItem', {
			writable: false,
			value: jest.fn(
				(name: string) => _attributeList.find(retrieveAttr(name)) ?? null,
			),
		});

		Object.defineProperty(_attributeMap, 'getNamedItemNS', {
			writable: false,
			value: jest.fn(
				(ns: string | null, name: string) =>
					_attributeList.find(retrieveAttr(name, ns)) ?? null,
			),
		});

		Object.defineProperty(_attributeMap, 'item', {
			writable: false,
			value: jest.fn((index: number) => _attributeList[index] ?? null),
		});

		Object.defineProperty(_attributeMap, 'removeNamedItem', {
			writable: false,
			value: jest.fn((name: string) => {
				const attr = _attributeList.find(retrieveAttr(name));

				if (!attr) {
					throw new Error(`Could not find attribute ${name}`);
				}

				const index = _attributeList.indexOf(attr);

				delete _attributeMap[name];
				delete _attributeMap[index];

				_attributeList.splice(index, 1);

				return attr;
			}),
		});

		Object.defineProperty(_attributeMap, 'removeNamedItemNS', {
			writable: false,
			value: jest.fn((ns: string | null, name: string) => {
				const attr = _attributeList.find(retrieveAttr(name, ns));

				if (!attr) {
					throw new Error(`Could not find attribute ${name}`);
				}

				const index = _attributeList.indexOf(attr);

				delete _attributeMap[name];
				delete _attributeMap[index];

				_attributeList.splice(index, 1);

				return attr;
			}),
		});

		Object.defineProperty(_attributeMap, 'setNamedItem', {
			writable: false,
			value: jest.fn((item: Attr) => {
				const attr = _attributeList.find(retrieveAttr(item.name));
				const index = !attr ? _attributeList.push(item) - 1 : _attributeList.indexOf(attr);

				_attributeMap[item.name] = item;
				_attributeMap[index] = item;

				return !attr ? null : attr;
			}),
		});

		Object.defineProperty(_attributeMap, 'setNamedItemNS', {
			writable: false,
			value: jest.fn((item: Attr) => {
				const attr = _attributeList.find(retrieveAttr(item.name));
				const index = !attr ? _attributeList.push(item) - 1 : _attributeList.indexOf(attr);

				_attributeMap[item.name] = item;
				_attributeMap[index] = item;

				return !attr ? null : attr;
			}),
		});

		attributes = _attributeMap;
	}

	Object.entries(overrideProps).forEach(([key, value]) => {
		const prop = Object.getOwnPropertyDescriptor(attributes, key) || {
			writable: false,
		};

		Object.defineProperty(attributes, key, {
			...prop,
			value,
		});
	});

	(attributes as Record<string, (attr: Attr) => Attr | null>).setNamedItem(fakeAttr({ ssr, attrName, attrValue }));

	return attributes;
};
