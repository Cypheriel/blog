<script>
    import SvelteMarkdown from "svelte-markdown";

    /** @type {import('./$types').PageData} */
    export let data;

    const content = data.post.Content
</script>

<h1>{data.post.Title}</h1>
<SvelteMarkdown source={data.post.Content} />