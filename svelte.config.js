import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess'
import seqPreprocessor from 'svelte-sequential-preprocessor'
import { preprocessThrelte } from '@threlte/preprocess'
import { mdsvex } from 'mdsvex'

/** @type {import('mdsvex').mdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md']
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	kit: {
		adapter: adapter()
	},
	preprocess: [seqPreprocessor([preprocess(), preprocessThrelte()]), mdsvex(mdsvexOptions)]
};

export default config;
