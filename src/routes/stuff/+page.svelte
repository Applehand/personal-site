<script>
    import Posts from "../../lib/posts.svelte";
    import { setContext } from 'svelte';

    setContext('currentPage', 'stuff')

</script>

<Posts />
