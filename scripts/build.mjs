import { build } from 'esbuild';
import { mkdir, copyFile, cp } from 'node:fs/promises';
await build({ entryPoints: ['src/hero.js'], bundle: true, format: 'esm', minify: true, target: 'es2020', outfile: 'hero.js', legalComments: 'eof' });
await mkdir('dist', { recursive: true });
for (const file of ['index.html', 'hero.js']) await copyFile(file, `dist/${file}`);
await cp('assets', 'dist/assets', { recursive: true });
