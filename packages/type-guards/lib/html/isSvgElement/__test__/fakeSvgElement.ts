import { fakeElement } from '@/dom/isElement/__test__';
import { DomNodeNamespaces } from '@/utils/enums/DomNodeNamespaces';
import { isServer } from '@/utils/functions/isServer';

export const fakeSvgElement = ({
	ssr = isServer(),
	name = 'svg',
	...overrideProps
}: Record<string, unknown> = {}) => {
	const svgElement = fakeElement({
		name,
		namespaceURI: DomNodeNamespaces.SVG,
		ssr,
		svg: true,
	});

	Object.entries(overrideProps).forEach(([key, value]) => {
		const prop = Object.getOwnPropertyDescriptor(svgElement, key) || {
			writable: false,
		};

		Object.defineProperty(svgElement, key, {
			...prop,
			value,
		});
	});

	return svgElement as SVGElement;
};
