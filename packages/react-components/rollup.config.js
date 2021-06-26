const rollupTypescript = require('@rollup/plugin-typescript');
const rollupScss = require('rollup-plugin-scss');
const rollupSvg = require('rollup-plugin-svg');


export default {
  input: 'src/index.tsx',
  output: {
		dir: 'dist/',
		format: 'cjs'
  },
	plugins: [
		rollupTypescript({ tsconfig: false, allowSyntheticDefaultImports: true, jsx: "react" }),
		rollupScss({ output: 'dist/index.css',}),
		rollupSvg()
	]
};