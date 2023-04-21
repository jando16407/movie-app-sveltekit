export async function load({ fetch }) {
    const res = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=0641839ed7826e8056b2c6a02e85315f&language=en-US&page=1`
    );
    const data = await res.json();
    if (res.ok) {
        return {
            movies: data.results
        };
    }
}