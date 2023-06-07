<script>
    import { setContext } from 'svelte';
    import Posts from "../../lib/posts.svelte";

    setContext('currentPage', 'projects')
</script>

<Posts />


