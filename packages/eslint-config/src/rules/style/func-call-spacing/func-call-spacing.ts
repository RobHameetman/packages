import { EsLintStyleRules as R, Severity, Usage } from '../../../enums';

export default { [R.FuncCallSpacing]: [Severity.error, Usage.never] };
