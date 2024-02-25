/**
 * Note: this interface should `extends Readonly<Record<string, unknown>>` or a
 * known interface if `additionalProperties` is `true`.
 */
export interface CustomRuleExampleOptions {
	readonly maximumStatements: number;
}

export const schema = [
	{
		type: 'object',
		properties: {
			maximumStatements: {
				type: 'integer',
			},
		},
		additionalProperties: false,
	},
] as const;
