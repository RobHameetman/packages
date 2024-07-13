import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import copy from 'rollup-plugin-copy';
import { terser } from 'rollup-plugin-terser';
import progress from 'rollup-plugin-progress';
import { visualizer } from 'rollup-plugin-visualizer';
import executeOnGenerate from 'rollup-plugin-execute';

const execute = (...args) => {
	const { generateBundle } = executeOnGenerate(...args);

	return { name: 'exec-on-close-bundle', closeBundle: generateBundle };
}

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
			progress(),
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
			alias({
				entries: [
					{ find: '@/', replacement: `${process.cwd()}/lib/` }
				]
			}),
			resolve({
				extensions: ['.ts'],
			}),
			typescript({
				tsconfig: `${process.cwd()}/tsconfig.json`,
				tsconfigOverride: {
					compilerOptions: {
						declaration: true,
					},
				},
			}),
			commonjs({ extensions: ['.js', '.ts'] }),
			terser({
				output: {
					comments: false,
				},
			}),
			execute([
				`cat ${process.cwd()}/dist/esm/experimental.d.ts ${process.cwd()}/dist/esm/index.d.ts > ${process.cwd()}/dist/esm/index.d.mts`,
				`cat ${process.cwd()}/dist/cjs/experimental.d.ts ${process.cwd()}/dist/cjs/index.d.ts > ${process.cwd()}/dist/cjs/index.d.cts &&
					mv ${process.cwd()}/dist/cjs/index.d.cts ${process.cwd()}/dist/cjs/index.d.ts`,
				`find ${process.cwd()}/dist/esm -name \\*.min.js -exec bash -c 'cp "$0" "\${0%.min.js}.min.mjs"' {} \\;`,
				`find ${process.cwd()}/dist/esm -name \\*.d.ts -exec bash -c 'cp "$0" "\${0%.d.ts}.d.mts"' {} \\;`,
				`cp -r ${process.cwd()}/dist/esm/* ${process.cwd()}/dist/ && cp -r ${process.cwd()}/dist/cjs/* ${process.cwd()}/dist/`,
				`rm -r ${process.cwd()}/dist/esm && rm -r ${process.cwd()}/dist/cjs && rm ${process.cwd()}/dist/experimental.d.mts ${process.cwd()}/dist/experimental.d.ts`,
			]),
			visualizer(),
		],
	},
];
