import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

export default {
	input: `${process.cwd()}/lib/index.ts`,
	output: {
		file: `${process.cwd()}/dist/index.min.js`,
		format: 'cjs',
	},
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
	],
};
