<script lang="ts">
	import { page } from '$app/stores';
	export let href: string | null = null;
	export let title: string | null = null;
	export let external: string | null = null;
</script>

{#if external}
	<li><a href={external} {title} rel="external"><slot /></a></li>
{:else}
	<li>
		<a
			{href}
			{title}
			sveltekit:prefetch
			class="no-underline p-1 sm:px-3 sm:py-2 rounded-lg dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-800 transition-all font-normal text-gray-600 dark:text-gray-400"
			class:active={$page.url.pathname === href}
		>
			<slot />
		</a>
	</li>
{/if}

<style>
	.active {
		@apply font-semibold text-gray-800 dark:text-gray-200;
	}
</style>
