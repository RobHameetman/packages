import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import copy from 'rollup-plugin-copy';
// import deleteFiles from 'rollup-plugin-delete';
// import dts from 'rollup-plugin-dts';
import { terser } from 'rollup-plugin-terser';

export default [
	{
		input: `${process.cwd()}/lib/index.ts`,
		output: [
			{
				file: `${process.cwd()}/dist/index.min.js`,
				format: 'esm',
			},
			{
				file: `${process.cwd()}/dist/index.min.cjs`,
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
						dest: `${process.cwd()}/dist`,
					},
				],
			}),
		],
	},
	// {
  //   input: 'dist/index.d.ts',
  //   output: [{ file: 'dist/index.d.ts', format: 'es' }],
  //   plugins: [
	// 		deleteFiles({
	// 			targets: [
	// 				'dist/dom/',
	// 				'dist/html/',
	// 				'dist/js/',
	// 				'dist/react/',
	// 				'dist/utils/',
	// 			],
	// 			hook: 'buildEnd',
	// 		}),
	// 		dts()
	// 	],
  // },
];
