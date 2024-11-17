<script>
    const posts = import.meta.glob('$lib/posts/*.svx', { eager: true });

    // Searching is broken :(
    let searchQuery = "";
    async function search() {}
    async function onEdit() {}
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
    <input id="search-box" type="text" placeholder="Search blog posts... (This doesn't work anymore -_-)"
           class="input input-bordered w-full max-w-screen-xl" bind:value={searchQuery} oninput={onEdit}
           onsubmit={search}/>
    <button type="submit" class="btn btn-primary" onclick={search}>Search</button>
</form>

<div class="px-4 py-8">
    <div class="grid gap-4 grid-cols-1 lg:grid-cols-[repeat(auto-fill,28rem)] justify-center justify-items-center">
        {#each Object.values(posts) as post}
            <a class="card card-compact bg-base-300 shadow-xl hover:outline w-full" href="./post/{post.metadata.slug}">
                <div class="card-body">
                    <h2 class="card-title">
                        {post.metadata.title}
                    </h2>
                    <div class="flex flex-col gap-2 -mx-1.5">
                        <div class="badge">Published {new Date(post.metadata.published * 1000).toLocaleDateString([], {
                            hour: "2-digit",
                            minute: "2-digit"
                        })}</div>
                        {#if post.metadata.published !== post.metadata.edited}
                            <div class="badge">Edited {new Date(post.metadata.edited * 1000).toLocaleDateString([], {
                                hour: "2-digit",
                                minute: "2-digit"
                            })}</div>
                        {/if}
                    </div>
                    <p>{post.metadata.description}</p>
                </div>
            </a>
        {/each}
    </div>
</div>