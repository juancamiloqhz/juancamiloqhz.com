import { error, type RequestEvent } from '@sveltejs/kit';
import { postsPerPage } from '$lib/config';
import fetchPosts from '$lib/assets/fetchPosts';

export const GET = async ({ url }: RequestEvent) => {
	try {
		/**
		 * These let you add query params to change what's retrieved from the endpoint, e.g.,
		 * /api/posts.json?offset=10&limit=20
		 **/
		const params = new URLSearchParams(url.searchParams);

		const options = {
			offset: Number(params.get('offset') || '0'),
			limit: Number(params.get('limit')) || postsPerPage
		};

		/**
		 * Endpoint uses a utility function for retrieving the posts, because without that,
		 * query parameters wouldn't result in static routes being generated at build time.
		 * It's also a little cleaner in the code.
		 */
		const { posts } = await fetchPosts(options);

		return new Response(JSON.stringify(posts), {
			status: 200,
			headers: {
				'content-type': 'application/json'
			}
		});
	} catch (err) {
		throw error(500, `Could not fetch posts. ${err}`);
	}
};
