export enum EsLintNodeRules {
	CallbackReturn = 'callback-return',
	GlobalRequire = 'global-require',
	HandleCallbackErr = 'handle-callback-err',
	NoBufferConstructor = 'no-buffer-constructor',
	NoMixedRequires = 'no-mixed-requires',
	NoNewRequire = 'no-new-require',
	NoPathConcat = 'no-path-concat',
	NoProcessEnv = 'no-process-env',
	NoProcessExit = 'no-process-exit',
	NoRestrictedModules = 'no-restricted-modules',
	NoSync = 'no-sync',
}

export type EsLintNodeRule = keyof typeof EsLintNodeRules;

export const isEsLintNodeRule = (value: unknown): value is EsLintNodeRule =>
	typeof value === 'string' && (Object.values(EsLintNodeRules) as Array<string>).includes(value);
