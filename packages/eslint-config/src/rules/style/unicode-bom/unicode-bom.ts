import { EsLintStyleRules as R, Severity, Usage } from '../../../enums';

export default { [R.UnicodeBom]: [Severity.error, Usage.never] };
