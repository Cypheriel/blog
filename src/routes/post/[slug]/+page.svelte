<script>
    import SvelteMarkdown from "svelte-markdown";

    /** @type {import('./$types').PageData} */
    export let data;
</script>

<svelte:head>
    <title>{data.post.Title} | Cypheriel's Thrilling Tales</title>
    <meta content="{data.post.Title} | Cypheriel's Thrilling Tales" property="og:title" />
    <meta content="{data.post.Description}" property="og:description" />
    <meta content="https://blog.cypheriel.dev/post/{data.post.Slug}" property="og:url" />
    <meta content="#bb99ff" data-react-helmet="true" name="theme-color" />
</svelte:head>

<a class="absolute btn z-10 m-5 bg-secondary/70 text-white" href="../">Back</a>
<div class="w-screen lg:w-4/5 2xl:w-3/5 mx-auto z-0">
    <article class="z-0 prose prose-lg max-w-full bg-base-300 px-10 pt-20 pb-16 justify-center min-h-screen">
        <h1 class="text-center">{data.post.Title}</h1>
        <SvelteMarkdown source={data.post.Content} />
    </article>
</div>