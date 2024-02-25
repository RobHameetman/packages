const { DEBUG = '', NODE_ENV = 'production' } = process.env;

const isTest = NODE_ENV === 'test';
const isDevelopment = NODE_ENV === 'development';
const isProduction = NODE_ENV === 'production';
const isDebug = DEBUG.includes('eslint:code-path');

if (isDebug) {
	console.log('-------------------');
	console.group('plugin:@rob.hameetman/recommended');

	console.info(`├── process.cwd: ${process.cwd()}`);
	console.info(`├── process.env.NODE_ENV: ${process.env.NODE_ENV}`);
	console.info(`├── isTest: ${isTest}`);
	console.info(`├── isDevelopment: ${isDevelopment}`);
	console.info(`└── isProduction: ${isProduction}`);

	console.groupEnd();
	console.log('-------------------');
}

const ALWAYS_ALLOWED_NAMING_PREFIXES = Object.freeze([
	'Optimizely',
	'Datadog',
	'Splunk',
]);

const ALLOWED_OBJECT_MEMBER_NAMING_PREFIXES = Object.freeze([
	...ALWAYS_ALLOWED_NAMING_PREFIXES,
	'test',
]);

const ALLOWED_TYPE_NAMING_PREFIXES = Object.freeze([
	'Test',
]);

