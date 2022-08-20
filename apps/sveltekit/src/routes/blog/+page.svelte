<script lang="ts">
	// import PostsList from '$lib/components/PostsList.svelte'
	// import Pagination from '$lib/components/Pagination.svelte'
	import { siteDescription } from '$lib/config';

	export let data: any;
	// console.log(data);
</script>

<h1>Hello from blog</h1>

{JSON.stringify(data, null, 2)}
