<script>
    import { onMount } from 'svelte';
    import { formatDate } from '$lib/utils';
    import { getContext } from 'svelte';

    const context = getContext('currentPage')

    let posts = [];

    onMount(async () => {
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
        font-size: var(--font-size-fluid-3);
        text-transform: capitalize;
    }

    .date {
        color: var(--text-2);
    }

    .description {
        margin-top: var(--size-3);
    }
</style>
