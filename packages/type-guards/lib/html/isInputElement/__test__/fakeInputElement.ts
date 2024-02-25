import { faker } from '@faker-js/faker';
import { fakeHtmlElement } from '@/html/isHtmlElement/__test__';
import { randomInputType } from '@/utils/enums/InputTypes/__test__';
import { isServer } from '@/utils/functions/isServer';
import { randomAutocapitalizeAttrValue } from '@/utils/enums/AutocapitalizeAttrValues/__test__';
import { randomeAutocompleteAttrValue } from '@/utils/enums/AutocompleteAttrValues/__test__';
import { randomFormmethodAttrValue } from '@/utils/enums/FormmethodAttrValues/__test__';
import { randomFormtargetAttrValue } from '@/utils/enums/FormtargetAttrValues/__test__';
import { randomInputmodeAttrValue } from '@/utils/enums/InputmodeAttrValues/__test__';
import { randomeFormenctypeAttrValue } from '@/utils/enums/FormenctypeAttrValues/__test__';

const BROWSERS = ['chrome', 'firefox', 'safari', 'edge', 'opera'];

const VALID_DIRNAME_TYPES = [
	'hidden',
	'text',
	'search',
	'url',
	'tel',
	'email'
];

const VALID_LIST_TYPES = [
	...(VALID_DIRNAME_TYPES.filter(isVisible)),
	'date',
	'month',
	'week',
	'time',
	'datetime-local',
	'number',
	'range',
	'color'
];

function isSubmit(type: unknown) { return type === 'submit'; };
function isHidden(type: unknown) { return type === 'hidden'; };
function isVisible(type: unknown) { return !isHidden(type); };
function isEmailOrFile(type: unknown) { return type === 'email' || type === 'file'; };

const isChrome = (browser: unknown) => browser === 'chrome';
const isFirefox = (browser: unknown) =>  browser === 'firefox';
const isSafari = (browser: unknown) =>  browser === 'safari';
const isWebkit = (browser: unknown) => ['chrome', 'safari', 'opera'].includes(browser as string);

const isValidDirnameType = (type: unknown) => VALID_DIRNAME_TYPES.includes(type as string)
const isValidListType = (type: unknown) => VALID_LIST_TYPES.includes(type as string)
const isValidMaxType = (type: unknown) => VALID_LIST_TYPES.includes(type as string)

export const fakeInputElement = ({
	ssr = isServer(),
	browser = faker.helpers.arrayElement(BROWSERS),
	type = randomInputType(),
	name = faker.lorem.word(),
	accept = '',
	alt = '',
	autocapitalize = randomAutocapitalizeAttrValue(),
	autocomplete = randomeAutocompleteAttrValue(),
	autocorrect = isSafari(browser) ? faker.helpers.arrayElement(['on', 'off']) : undefined,
	autofocus = false,
	capture = 'user',
	checked = faker.datatype.boolean(),
	dirname = isValidDirnameType(type) ? `${name}-dir` : undefined,
	disabled = faker.datatype.boolean(),
	form = faker.datatype.boolean() ? `${faker.lorem.word()}-form` : undefined,
	formaction = isSubmit(type) ? faker.internet.url() : undefined,
	formenctype = isSubmit(type) ? randomeFormenctypeAttrValue() : undefined,
	formmethod = isSubmit(type) ? randomFormmethodAttrValue() : undefined,
	formnovalidate = isSubmit(type) ? faker.datatype.boolean() : undefined,
	formtarget = isSubmit(type) ? randomFormtargetAttrValue() : undefined,
	height = faker.datatype.boolean() ? faker.number.int({ min: 10, max: 1000 }) : undefined,
	id = name,
	incremental = isWebkit(browser) ? faker.datatype.boolean() : undefined,
	inputmode = faker.datatype.boolean() ? randomInputmodeAttrValue() : undefined,
	list = isValidListType(type) && faker.datatype.boolean() ? faker.helpers.arrayElement(VALID_LIST_TYPES) : undefined,
	max,
	maxlength,
	min,
	minlength,
	multiple = isEmailOrFile(type) && faker.datatype.boolean(),
	orient = isFirefox(browser) ? faker.helpers.arrayElement(['horizontal', 'vertical']) : undefined,
	pattern,
	placeholder,
	popovertarget,
	popovertargetaction,
	readonly,
	required,
	results = isSafari(browser) ? faker.number.int({ min: 0, max: 100}) : undefined,
	size,
	src,
	step,
	tabIndex = -1,
	title = name,
	value,
	webkitdirectory,
	width,
	checkValidity = jest.fn(),
	reportValidity = jest.fn(),
	select = jest.fn(),
	setCustomValidity = jest.fn(),
	setRangeText = jest.fn(),
	setSelectionRange = jest.fn(),
	showPicker = jest.fn(),
	stepDown = jest.fn(),
	stepUp = jest.fn(),
	...overrideProps
}: Record<string, unknown> = {}) => {
	const inputElement = fakeHtmlElement({
		ssr,
		tagName: 'INPUT',
		accept,
		alt,
		autocapitalize,
		autocomplete,
		autocorrect,
		autofocus: isHidden(type) ? false : autofocus,
		capture,
		dirname,
		disabled,
		form,
		formaction,
		formenctype,
		formmethod,
		formnovalidate,
		formtarget,
		height,
		id,
		incremental,
		inputmode,
		list,
		max,
		maxlength,
		min,
		minlength,
		multiple,
		orient,
		pattern,
		placeholder,
		popovertarget,
		popovertargetaction,
		readonly,
		required,
		results,
		size,
		src,
		step,
		tabIndex,
		title,
		type,
		value,
		webkitdirectory,
		width,
		checkValidity,
		reportValidity,
		select,
		setCustomValidity,
		setRangeText,
		setSelectionRange,
		showPicker,
		stepDown,
		stepUp,
	});

	Object.entries(overrideProps).forEach(([key, value]) => {
		const prop = Object.getOwnPropertyDescriptor(inputElement, key) || {
			writable: false,
		};

		Object.defineProperty(inputElement, key, {
			...prop,
			value,
		});
	});

	return inputElement as HTMLInputElement;
};
