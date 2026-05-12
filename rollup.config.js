import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss'; // If handling CSS
// import { terser } from 'rollup-plugin-terser'; // For minification

import packageJson from './package.json' with { type: 'json' };

export default {
  input: 'src/index.ts', // Your library's entry point
  output: [
    {
      file: "dist/index.cjs.js",
      format: "cjs",
      sourcemap: true,
    },
    {
      file: "dist/index.esm.js",
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript({ tsconfig: './tsconfig.json', exclude: ["**/*.test.tsx", "**/*.stories.tsx"] }),
    postcss({ // Example for handling CSS files
      extract: 'styles.css', // Extracts CSS to a single file
      minimize: true,
    }),
    // terser(), // Uncomment for production builds to minify
  ],
  external: ['react', 'react-dom'], // Externalize peer dependencies
};