import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import copy from 'rollup-plugin-copy';
import { terser } from 'rollup-plugin-terser';
import progress from 'rollup-plugin-progress';
import { visualizer } from 'rollup-plugin-visualizer';
import executeOnGenerate from 'rollup-plugin-execute';

/**
 * Run the provided shell commands after the bundle is written instead of when
 * it's generated in memory. This is necessary because, unlike {@link copy()},
 * {@link execute()} doesn't allow us to change the Rollup hook in the plugin
 * config.
 */
const execute = (...args) => {
	const { generateBundle } = executeOnGenerate(...args);

	return { name: 'exec-on-close-bundle', closeBundle: generateBundle };
}

/**
 * @type {import('rollup').RollupOptions[]}
 */
export default [
	{
		input: [
			`${process.cwd()}/lib/index.ts`,
			`${process.cwd()}/lib/react.ts`,
		],
		output: [
			{
				entryFileNames: '[name].min.mjs',
				dir: `${process.cwd()}/dist/esm/`,
				format: 'esm',
				preserveModules: true,
			},
			{
				entryFileNames: '[name].min.js',
				dir: `${process.cwd()}/dist/cjs/`,
				format: 'cjs',
			},
		],
		plugins: [
			/**
			 * @see https://www.npmjs.com/package/rollup-plugin-progress
			 */
			progress(),
			/**
			 * @see https://www.npmjs.com/package/rollup-plugin-copy
			 */
			copy({
				hook: 'buildStart',
				targets: [
					{
						src: `${process.cwd()}/typings/experimental.d.ts`,
						dest: `${process.cwd()}/dist/esm/`,
						transform: (contents) => contents.toString().replace('\nexport {}\n', ''),
					},
					{
						src: `${process.cwd()}/typings/experimental.d.ts`,
						dest: `${process.cwd()}/dist/cjs/`,
						transform: (contents) => contents.toString().replace('\nexport {}\n', ''),
					},
				],
			}),
			/**
			 * @see https://www.npmjs.com/package/@rollup/plugin-alias
			 */
			alias({
				entries: [
					{ find: '@/', replacement: `${process.cwd()}/lib/` }
				]
			}),
			/**
			 * @see https://www.npmjs.com/package/@rollup/plugin-node-resolve
			 */
			resolve({
				extensions: ['.ts'],
			}),
			/**
			 * @see https://www.npmjs.com/package/rollup-plugin-typescript2
			 */
			typescript({
				tsconfig: `${process.cwd()}/tsconfig.json`,
				tsconfigOverride: {
					compilerOptions: {
						declaration: true,
					},
				},
			}),
			/**
			 * @see https://www.npmjs.com/package/@rollup/plugin-commonjs
			 */
			commonjs({ extensions: ['.js', '.ts'] }),
			/**
			 * @see https://www.npmjs.com/package/rollup-plugin-terser
			 */
			terser({
				output: {
					comments: false,
				},
			}),
			/**
			 * @see https://www.npmjs.com/package/rollup-plugin-execute
			 */
			execute([
				/**
				 * Add the experimental type declarations to the index type declaration
				 * files to avoid any import errors.
				 */
				`cat ${process.cwd()}/dist/esm/experimental.d.ts ${process.cwd()}/dist/esm/index.d.ts > ${process.cwd()}/dist/esm/index.d.mts`,
				`cat ${process.cwd()}/dist/cjs/experimental.d.ts ${process.cwd()}/dist/cjs/index.d.ts > ${process.cwd()}/dist/cjs/index.d.cts &&
					mv ${process.cwd()}/dist/cjs/index.d.cts ${process.cwd()}/dist/cjs/index.d.ts`,
				/**
				 * Rename ESM files using .mjs and .d.mts extensions.
				 */
				`find ${process.cwd()}/dist/esm -name \\*.min.js -exec bash -c 'cp "$0" "\${0%.min.js}.min.mjs"' {} \\;`,
				`find ${process.cwd()}/dist/esm -name \\*.d.ts -exec bash -c 'cp "$0" "\${0%.d.ts}.d.mts"' {} \\;`,
				/**
				 * Centralize the type declaration files in a flat dist structure.
				 */
				`cp -r ${process.cwd()}/dist/esm/* ${process.cwd()}/dist/ && cp -r ${process.cwd()}/dist/cjs/* ${process.cwd()}/dist/`,
				/**
				 * Remove the nested dist directories.
				 */
				`rm -r ${process.cwd()}/dist/esm && rm -r ${process.cwd()}/dist/cjs && rm ${process.cwd()}/dist/experimental.d.mts ${process.cwd()}/dist/experimental.d.ts`,
				/**
				 * NOTE: The following shell commands are a workaround to address a
				 * specific issue where an untranspiled import statement is present in
				 * the type declaration files. This is not intended as a permanent
				 * solution and should be revisited for a proper fix in the future.
				 */
				`sed -i .bak -e "s#@/utils/enums/DomNodeTypes#../../utils/enums/DomNodeTypes#g" ${process.cwd()}/dist/dom/isNode/isNode.d.mts && rm ${process.cwd()}/dist/dom/isNode/isNode.d.mts.bak`,
				`sed -i .bak -e "s#@/utils/enums/DomNodeTypes#../../utils/enums/DomNodeTypes#g" ${process.cwd()}/dist/dom/isNode/isNode.d.ts && rm dist/dom/isNode/isNode.d.ts.bak`,
			]),
			/**
			 * @see https://www.npmjs.com/package/rollup-plugin-visualizer
			 */
			visualizer(),
		],
	},
];
