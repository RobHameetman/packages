import { IndentKey, EsLintStyleRules as R, Severity } from '../../../enums';

/**
 * Rationale: Tabs are much better for accessibility. Please customize your tab
 * width in your editor.
 * @see: https://www.reddit.com/r/javascript/comments/c8drjo/nobody_talks_about_the_real_reason_to_use_tabs/
 */
export default { [R.Indent]: [Severity.error, IndentKey.tab] };
