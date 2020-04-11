import { EsLintStyleRules as R, Severity, Usage } from '../../../enums';

export default { [R.FunctionCallArgumentNewline]: [Severity.error, Usage.consistent] };
