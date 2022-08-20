import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	try {
		const post = await import(`../../../lib/posts/${params.slug}.md`);

		return {
			PostContent: post.default.render().html,
			meta: { ...post.metadata, slug: params.slug }
		};
	} catch (err) {
		console.error(err);
		throw error(404, 'Not found');
	}
};
