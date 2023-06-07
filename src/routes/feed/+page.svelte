<script>
    const feeds = ['http://www.newyorker.com/feed/tech',
    'https://rss.nytimes.com/services/xml/rss/nyt/Technology.xml',
    'http://www.historytoday.com/feed/rss.xml',
    'https://www.smithsonianmag.com/rss/science-nature/',
    'https://www.smithsonianmag.com/rss/travel/']
</script>

<div>
<p>The news feed isn't done yet. No peeking. I'm not done yet!</p>
<p>(Here's the feeds though)</p>
</div>

{#each feeds as feed}
    <p>{feed}</p>
{/each}

<style>
div {
    margin-bottom: 1rem;
}
</style>