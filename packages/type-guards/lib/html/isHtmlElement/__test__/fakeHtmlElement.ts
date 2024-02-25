import { fakeElement } from '@/dom/isElement/__test__';
import { isServer } from '@/utils/functions/isServer';
import { DomNodeNamespaces } from '@/utils/enums/DomNodeNamespaces';

export const fakeHtmlElement = ({
	ssr = isServer(),
	tagName = 'DIV',
	title = '',
	...overrideProps
}: Record<string, unknown> = {}) => {
	const htmlElement = fakeElement({
		namespaceURI: DomNodeNamespaces.HTML,
		ssr,
		tagName,
		title,
	});

	Object.entries(overrideProps).forEach(([key, value]) => {
		const prop = Object.getOwnPropertyDescriptor(htmlElement, key) || {
			writable: false,
		};

		Object.defineProperty(htmlElement, key, {
			...prop,
			value,
		});
	});

	return htmlElement as HTMLElement;
};
