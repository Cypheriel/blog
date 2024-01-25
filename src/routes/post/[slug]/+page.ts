/** @type {import('./$types').PageServerLoad} */
export async function load({params}) {
    let post = await (await fetch(`https://blog-db.cypheriel.dev/api/posts/post/${params.slug}`)).json()

    return {
        post: post
    }
}