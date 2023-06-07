import { json } from '@sveltejs/kit'

// Function to retrieve all post data
async function getPosts() {
	let posts = []

	// Find all post file paths using a glob pattern
	const postPaths = import.meta.glob('/src/routes/posts/*.md', { eager: true })

	// Iterate over each post file path
	for (const path in postPaths) {
		const file = postPaths[path]
		const slug = path.split('/').at(-1)?.replace('.md', '')

		// Get metadata from the post file
        const metadata = file.metadata

        // Create a post object with metadata and slug
        const post = { ...metadata, slug }

        // Only add the post to the array if it's published
        post.published && posts.push(post)
	}

	// Sort the posts based on their date in descending order
	posts = posts.sort((first, second) =>
    	new Date(second.date).getTime() - new Date(first.date).getTime()
	)

	// Return the array of posts
	return posts
}

// Handler function for GET request
export async function GET() {
	// Retrieve all post data using the getPosts function
	const posts = await getPosts()

	// Return the posts as JSON
	return json(posts)
}
