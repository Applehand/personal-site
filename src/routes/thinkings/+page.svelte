<script>
    import Posts from "../../lib/posts.svelte";
    import { setContext } from 'svelte';

    setContext('currentPage', 'thinkings')

</script>

<Posts />
