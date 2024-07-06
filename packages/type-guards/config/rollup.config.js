import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
// import typescript from '@rollup/plugin-typescript';
import typescript from 'rollup-plugin-typescript2';
import concatOnBuildStart from 'rollup-plugin-concat';
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

const typings = (format = 'cjs') => ({
	input: `dist/${format}/index.d.ts`,
	output: [{ file: `dist/${format}/index.d.ts`, format }],
	plugins: [
		resolve({
			extensions: ['.ts'],
		}),
		// copy({
		// 	targets: [
		// 		{
		// 			src: `dist/${format}/index.d.ts`,
		// 			dest: `dist/typings/`,
		// 		},
		// 		...subdirectories.map((subdirectory) => ({
		// 			src: `dist/${format}/${subdirectory}/`,
		// 			dest: `dist/typings/`,
		// 		})),
		// 	],
		// }),
		// deleteFiles({
		// 	targets: subdirectories.map((subdirectory) => `dist/${format}/${subdirectory}/`),
		// 	hook: 'buildEnd',
		// }),
		dts()
	],
});

const copyConsolidatedTypeDeclaration = () => ({
	input: `dist/index.d.ts`,
	output: [{ file: `dist/index.d.ts`, format: 'es' }],
	plugins: [
		copy({
			targets: [
				{
					src: `dist/cjs/index.d.ts`,
					dest: `dist/`,
				},
			],
		}),
	],
});

const cleanupTypings = () => ({
	input: `dist/esm/index.d.ts`,
	output: [{ file: `dist/esm/index.d.ts`, format: 'es' }],
	plugins: [
		// copy({
		// 	targets: [
		// 		{
		// 			src: `dist/cjs/index.d.ts`,
		// 			dest: `dist/`,
		// 		},
		// 	],
		// }),
		deleteFiles({
			targets: [
				...subdirectories.map((subdirectory) => `dist/esm/${subdirectory}/`),
				'dist/cjs/index.d.ts',
				'dist/esm/index.d.ts',
			],
			hook: 'buildEnd',
		}),
	],
});

const cleanupBuild = (format = 'cjs') => ({
	input: `dist/${format}/index.d.ts`,
	output: [{ file: `dist/${format}/index.d.ts`, format }],
	plugins: [
		deleteFiles({
			targets: subdirectories.map((subdirectory) => `dist/${format}/${subdirectory}/`),
			hook: 'buildEnd',
		}),
	],
});

/**
 * Add in plugins to run a script at the end of the build.
 */
const onBuildEnd = (cb = () => {}) => ({
	name: 'closeBundle',
	closeBundle() {
		cb();
		console.log('closeBundle');
	},
});

/**
 * The concat plugin runs at the beginning of the build and we want it to run at
 * the end instead so we use this wrapper plugin which changes the rollup hook
 * used.
 */
const concat = (...args) => {
	const { name, buildStart } = concatOnBuildStart(...args);

	return { name, closeBundle: buildStart };
}

export default [
	{
		input: `${process.cwd()}/lib/index.ts`,
		output: [
			{
				file: `${process.cwd()}/dist/esm/index.min.js`,
				// entryFileNames: 'esm/[name].min.js',
				// dir: `${process.cwd()}/dist/`,
				format: 'esm',
			},
			{
				file: `${process.cwd()}/dist/cjs/index.min.js`,
				// entryFileNames: 'cjs/[name].min.js',
				// dir: `${process.cwd()}/dist/`,
				format: 'cjs',
			},
		],
		plugins: [
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
			}),
			commonjs({ extensions: ['.js', '.ts'] }),
			terser({
				output: {
					comments: false,
				},
			}),
			copy({
				targets: [
					{
						src: `${process.cwd()}/typings/experimental.d.ts`,
						dest: `${process.cwd()}/dist/cjs/`,
						transform: (contents) => contents.toString().replace('\nexport {}\n', ''),
					},
					{
						src: `${process.cwd()}/typings/experimental.d.ts`,
						dest: `${process.cwd()}/dist/esm/`,
						transform: (contents) => contents.toString().replace('\nexport {}\n', ''),
					},
				],
			}),
			concat({
				groupedFiles: [
					{
						files: [
							`${process.cwd()}/dist/cjs/experimental.d.ts`,
							`${process.cwd()}/dist/cjs/index.d.ts`,
						],
						outputFile: `${process.cwd()}/dist/cjs/index.d.ts`,
					},
					{
						files: [
							`${process.cwd()}/dist/esm/experimental.d.ts`,
							`${process.cwd()}/dist/esm/index.d.ts`,
						],
						outputFile: `${process.cwd()}/dist/esm/index.d.ts`,
					},
				],
			}),
			deleteFiles({
				targets: [
					// ...subdirectories.map((subdirectory) => `dist/cjs/${subdirectory}/`),
					// ...subdirectories.map((subdirectory) => `dist/esm/${subdirectory}/`),
					'dist/cjs/experimental.d.ts',
					'dist/esm/experimental.d.ts',
				],
				hook: 'closeBundle',
			}),
		],
	},


	{
		input: `${process.cwd()}/lib/react.ts`,
		output: [
			{
				file: `${process.cwd()}/dist/esm/react.min.js`,
				format: 'esm',
			},
			{
				file: `${process.cwd()}/dist/cjs/react.min.js`,
				format: 'cjs',
			},
		],
		external: [
			'react',
		],
		plugins: [
			alias({
				entries: [
					{ find: '@/', replacement: `${process.cwd()}/lib/` }
				]
			}),
			resolve({
				extensions: ['.ts'],
				// resolveOnly: [
				// 	'react',
				// 	/^\@\/react\/.*/g
				// ]
			}),
			typescript({
				tsconfig: `${process.cwd()}/tsconfig.json`,
			}),
			commonjs({ extensions: ['.js', '.ts'] }),
			terser({
				output: {
					comments: false,
				},
			}),
		],
	},


	// typings('cjs'),
	// typings('esm'),
  // copyConsolidatedTypeDeclaration(),
	// cleanupTypings(),
	// cleanupBuild('cjs'),
	// cleanupBuild('esm'),
];
