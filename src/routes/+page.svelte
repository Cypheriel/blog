<script>
    import SvelteMarkdown from "svelte-markdown";

    /** @type {import('./$types').PageData} */
    export let data;
</script>

<h1>Cypheriel's Thrilling Tales</h1>
<h3>Posts:</h3>
<ul>
{#each data.posts as post}
    <li>
        <a href="./post/{post.Slug}">{post.Title}</a>
    </li>
{/each}
</ul>