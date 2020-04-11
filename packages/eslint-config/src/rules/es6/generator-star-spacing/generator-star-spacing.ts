import { EsLintEs6Rules as R, Severity } from '../../../enums';

export default { [R.GeneratorStarSpacing]: [Severity.error, { before: true, after: true }] };
