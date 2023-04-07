<script lang="ts">
	export let movie: any;
</script>

<div class="movie-card">
	<a data-sveltekit-noscroll href="/movie/{movie.id}">
		<img src="https://image.tmdb.org/t/p/w500/{movie.poster_path}" alt={movie.title} />
	</a>
	<div class="description">
		<h3>{movie.title}</h3>
		<p>{movie.release_date}</p>
	</div>
</div>

<style>
	img {
		width: 100%;
		height: 100%;
		max-height: 50vh;
		object-fit: contain;
		border-radius: 1rem;
		margin-bottom: 1rem;
	}
	.movie-card {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
	@media screen and (min-width: 780px) {
		.movie-card {
			max-width: 50vw;
		}
	}
</style>
