export enum EsLintStrictRules {
	Strict = 'strict',
}

export type EsLintStrictRule = keyof typeof EsLintStrictRules;

export const isEsLintStrictRule = (value: unknown): value is EsLintStrictRule =>
	typeof value === 'string' && (Object.values(EsLintStrictRules) as Array<string>).includes(value);
