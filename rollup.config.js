/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import summary from 'rollup-plugin-summary';
import terser from '@rollup/plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';

export default {
  input: 'psychopomp-dance.js',
  output: [
    {
      file: 'dist/psychopomp-dance.js',
      format: 'es',
      sourcemap: true
    },
    {
      file: 'dist/psychopomp-dance.umd.js',
      format: 'umd',
      name: 'PsychopompDance',
      sourcemap: true
    }
  ],
  onwarn(warning) {
    if (warning.code !== 'THIS_IS_UNDEFINED') {
      console.error(`(!) ${warning.message}`);
    }
  },
  plugins: [
    replace({preventAssignment: false, 'Reflect.decorate': 'undefined'}),
    resolve(),
    /**
     * This minification setup serves the static site generation.
     * For bundling and minification, check the README.md file.
     */
    terser({
      ecma: 2020,
      module: true,
      warnings: true,
    }),
    summary(),
  ],
};
