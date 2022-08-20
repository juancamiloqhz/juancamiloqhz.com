<script>
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '../app.css';

	onMount(() => {
		themeChange(false);
	});
</script>

<Header />
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
	<div class="max-w-3xl mx-auto prose md:prose-lg lg:prose-xl">
		<main>
			<slot />
		</main>
	</div>
</div>
<Footer />
