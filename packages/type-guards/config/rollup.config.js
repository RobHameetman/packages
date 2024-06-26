import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import copy from 'rollup-plugin-copy';
import deleteFiles from 'rollup-plugin-delete';
import dts from 'rollup-plugin-dts';
import { terser } from 'rollup-plugin-terser';

// import { DomNodeTypes } from '@/utils/enums/DomNodeTypes';

const subdirectories = [
	'dom',
	'html',
	'js',
	'react',
	'utils',
]

const cleanup = (format = 'cjs') => ({
	input: `dist/${format}/index.d.ts`,
	output: [{ file: `dist/${format}/index.d.ts`, format }],
	plugins: [
		copy({
			targets: [
				{
					src: `dist/${format}/index.d.ts`,
					dest: `dist/typings/`,
				},
				...subdirectories.map((subdirectory) => ({
					src: `dist/${format}/${subdirectory}/`,
					dest: `dist/typings/`,
				})),
			],
		}),
		deleteFiles({
			targets: subdirectories.map((subdirectory) => `dist/${format}/${subdirectory}/`),
			hook: 'buildEnd',
		}),
		dts()
	],
});

export default [
	{
		input: `${process.cwd()}/lib/index.ts`,
		output: [
			{
				file: `${process.cwd()}/dist/esm/index.min.js`,
				format: 'esm',
			},
			{
				file: `${process.cwd()}/dist/cjs/index.min.js`,
				format: 'cjs',
			},
		],
		plugins: [
			resolve({
				extensions: ['.ts'],
			}),
			alias({
				entries: [
					{ find: '@/', replacement: `${process.cwd()}/lib/` }
				]
			}),
			typescript({
				tsconfig: `${process.cwd()}/tsconfig.json`,
			}),
			commonjs(),
			terser({
				output: {
					comments: false,
				},
			}),
			copy({
				targets: [
					{
						src: `${process.cwd()}/typings/experimental.d.ts`,
						dest: `${process.cwd()}/dist/typings/`,
					},
					{
						src: `${process.cwd()}/node_modules/@types/react/ts5.0/index.d.ts`,
						dest: `${process.cwd()}/dist/typings/`,
					},
				],
			}),
		],
	},
	cleanup('cjs'),
	cleanup('esm'),
];
