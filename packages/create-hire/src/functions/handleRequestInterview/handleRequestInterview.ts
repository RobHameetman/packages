import chalk from 'chalk';
import { DecisionTree } from '../../types';
import { ContactMethods, PayrollTypes } from './../../enums';
import { sendSms } from '../sendSms';

export const handleRequestInterview = async ({
	contactMethod,
	pay,
	payrollType,
	title,
	yourCompany,
	yourEmailAddress,
	yourName,
	yourPhoneNumber,
}: DecisionTree, send: Function = sendSms): Promise<void> => {
	const message = `Hey Rob, it's ${yourName} over at ${yourCompany}. I'd love to chat more about a ${title} role that we think you'd be a great fit for! The pay starts at ${pay} per ${
		payrollType === PayrollTypes.Hourly ? 'hour' : 'year'
	}. Please ${
		contactMethod === ContactMethods.Call
			? `call ${yourPhoneNumber}`
			: `email ${yourEmailAddress}`
	} as soon as you have a chance. Looking forward to hearing from you!`;

	console.log(chalk`\n{grey Sending interview request...}\n`);

	const sent = await send(message);

	console.log(
		sent
			? chalk`{green 🎉 Interview request received!} I'll reach out as soon as possible. Thank you!\n`
			: chalk`{red 🚫 Interview request could not be sent. Please try again later.\n}`,
	);
};
