import { EsLintBestPracticesRules as R, Severity } from '../../../enums';

export default { [R.WrapIife]: [Severity.error, 'outside', { functionPrototypeMethods: false }] };
