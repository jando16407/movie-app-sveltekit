/** @type {import('@sveltejs/adapter-vercel').Config} */
export const config = {
    runtime: 'edge'
};

export async function load({ fetch, params }) {
    const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_API}&language=en-US&query=${params.searchID}&page=1&include_adult=false`
    );
    const data = await res.json();
    if (res.ok) {
        return {
            movies: data.results,
            slug: params.searchID
        };
    }
}