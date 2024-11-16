/** @type {import('./$types').PageServerLoad} */
export async function load({params}) {
    let post = await import(`$lib/posts/${params.slug}.svx`)

    return {
        metadata: post.metadata,
        content: post
    }
}