import { InquiryTypes } from './../../../enums';

export const validInquiry = () => ({
	message: '💬 Enter a message:',
	name: 'test',
	type: InquiryTypes.input,
});
