import CallbackReturnRule from './callback-return';
import GlobalRequireRule from './global-require';
import HandleCallbackErrRule from './handle-callback-err';
import NoBufferConstructorRule from './no-buffer-constructor';
import NoMixedRequiresRule from './no-mixed-requires';
import NoNewRequireRule from './no-new-require';
import NoPathConcatRule from './no-path-concat';
import NoProcessEnvRule from './no-process-env';
import NoProcessExitRule from './no-process-exit';
import NoRestrictedModulesRule from './no-restricted-modules';
import NoSyncRule from './no-sync';

export const rules = {
	...CallbackReturnRule,
	...GlobalRequireRule,
	...HandleCallbackErrRule,
	...NoBufferConstructorRule,
	...NoMixedRequiresRule,
	...NoNewRequireRule,
	...NoPathConcatRule,
	...NoProcessEnvRule,
	...NoProcessExitRule,
	...NoRestrictedModulesRule,
	...NoSyncRule,
};