export const recommended = Object.freeze({
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	env: {
		es6: true,
		commonjs: true,
		browser: true,
		node: true,
	},
	plugins: [
		'import',
		'prettier',
	],
	globals: {
		document: false,
		navigator: false,
		window: false,
	},
	extends: [
		'standard',
		'plugin:import/recommended',
		'plugin:prettier/recommended', /* <-- must always be last */
	],
	/**
	 * Note: use only semantic values for rules (i.e. 'off', 'warn', 'error')
	 * rather than numeric values.
	 */
	rules: {
		/**
		 * ESLint Core
		 */
		['brace-style']: ['error', '1tbs', { allowSingleLine: true }],
		['camelcase']: ['error', { allow: ['^(__)?[A-Z]{1,}(_[A-Z]{1,})*(__)?$'] }],
		['comma-dangle']: ['error', 'always-multiline'],
		['comma-spacing']: 'error',
		['curly']: ['error', 'all'],
		['explicit-function-return-type']: 'off',
		['explicit-member-accessibility']: 'off',
		['explicit-module-boundary-types']: 'off',
		['func-call-spacing']: ['error', 'never'],
		['generator-star-spacing']: [
			'error',
			{ before: false, after: true },
		],
		['keyword-spacing']: 'error',
		['lines-between-class-members']: 'error',
		['no-console']: [
			isDevelopment ? 'warn' : 'error',
			{ allow: ['warn', 'error', 'info'] },
		],
		['no-dupe-class-members']: 'error',
		['no-restricted-imports']: 'warn',
		['no-multiple-empty-lines']: ['error', { max: 1, maxEOF: 1, maxBOF: 0 }],
		['no-redeclare']: 'error',
		['no-shadow']: 'error',
		['no-undef']: isDevelopment ? 'warn' : 'error',
		['no-use-before-define']: 'off',
		['no-useless-constructor']: 'error',
		['no-unused-vars']: [
			isDevelopment ? 'warn' : 'error',
			{
				argsIgnorePattern: '^_',
				caughtErrorsIgnorePattern: '^ignore',
				varsIgnorePattern: '^_',
			},
		],
		['padding-line-between-statements']: [
			'error',
			{
				blankLine: 'always',
				prev: 'directive',
				next: '*',
			},
			{
				blankLine: 'always',
				prev: ['*'],
				next: ['block-like'],
			},
			{
				blankLine: 'always',
				prev: ['block-like'],
				next: ['*'],
			},
			{
				blankLine: 'always',
				prev: '*',
				next: ['return', 'break', 'continue'],
			},
			{
				blankLine: 'always',
				prev: ['const', 'let', 'var'],
				next: '*',
			},
			{
				blankLine: 'any',
				prev: ['const', 'let', 'var'],
				next: ['const', 'let', 'var'],
			},
			{
				blankLine: 'always',
				prev: ['multiline-const', 'multiline-let', 'multiline-var'],
				next: '*',
			},
			{
				blankLine: 'never',
				prev: ['singleline-const', 'singleline-let', 'singleline-var'],
				next: ['singleline-const', 'singleline-let', 'singleline-var'],
			},
			{
				blankLine: 'always',
				prev: ['import', 'cjs-import'],
				next: '*',
			},
			{
				blankLine: 'any',
				prev: ['import', 'cjs-import'],
				next: ['import', 'cjs-import'],
			},
			{
				blankLine: 'always',
				prev: ['*'],
				next: ['export', 'cjs-export'],
			},
			{
				blankLine: 'any',
				prev: ['export', 'cjs-export'],
				next: ['export', 'cjs-export'],
			},
		],
		['prefer-template']: 'error',
		['quotes']: ['error', 'single'],
		['require-await']: 'off',
		['no-return-await']: 'error',
		['semi']: ['error', 'always'],
		['space-before-blocks']: 'error',
		['space-before-function-paren']: [
			'error',
			{ asyncArrow: 'always', anonymous: 'never', named: 'never' },
		],
		/**
		 * plugin:import
		 */
		['import/extensions']: ['error', 'never', {
			md: 'always',
			mdx: 'always',
			svg: 'always',
			txt: 'always',
		}],
		['import/first']: 'error',
		['import/no-anonymous-default-export']: 'error',
		['import/no-default-export']: 'error',
		['import/no-self-import']: 'error',
		['import/order']: [
			'error', {
				alphabetize: {
					order: 'asc',
				},
				groups: [
					'builtin',
					'external',
					'internal',
					'index',
					'sibling',
					'parent',
					'type',
					'object',
					'unknown',
				],
				['newlines-between']: 'never',
				pathGroups: [
					{
						pattern: 'react',
						group: 'builtin',
						position: 'before'
					},
					{
						pattern: 'react-dom',
						group: 'builtin',
						position: 'before'
					},
					{
						pattern: 'react-router',
						group: 'builtin',
						position: 'before'
					},
					{
						pattern: 'react-router-dom',
						group: 'builtin',
						position: 'before',
					},
					{
						pattern: './*?(.module).?(s)css',
						group: 'unknown',
						position: 'after',
					},
				],
				pathGroupsExcludedImportTypes: [
					'react',
					'react-dom',
					'react-router',
					'react-router-dom',
				],
				warnOnUnassignedImports: true,
			},
		],
		/**
		 * plugin:prettier
		 */
		['prettier/prettier']: 'error',
		/**
		 * plugin:@rob.hameetman/
		 */
		/**
		 * TODO: Add custom rules here.
		 *
		 * @example
		 * ['@rob.hameetman/custom-rule-example']: 'error',
		 */
	},
	overrides: [
		/**
		 * Allow default exports in `index.js`, in TypeScript type declaration
		 * files, in MFE remotes and other lazy-loaded resources, and in config
		 * files like `webpack.config.js`, `rollup.config.js`, etc.
		 */
		{
			files: [
				'**/*.d.ts',
				'**/*.config.[jt]s',
				'**/shared/**/!(*.spec).[jt]s?(x)',
				'**/*.(remote|lazy).[jt]s?(x)',
				'**/Lazy*.[jt]s?(x)',
				'**/*Remote.[jt]s?(x)',
				'index.js',
			],
			rules: {
				['import/no-default-export']: 'off',
			},
		},
		/**
		 * TypeScript files
		 */
		{
			parser: '@typescript-eslint/parser',
			// parserOptions: {
			// 	project: '**/tsconfig.json',
			// },
			plugins: [
				'@typescript-eslint',
			],
			extends: [
				'plugin:@typescript-eslint/recommended',
				'plugin:import/typescript',
				'plugin:prettier/recommended', /* <-- must always be last */
			],
			files: [
				'**/*.ts?(x)',
			],
			rules: {
				/**
				 * Enable @typescript-eslint/ rules
				 */
				['@typescript-eslint/array-type']: ['error', { default: 'generic' }],
				['@typescript-eslint/ban-tslint-comment']: 'error',
				['@typescript-eslint/ban-types']: isDevelopment ? 'warn' : 'error',
				['@typescript-eslint/brace-style']: ['error', '1tbs', { allowSingleLine: true }],
				['@typescript-eslint/class-literal-property-style']: 'error',
				['@typescript-eslint/comma-dangle']: ['error', 'always-multiline'],
				['@typescript-eslint/comma-spacing']: 'error',
				['@typescript-eslint/consistent-indexed-object-style']: 'error',
				['@typescript-eslint/consistent-type-assertions']: [
					'error',
					{ assertionStyle: 'as' },
				],
				['@typescript-eslint/consistent-type-definitions']: ['error', 'interface'],
				['@typescript-eslint/explicit-function-return-type']: 'off',
				['@typescript-eslint/explicit-member-accessibility']: 'off',
				['@typescript-eslint/explicit-module-boundary-types']: 'off',
				['@typescript-eslint/func-call-spacing']: ['error', 'never'],
				['@typescript-eslint/keyword-spacing']: 'error',
				['@typescript-eslint/lines-between-class-members']: 'error',
				['@typescript-eslint/naming-convention']: [
					'error',
					{
						selector: 'default',
						format: ['camelCase'],
						filter: {
							regex: `^(${ALWAYS_ALLOWED_NAMING_PREFIXES.join('|')})`,
							match: false
						},
						leadingUnderscore: 'allow',
					},
					{
						selector: 'variable',
						format: ['camelCase', 'UPPER_CASE'],
						leadingUnderscore: 'allow',
						trailingUnderscore: 'allow',
					},
					{
						selector: 'parameter',
						format: ['camelCase'],
						leadingUnderscore: 'allow',
					},
					{
						selector: 'memberLike',
						format: ['camelCase'],
						filter: {
							regex: `^(${ALLOWED_OBJECT_MEMBER_NAMING_PREFIXES.join('|')})_`,
							match: false
						},
					},
					{
						selector: 'memberLike',
						modifiers: ['private'],
						format: ['camelCase'],
						leadingUnderscore: 'require',
					},
					{
						selector: [
							'classProperty',
							'objectLiteralProperty',
							'typeProperty',
							'classMethod',
							'objectLiteralMethod',
							'typeMethod',
							'accessor',
							'enumMember',
						],
						format: null,
						modifiers: ['requiresQuotes'],
					},
					{
						selector: 'typeLike',
						format: ['PascalCase'],
						filter: {
							regex: `^(${ALLOWED_TYPE_NAMING_PREFIXES.join('|')})_`,
							match: false,
						},
					},
					{
						selector: 'interface',
						format: ['PascalCase'],
						custom: {
							regex: '^I[A-Z]',
							match: false,
						},
					},
				],
				['@typescript-eslint/no-base-to-string']: 'error',
				['@typescript-eslint/no-dupe-class-members']: 'error',
				['@typescript-eslint/no-duplicate-enum-values']: 'error',
				['@typescript-eslint/no-empty-interface']: isDevelopment ? 'warn' : 'error',
				['@typescript-eslint/no-explicit-any']: isDevelopment ? 'warn' : 'error',
				['@typescript-eslint/no-non-null-assertion']: 'error',
				['@typescript-eslint/no-non-null-asserted-nullish-coalescing']: 'error',
				['@typescript-eslint/no-redeclare']: 'error',
				['@typescript-eslint/no-redundant-type-constituents']: 'error',
				['@typescript-eslint/no-restricted-imports']: 'warn',
				['@typescript-eslint/no-shadow']: 'error',
				['@typescript-eslint/no-unused-vars']: [
					isDevelopment ? 'warn' : 'error',
					{
						argsIgnorePattern: '^_',
						caughtErrorsIgnorePattern: '^ignore',
						varsIgnorePattern: '^_',
					},
				],
				['@typescript-eslint/no-use-before-define']: 'off',
				['@typescript-eslint/no-useless-constructor']: 'off',
				['@typescript-eslint/no-var-requires']: 'error',
				['@typescript-eslint/prefer-as-const']: 'error',
				['@typescript-eslint/prefer-includes']: 'error',
				['@typescript-eslint/prefer-nullish-coalescing']: 'off',
				['@typescript-eslint/prefer-optional-chain']: 'error',
				['@typescript-eslint/prefer-readonly']: 'error',
				['@typescript-eslint/prefer-reduce-type-parameter']: 'error',
				['@typescript-eslint/prefer-return-this-type']: 'error',
				['@typescript-eslint/prefer-string-starts-ends-with']: 'error',
				['@typescript-eslint/promise-function-async']: 'error',
				['@typescript-eslint/padding-line-between-statements']: [
					'error',
					{
						blankLine: 'always',
						prev: ['directive'],
						next: ['*'],
					},
					{
						blankLine: 'always',
						prev: ['*'],
						next: ['block-like'],
					},
					{
						blankLine: 'always',
						prev: ['block-like'],
						next: ['*'],
					},
					{
						blankLine: 'always',
						prev: ['*'],
						next: ['return', 'break', 'continue'],
					},
					{
						blankLine: 'always',
						prev: ['const', 'let', 'var'],
						next: ['*'],
					},
					{
						blankLine: 'any',
						prev: ['const', 'let', 'var'],
						next: ['const', 'let', 'var'],
					},
					{
						blankLine: 'always',
						prev: ['multiline-const', 'multiline-let', 'multiline-var'],
						next: ['*'],
					},
					{
						blankLine: 'never',
						prev: ['singleline-const', 'singleline-let', 'singleline-var'],
						next: ['singleline-const', 'singleline-let', 'singleline-var'],
					},
					{
						blankLine: 'always',
						prev: ['import', 'require'],
						next: ['*'],
					},
					{
						blankLine: 'any',
						prev: ['import', 'require'],
						next: ['import', 'require'],
					},
					{
						blankLine: 'always',
						prev: ['*'],
						next: ['export', 'exports'],
					},
					{
						blankLine: 'any',
						prev: ['export', 'exports'],
						next: ['export', 'exports'],
					},
					{
						blankLine: 'always',
						prev: ['*'],
						next: ['interface'],
					},
					{
						blankLine: 'always',
						prev: ['interface'],
						next: ['*'],
					},
					{
						blankLine: 'always',
						prev: ['type'],
						next: ['*'],
					},
					{
						blankLine: 'any',
						prev: ['type'],
						next: ['type'],
					},
				],
				['@typescript-eslint/return-await']: 'error',
				['@typescript-eslint/semi']: 'error',
				['@typescript-eslint/sort-type-union-intersection-members']: isDevelopment ? 'warn' : 'error',
				['@typescript-eslint/space-before-blocks']: 'error',
				['@typescript-eslint/space-before-function-paren']: [
					'error',
					{ asyncArrow: 'always', anonymous: 'never', named: 'never' },
				],
				['@typescript-eslint/switch-exhaustiveness-check']: isDevelopment ? 'warn' : 'error',
				['@typescript-eslint/type-annotation-spacing']: 'error',
				['@typescript-eslint/unified-signatures']: 'error',
				/**
				 * Disable ESLint-core counterparts.
				 */
				['brace-style']: 'off',
				['camelcase']: 'off',
				['comma-dangle']: 'off',
				['comma-spacing']: 'off',
				['func-call-spacing']: 'off',
				['keyword-spacing']: 'off',
				['lines-between-class-members']: 'off',
				['no-dupe-class-members']: 'off',
				['no-redeclare']: 'off',
				['no-restricted-imports']: 'off',
				['no-shadow']: 'off',
				['no-unused-vars']: 'off',
				['no-useless-constructor']: 'off',
				['padding-line-between-statements']: 'off',
				['no-return-await']: 'off',
				['semi']: 'off',
				['space-before-blocks']: 'off',
				['space-before-function-paren']: 'off',
			},
			settings: {
				'import/extensions': [
					'.ts',
					'.tsx',
				],
				'import/resolver': {
					node: {
						extensions: [
							'.js',
							'.json',
							'.jsx',
							'.ts',
							'.tsx',
						],
					},
				},
			},
		},
		/**
		 * React/JSX files (includes TypeScript)
		 */
		{
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
			plugins: [
				'react',
				'react-hooks',
				'jsx-a11y',
			],
			extends: [
				'plugin:react/recommended',
				'plugin:react-hooks/recommended',
				'plugin:jsx-a11y/recommended',
				'plugin:prettier/recommended', /* <-- must always be last */
			],
			files: [
				'**/*.[jt]sx',
			],
			rules: {
				/**
				 * plugin:react
				 */
				['react/boolean-prop-naming']: [
					'error', {
						message: 'Linking verbs like "is" and "has" are redundant in boolean prop names. A single intransitive verb (e.g. `open` instead of `isOpen`, `complete` instead of `hasFinished`, `silent` instead of `hideErrors`, etc.) is ideal, though a transitive verb followed by a subject is often necessary for more complex/specialized use cases (e.g. `displayCancelButton`).',
						rule: '^(?!is|has|should|use)([A-Za-z0-9]?)*',
					},
				],
				['react/destructuring-assignment']: [
					'error',
					'always',
					{ destructureInSignature: 'always' },
				],
				['react/display-name']: 'off',
				['react/forbid-dom-props']: [
					'error',
					{
						forbid: [
							{ propName: 'data-testID', message: 'Test ID attributes should be "data-test-id".' },
							{ propName: 'data-testId', message: 'Test ID attributes should be "data-test-id".' },
							{ propName: 'data-test-Id', message: 'Test ID attributes should be "data-test-id".' },
							{ propName: 'data-test-ID', message: 'Test ID attributes should be "data-test-id".' },
						],
					},
				],
				['react/hook-use-state']: [isDevelopment ? 'warn' : 'error', {
					allowDestructuredState: true,
				}],
				['react/jsx-boolean-value']: 'error',
				['react/jsx-closing-bracket-location']: ['error', 'line-aligned'],
				['react/jsx-curly-brace-presence']: ['error', 'never'],
				['react/jsx-curly-newline']: ['error', 'consistent'],
				['react/jsx-curly-spacing']: ['error', { when: 'never' }],
				['react/jsx-equals-spacing']: 'error',
				['react/jsx-filename-extension']: [
					'error',
					{ extensions: ['.tsx', '.jsx'] },
				],
				['react/jsx-fragments']: ['error', 'syntax'],
				['react/jsx-handler-names']: ['error', {
					eventHandlerPrefix: 'handle',
					eventHandlerPropPrefix: 'on',
					checkLocalVariables: true,
				}],
				['react/jsx-max-props-per-line']: ['error', {
					maximum: { single: 5, multi: 1 },
				}],
				['react/jsx-newline']: ['error', { prevent: true }],
				['react/jsx-no-comment-textnodes']: 'error',
				['react/jsx-no-leaked-render']: 'error',
				['react/jsx-no-undef']: isDevelopment ? 'warn' : 'error',
				['react/jsx-no-useless-fragment']: isDevelopment ? 'warn' : 'error',
				['react/jsx-pascal-case']: 'error',
				['react/jsx-sort-props']: ['error', {
					noSortAlphabetically: true,
					reservedFirst: ['key'],
					shorthandLast: true,
				}],
				['react/jsx-tag-spacing']: 'error',
				['react/jsx-uses-vars']: 'error',
				['react/jsx-wrap-multilines']: 'error',
				['react/no-array-index-key']: isDevelopment ? 'warn' : 'error',
				['react/no-deprecated']: 'error',
				['react/no-invalid-html-attribute']: isDevelopment ? 'warn' : 'error',
				['react/no-multi-comp']: 'error',
				['react/no-namespace']: 'error',
				['react/no-this-in-sfc']: 'error',
				['react/no-unstable-nested-components']: 'error',
				['react/prefer-es6-class']: ['error', 'always'],
				['react/prefer-read-only-props']: 'error',
				['react/prefer-stateless-function']: 'error',
				['react/prop-types']: 'off',
				['react/react-in-jsx-scope']: 'off',
				['react/require-default-props']: 'off',
				['react/self-closing-comp']: 'error',
				['react/style-prop-object']: 'error',
				['react/void-dom-elements-no-children']: 'error',
				/**
				 * Other overrides
				 */
				['@typescript-eslint/naming-convention']: [
					'error',
					{
						selector: 'default',
						format: ['camelCase'],
						leadingUnderscore: 'allow',
					},
					{
						selector: 'variable',
						format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
						leadingUnderscore: 'allow',
						trailingUnderscore: 'allow',
					},
					{
						selector: 'parameter',
						format: ['camelCase'],
						leadingUnderscore: 'allow',
					},
					{
						selector: 'memberLike',
						format: ['camelCase', 'PascalCase'],
						filter: {
							regex: `^(${ALLOWED_OBJECT_MEMBER_NAMING_PREFIXES.join('|')})_`,
							match: false
						},
					},
					{
						selector: 'memberLike',
						modifiers: ['private'],
						format: ['camelCase'],
						leadingUnderscore: 'require',
					},
					{
						selector: [
							'classProperty',
							'objectLiteralProperty',
							'typeProperty',
							'classMethod',
							'objectLiteralMethod',
							'typeMethod',
							'accessor',
							'enumMember',
						],
						format: null,
						modifiers: ['requiresQuotes'],
					},
					{
						selector: 'typeLike',
						format: ['PascalCase'],
					},
					{
						selector: 'interface',
						format: ['PascalCase'],
						custom: {
							regex: '^I[A-Z]',
							match: false,
						},
					},
				],
				['import/no-default-export']: 'off',
			},
			settings: {
				'import/extensions': [
					'.jsx',
					'.tsx',
					'.json',
					'.css',
					'.scss',
				],
				'import/resolver': {
					node: {
						extensions: [
							'.jsx',
							'.tsx',
							'.json',
							'.css',
							'.scss',
						],
					},
				},
				react: {
					version: 'detect',
				},
			},
		},
		/**
		 * Graphql files
		 */
		{
			plugins: [
				'graphql',
			],
			files: [
				'**/*.g?(raph)ql',
			],
			rules: {
				['import/extensions']: ['error', 'never', {
					gql: 'always',
					graphql: 'always',
				}],
			},
			settings: {
				'import/extensions': [
					'.gql',
					'.graphql',
				],
				'import/resolver': {
					node: {
						extensions: [
							'.gql',
							'.graphql',
						],
					},
				},
			},
		},
		/**
		 * Cypress test files
		 */
		{
			parserOptions: {
				project: '**/{cypress,e2e}/tsconfig.json',
			},
			env: {
				'cypress/globals': true,
			},
			plugins: [
				'cypress',
			],
			globals: {
				cy: false,
				Cypress: false,
			},
			extends: [
				'plugin:cypress/recommended',
			],
			files: [
				'**/{cypress,e2e}/**/*.{spec,test}.[jt]s',
			],
		},
		/**
		 * Jest test files (includes TypeScript)
		 */
		{
			env: {
				mocha: true,
				jest: true,
			},
			plugins: [
				'jest',
				'testing-library',
			],
			extends: [
				'plugin:jest/recommended',
				'plugin:testing-library/react',
				'plugin:prettier/recommended', /* <-- must always be last */
			],
			files: [
				'**/*.{spec,test}.[jt]s?(x)',
			],
			excludedFiles: [
				'**/{cypress,e2e}/**/*.{spec,test}.[jt]s'
			],
			rules: {
				/**
				 * plugin:testing-library
				 */
				['testing-library/consistent-data-testid']: ['error', {
					testIdPattern: '^(?:[A-Za-z1-9]+_)*[A-Za-z1-9]+$',
					testIdAttribute: 'data-test-id',
				}],
				['testing-library/no-container']: 'warn',
				['testing-library/no-node-access']: 'off',
				['testing-library/no-render-in-setup']: 'off',
				['testing-library/prefer-screen-queries']: 'error',
				/**
				 * plugin:jest
				 */
				['jest/consistent-test-it']: ['error', {
					fn: 'it',
					withinDescribe: 'it',
				}],
				['jest/expect-expect']: 'error',
				['jest/max-nested-describe']: ['error', { max: 5 }],
				['jest/no-commented-out-tests']: isDevelopment ? 'warn' : 'error',
				['jest/no-conditional-expect']: 'error',
				['jest/no-conditional-in-test']: 'off',
				['jest/no-deprecated-functions']: 'warn',
				['jest/no-done-callback']: isDevelopment ? 'warn' : 'error',
				['jest/no-duplicate-hooks']: 'error',
				['jest/no-export']: 'error',
				['jest/no-focused-tests']: isDevelopment ? 'warn' : 'error',
				['jest/no-hooks']: ['error', { allow: ['beforeEach', 'afterEach']}],
				['jest/no-identical-title']: 'error',
				['jest/no-interpolation-in-snapshots']: 'error',
				['jest/no-jasmine-globals']: 'error',
				['jest/no-jest-import']: isDevelopment ? 'warn' : 'error',
				['jest/no-mocks-import']: 'error',
				['jest/no-standalone-expect']: 'error',
				['jest/no-test-prefixes']: 'error',
				['jest/no-test-return-statement']: 'error',
				['jest/prefer-called-with']: 'off',
				['jest/prefer-comparison-matcher']: 'error',
				['jest/prefer-equality-matcher']: 'error',
				['jest/prefer-expect-resolves']: isDevelopment ? 'warn' : 'error',
				['jest/prefer-hooks-on-top']: 'error',
				['jest/prefer-lowercase-title']: [
					'error',
					{ ignoreTopLevelDescribe: true },
				],
				['jest/prefer-snapshot-hint']: ['warn', 'multi'],
				['jest/prefer-spy-on']: 'error',
				['jest/prefer-to-be']: 'error',
				['jest/prefer-to-contain']: 'error',
				['jest/prefer-to-have-length']: 'error',
				['jest/prefer-todo']: 'warn',
				['jest/require-hook']: 'error',
				['jest/require-top-level-describe']: 'error',
				['jest/valid-describe-callback']: 'error',
				['jest/valid-expect']: 'error',
				['jest/valid-expect-in-promise']: 'error',
				['jest/valid-title']: ['error', {
					ignoreTypeOfDescribeName: true,
					mustMatch: {
						it: '^should ',
					},
				}],
			}
		},
		/**
		 * Override other ESLint rules in Jest tests and adjacent resources.
		 */
		{
			files: [
				'**/*.{spec,test}.[jt]s?(x)',
				'**/__test__/**/*.[jt]s?(x)',
			],
			excludedFiles: [
				'**/{cypress,e2e}/**/*.{spec,test}.[jt]s'
			],
			rules: {
				['@typescript-eslint/dot-notation']: 'off',
				['@typescript-eslint/naming-convention']: 'off',
				['@typescript-eslint/no-empty-function']: 'off',
				['@typescript-eslint/no-empty-interface']: 'off',
				['@typescript-eslint/no-useless-constructor']: 'off',
				['react/jsx-no-useless-fragment']: 'off',
				['dot-notation']: 'off',
				['no-empty-function']: 'off',
				['no-proto']: 'off',
				['no-useless-constructor']: 'off',
			}
		},
	],
	settings: {
		'import/extensions': [
			'.js',
		],
		'import/resolver': {
			node: {
				extensions: [
					'.js',
				],
			},
		},
	},
});
