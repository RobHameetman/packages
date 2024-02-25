import { fakeListenerTypeList, fakeValidationTask } from '../../../misc';

export const fakeValidateMethodInput = ({ ...overrideProps } = {}) => ({
	check: fakeListenerTypeList(),
	task: fakeValidationTask(),
	...overrideProps,
});
