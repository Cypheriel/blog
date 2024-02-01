<script>
    import SvelteMarkdown from "svelte-markdown";

    /** @type {import('./$types').PageData} */
    export let data;
</script>

<svelte:head>
    <title>{data.post.Title} | Cypheriel's Thrilling Tales</title>
    <meta property="og:site_name" content="Cypheriel's Thrilling Tales" />
    <meta property="og:title" content="{data.post.Title}" />
    <meta property="og:description" content="{data.post.Description}" />
    {#if (!data.post.Image)}
        <meta property="og:image" content="https://blog.cypheriel.dev/assets/logo_outline.png"/>
    {/if}
    <meta property="og:image" content="https://blog.cypheriel.dev/assets/logo_outline.png"/>
    <meta property="og:url" content="https://blog.cypheriel.dev/post/{data.post.Slug}" />
    <meta property="theme-color" content="#bb99ff" data-react-helmet="true" />
</svelte:head>

<a class="absolute btn btn-primary z-10 m-5" href="../">Back</a>
<div class="w-screen lg:w-4/5 2xl:w-3/5 mx-auto z-0">
    <article class="z-0 prose prose-lg max-w-full bg-base-300 px-10 pt-20 pb-16 justify-center min-h-screen">
        <h1 class="text-center">{data.post.Title}</h1>
        <SvelteMarkdown source={data.post.Content} />
    </article>
</div>
