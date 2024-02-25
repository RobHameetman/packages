# custom-rule-example

TODO: Add a short description here.

> ✅ The `"extends": "plugin:@ge/recommended"` property in
> a configuration file enables this rule.

## Rule Details

TODO: Add a longer description of the rule here.

Examples of **incorrect** code for this rule:

```TypeScript
/**
 * TODO: Add some incorrect code.
 */
```

Examples of **correct** code for this rule:

```TypeScript
/**
 * TODO: Add some correct code.
 */
```

## Options

This rule has an options object with the following schema:

```TypeScript
interface CustomRuleExampleOptions {
  readonly maximumStatements: number;
}
```

### `maximumStatements`

The `maximumStatements` field is a **number** which determines how many
statements are allowed before the rule is violated. If not specified, this
property has a default value of `1`.

```TypeScript
/* eslint custom-rule-example: ['error', { maximumStatements: 2 }] */
/**
 * TODO: Add some example code here.
 */
```

## When Not To Use It

This is section is optional but strongly encouraged. Add some information here
about why this rule exists and how to use it appropriately.

## Version

This rule was introduced in `@rob.hameetman/eslint-plugin` version `1.0.0`.

## Related Rules

TODO: Add links to any related custom rules here.
