<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<svelte:head>
    <title>Home | Cypheriel's Thrilling Tales</title>
    <meta content="Home | Cypheriel's Thrilling Tales" property="og:title" />
    <meta content="Enter for Cypheriel's Epic™ Blog" property="og:description" />
    <meta content="https://blog.cypheriel.dev/" property="og:url" />
    <meta content="#bb99ff" data-react-helmet="true" name="theme-color" />
</svelte:head>


<div class="w-screen text-center py-5 px-3">
    <h1 class="text-5xl font-bold">Cypheriel's Thrilling Tales</h1>
    <p class="py-4">This is a blog.</p>
</div>

<div class="flex flex-row min-w-fit mx-5 gap-3">
    <input type="text" placeholder="This is not yet functional..." class="input input-bordered input-secondary flex-grow" />
    <div class="tooltip" data-tip="wtf are you doing">
        <button type="submit" class="btn">Search(?)</button>
    </div>
</div>

<div class="px-4 py-4">
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {#each data.posts as post}
            <a class="card card-compact bg-base-300 shadow-xl w-92 hover:outline" href="./post/{post.Slug}">
                <div class="card-body">
                    <h2 class="card-title">
                        {post.Title}
                        <div class="badge">01/24/2024</div>
                    </h2>
                    <p>{post.Description}</p>
                </div>
            </a>
        {/each}
    </div>
</div>