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
<feed xmlns="https://www.w3.org/2005/Atom">
    <title>Cypheriel's Thrilling Tales</title>
    <link>https://blog.cypheriel.dev/</link>
    <description>Cypheriel's amazingly epic general blog + tech.</description>
    ${(await getPosts()).map((post) => {
        return `
    <entry>
        <id>https://blog.cypheriel.dev/post/${post.Slug}</id>
        <link>https://blog.cypheriel.dev/post/${post.Slug}</link>
        <title>${post.Title}</title>
        <summary>${post.Description}</summary>
        <published>${new Date(post.PublishDate * 1000).toISOString()}</published>
        <updated>${new Date(post.LastEditDate * 1000).toISOString()}</updated>
    </entry>
        `.trim()
    }).join("")}
</feed>
`.trim(),
        {
            headers: {
                "Content-Type": "application/xml"
            }
        }
    )
}