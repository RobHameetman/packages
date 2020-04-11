import { EsLintPluginImportRules as R, Severity } from '../../../enums';

export default { [R.NoUselessPathSegments]: [Severity.error, { commonjs: true }] };
