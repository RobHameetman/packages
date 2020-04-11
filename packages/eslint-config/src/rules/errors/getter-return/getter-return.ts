import { EsLintErrorRules as R, Severity } from '../../../enums';

export default { [R.GetterReturn]: [Severity.error, { allowImplicit: true }] };
