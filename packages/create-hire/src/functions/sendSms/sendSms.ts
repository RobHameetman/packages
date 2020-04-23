import { sendSms as _sendSms } from '@rob.hameetman/send-sms';

export const sendSms = async (
	msg: string,
	_send: Function = _sendSms,
): Promise<boolean> => {
	try {
		const { status } = await _send(msg);

		if (status !== 200) {
			throw new Error(`SMS endpoint returned status code: ${status}`);
		}

		return true;
	} catch (_) {
		return false;
	}
};
