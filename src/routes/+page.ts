/** @type {import('./$types').PageServerLoad} */
export async function load({params}) {
    return {
        posts: await fetch("https://blog-db.cypheriel.dev/api/posts")
            .then(function (response) {
                return response.json();
            }).catch(function (error) {
                console.error(`Error fetching blog posts: ${error}`)
            })
    }
}