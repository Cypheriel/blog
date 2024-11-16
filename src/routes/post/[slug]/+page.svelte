<script>
    /** @type {{ data: import('./$types').PageData}} */
    let {data} = $props()
    let metadata = data.metadata
    let content = data.content
</script>

<svelte:head>
    <title>{metadata.title} | Cypheriel's Thrilling Tales</title>
    <meta property="og:site_name" content="Cypheriel's Thrilling Tales"/>
    <meta property="og:title" content="{metadata.title}"/>
    <meta property="og:description" content="{metadata.description}"/>
    {#if (!metadata.image)}
        <meta property="og:image" content="https://blog.cypheriel.dev/assets/logo_outline.png"/>
    {/if}
    <meta property="og:image" content="https://blog.cypheriel.dev/assets/logo_outline.png"/>
    <meta property="og:url" content="https://blog.cypheriel.dev/post/{metadata.slug}"/>
    <meta property="theme-color" content="#bb99ff" data-react-helmet="true"/>
</svelte:head>

<button class="absolute btn btn-primary z-10 m-5" onclick={() => history.back()}>Back</button>
<div class="w-screen lg:w-4/5 2xl:w-3/5 mx-auto z-0">
    <article class="z-0 prose prose-lg max-w-full bg-base-300 px-10 pt-20 pb-16 justify-center min-h-screen">
        <h1 class="text-center">{metadata.title}</h1>
        <svelte:component this={content.default}/>
    </article>
</div>
