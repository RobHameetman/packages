import { EsLintNodeRules as R, Severity } from '../../../enums';

export default { [R.NoBufferConstructor]: [Severity.error] };
