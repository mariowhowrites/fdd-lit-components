/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import summary from 'rollup-plugin-summary';

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
  plugins: [
    resolve(),
    terser({
      ecma: 2020,
      module: true,
      warnings: true,
    }),
    summary()
  ]
};
