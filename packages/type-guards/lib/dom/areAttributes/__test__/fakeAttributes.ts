import { fakeAttr } from '../../isAttr/__test__';

type Includes = Record<string, string>;

const findNamedItem =
	(name: string) =>
	({ localName }: Attr) =>
		localName === name;

const findNamedItemNS =
	(ns: string, name: string) =>
	({ localName, namespaceURI }: Attr) =>
		localName === name && (namespaceURI?.includes(ns) || false);

const retrieveAttr = (name: string, ns?: string) =>
	ns ? findNamedItemNS(ns, name) : findNamedItem(name);

export const fakeAttributes = ({
	ssr = typeof window === 'undefined',
	seed = false,
  includes = {} as Includes,
	...overrideProps
}: Record<string, unknown> = {}) => {
	let attributes: Element['attributes'];

	if (!ssr) {
		const $element = document.createElement('div');

		({ attributes } = $element);

		if (Object.keys(includes as Includes).length) {
      Object.entries(includes as Includes).forEach(
        ([attrName, attrValue]) => attributes.setNamedItem(fakeAttr({ ssr, attrName, attrValue }))
      )
    }
	} else {
		const _attributes = Object.entries(includes as Includes).map(
			([attrName, attrValue]) => fakeAttr({ ssr, attrName, attrValue })
		);

		attributes = {
			getNamedItem: jest.fn(
				(name: string) => _attributes.find(retrieveAttr(name)) ?? null,
			),
			getNamedItemNS: jest.fn(
				(ns: string, name: string) =>
					_attributes.find(retrieveAttr(name, ns)) ?? null,
			),
			item: jest.fn((index: number) => _attributes[index] ?? null),
			removeNamedItem: jest.fn((name: string) => {
				const attr = _attributes.find(retrieveAttr(name));

				if (!attr) {
					throw new Error(`Could not find attribute ${name}`);
				}

        _attributes.splice(_attributes.indexOf(attr), 1)

				return attr;
			}),
			removeNamedItemNS: jest.fn((ns: string, name: string) => {
				const attr = _attributes.find(retrieveAttr(name, ns));

				if (!attr) {
					throw new Error(`Could not find attribute ${name} with namespace '${ns}'`);
				}

        _attributes.splice(_attributes.indexOf(attr), 1)

				return attr;
			}),
      setNamedItem: jest.fn((attr: Attr) => {
        if (attributes.getNamedItem(attr.name) !== null) {
          attributes.removeNamedItem(attr.name);
        }

        _attributes.push(attr);
      }),
      setNamedItemNS: jest.fn((attr: Attr) => {
        if (attributes.getNamedItemNS(attr.namespaceURI, attr.name) !== null) {
          attributes.removeNamedItemNS(attr.namespaceURI, attr.name);
        }

        _attributes.push(attr);
      })
		} as unknown as HTMLElement['attributes'];
	}

	return {
		...overrideProps,
		...attributes,
		__proto__: {} as NamedNodeMap,
	};
};
