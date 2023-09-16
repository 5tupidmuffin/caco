<script>
	import { dev } from '$app/environment';
	import App from '../components/App/App.svelte';

	if (typeof navigator !== 'undefined' && 'serviceWorker' in navigator) {
		navigator.serviceWorker.register('service-worker.js', {
			scope: '/caco',
			type: dev ? 'module' : 'classic'
		});
	}
</script>

<App />

<style>
	:global(body, html) {
		height: 100%;
		width: 100%;
		background-color: #252422;
		margin: 0;
		padding: 0;
	}
</style>
