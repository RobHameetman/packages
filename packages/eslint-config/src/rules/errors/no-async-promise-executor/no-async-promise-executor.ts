import { EsLintErrorRules as R, Severity } from '../../../enums';

export default { [R.NoAsyncPromiseExecutor]: [Severity.error] };
