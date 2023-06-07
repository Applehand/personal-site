import { error } from '@sveltejs/kit'

export async function load({ params }) {
	try {
		// Dynamically import the post file based on the provided slug parameter
		const post = await import(`../posts/${params.slug}.md`)

		// Return the content and metadata of the post
		return {
			content: post.default,
			meta: post.metadata
		}

	} catch (e) {
		// If an error occurs (e.g., post not found), throw a 404 error with a corresponding message
		throw error(404, `Oops, couldn't find ${params.slug}`)
	}
}
