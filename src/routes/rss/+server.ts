async function getPosts(): Promise<object[]> {
    return await fetch("https://blog-db.cypheriel.dev/api/posts")
        .then(function (response) {
            return response.json();
        }).catch(function (error) {
            console.error(`Error fetching blog posts: ${error}`)
        })
}

export async function GET() {
    return new Response(
        `
<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="https://www.w3.org/2005/Atom">
    <channel>
        <atom:link href="https://blog.cypheriel.dev/rss" rel="self type="application/rss+xml" />
        <title>Cypheriel's Thrilling Tales</title>
        <link>https://blog.cypheriel.dev/</link>
        <description>Cypheriel's amazingly epic general blog + tech.</description>
        ${(await getPosts()).map((post) => {
            return `
        <item>
            <guid>https://blog.cypheriel.dev/post/${post.Slug}</guid>
            <link>https://blog.cypheriel.dev/post/${post.Slug}</link>
            <title>${post.Title}</title>
            <description>${post.Description}</description>
            <pubDate>${new Date(post.PublishDate * 1000).toUTCString()}</pubDate>
        </item>
            `.trim()
        }).join("")}
    </channel>
</rss>
`.trim(),
        {
            headers: {
                "Content-Type": "application/rss+xml"
            }
        }
    )
}