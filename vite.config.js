import Inspect from 'vite-plugin-inspect';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig(() => {
	base: '/system-ekspertowy/';

	return {
		plugins: [
			Inspect(),
			ViteImageOptimizer({
				png: {
					quality: 80,
				},
				jpg: {
					quality: 80,
				},
			}),
		],
		build: {
			rollupOptions: {
				input: {
					main: resolve(__dirname, 'index.html'),
				},
			},
		},
	};
});
