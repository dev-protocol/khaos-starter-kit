import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'

export default [
	{
		input: 'dist/index.js',
		output: [
			{
				file: 'bundled/index.js',
				format: 'cjs',
			},
		],
		plugins: [nodeResolve({ preferBuiltins: true }), commonjs(), terser()],
	},
]
