<script>
    import { onMount } from 'svelte';
    import { formatDate } from '$lib/utils';
    import { getContext } from 'svelte';

    // Get the current page context from the parent component
    const context = getContext('currentPage')

    // Initialize an empty array to store the posts
    let posts = [];

    // Perform actions when the component is mounted
    onMount(async () => {
        // Fetch the posts data from the API
        const response = await fetch('api/posts');
        posts = await response.json();
    });

</script>

<h1>{context}</h1>

<section>
    <ul class="posts">
        {#each posts as post}
            {#if post.categories.includes(context)}
            <li class="post">
                <a href={post.slug} class="title">{post.title}</a>
                <p class="date">{formatDate(post.date)}</p>
                <p class="description">{post.description}</p>
            </li>
            {/if}
        {/each}
    </ul>
</section>

<style>
    .posts {
        display: grid;
        gap: 2rem;
    }

    .post {
        max-inline-size: var(--size-content-3);
    }

    .post:not(:last-child) {
        border-bottom: 1px solid var(--border);
        padding-bottom: var(--size-7);
    }

    .title {
        font-size: var(--font-size-fluid-2);
        text-transform: capitalize;
        margin-top: 2rem;
    }

    .date {
        color: var(--text-2);
    }

    .description {
        margin-top: var(--size-3);
    }
</style>
