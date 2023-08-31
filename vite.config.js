import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	base: '/caco/',
	kit: {
		paths: {
			base: '/caco'
		}
	},
	plugins: [sveltekit()]
});
