export async function load({ fetch, params }) {
    const res = await fetch(
        `https://api.themoviedb.org/3/movie/${params.movieID}?api_key=0641839ed7826e8056b2c6a02e85315f&language=en-US`
    );
    const data = await res.json();
    if (res.ok) {
        return {
            movieDetails: data
        };
    }
}