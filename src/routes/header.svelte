<script>
</script>

<nav>
    <a href="/" class="title">
        <b>applehand's orchard</b>
    </a>

    <ul class="links">
        <li>
            <a href="/interests">interests</a>
        </li>
        <li>
            <a href="/projects">projects</a>
        </li>
        <li>
            <a href="/thinkings">thinkings</a>
        </li>
        <li>
            <a href="/stuff">stuff</a>
        </li>
        <li id="rss">
            <a href="/rss.xml" target="_blank">rss</a>
        </li>
    </ul>
    
    <button>theme toggle</button>
</nav>

<style>
    nav {
        padding-block: var(--size-7);
    }

    .links {
        margin-block: var(--size-7);
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    @media (min-width: 760px) {
        nav {
            display: flex;
            justify-content: space-between;
        }

        .links {
            display: flex;
            gap: var(--size-7);
            margin-block: 0;
        }

        #rss {
        margin-left: 5rem;
        }
    }

</style>