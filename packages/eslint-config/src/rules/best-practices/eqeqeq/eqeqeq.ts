import { EsLintBestPracticesRules as R, Severity, Usage } from '../../../enums';

export default { [R.Eqeqeq]: [Severity.error, Usage.always, { null: 'ignore' }] };
