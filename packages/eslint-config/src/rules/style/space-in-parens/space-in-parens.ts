import { EsLintStyleRules as R, Severity, Usage } from '../../../enums';

export default { [R.SpaceInParens]: [Severity.error, Usage.never] };
