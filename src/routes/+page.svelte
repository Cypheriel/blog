<script>
    /** @type {import('./$types').PageData} */
    export let data;

    export let posts = data.posts;
    let searchQuery = "";

    async function search() {
        if (!searchQuery)
            return;

        let result = await fetch(`https://blog-db.cypheriel.dev/api/posts/search?q=${searchQuery}`);

        if (!result.ok)
            return;

        posts = await (result).json();
    }

    async function onEdit() {
        if (searchQuery === "") {
            posts = data.posts;
        }
    }
</script>

<svelte:head>
    <title>Home | Cypheriel's Thrilling Tales</title>
    <meta property="og:title" content="Cypheriel's Thrilling Tales"/>
    <meta property="og:description" content="Enter for Cypheriel's Epic™ blog!"/>
    <meta property="og:image" content="https://blog.cypheriel.dev/assets/logo_outline.png"/>
    <meta property="og:url" content="https://blog.cypheriel.dev/"/>
    <meta name="theme-color" content="#bb99ff" data-react-helmet="true"/>
</svelte:head>


<div class="w-screen text-center py-5 px-3">
    <h1 class="text-5xl font-bold">Cypheriel's Thrilling Tales</h1>
    <p class="py-4">This is a blog.</p>
</div>

<form class="flex justify-center min-w-fit mx-5 gap-3">
    <input id="search-box" type="text" placeholder="Search blog posts..."
           class="input input-bordered w-full max-w-screen-xl" bind:value={searchQuery} on:input={onEdit}
           on:submit={search}/>
    <button type="submit" class="btn btn-primary" on:click={search}>Search</button>
</form>

<div class="px-4 py-8">
    <div class="grid gap-4 grid-cols-1 lg:grid-cols-[repeat(auto-fill,28rem)] justify-center justify-items-center">
        {#each posts as post}
            <a class="card card-compact bg-base-300 shadow-xl hover:outline w-full" href="./post/{post.Slug}">
                <div class="card-body">
                    <h2 class="card-title">
                        {post.Title}
                    </h2>
                    <div class="flex flex-col md:flex-row gap-2 -mx-1.5">
                        <div class="badge">Published {new Date(post.PublishDate * 1000).toLocaleDateString([], {
                            hour: "2-digit",
                            minute: "2-digit"
                        })}</div>
                        {#if post.PublishDate !== post.LastEditDate}
                            <div class="badge">Edited {new Date(post.LastEditDate * 1000).toLocaleDateString([], {
                                hour: "2-digit",
                                minute: "2-digit"
                            })}</div>
                        {/if}
                    </div>
                    <p>{post.Description}</p>
                </div>
            </a>
        {/each}
    </div>
</div>