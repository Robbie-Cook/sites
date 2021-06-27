const rollupTypescript = require('@rollup/plugin-typescript');
const rollupScss = require('rollup-plugin-scss');
import url from '@rollup/plugin-url';


export default {
  input: 'src/index.tsx',
  output: {
		dir: 'dist/',
		format: 'cjs'
  },
	plugins: [
		rollupTypescript({ tsconfig: false, allowSyntheticDefaultImports: true, jsx: "react" }),
		rollupScss({ output: 'dist/index.css',}),
		url()
	]
};