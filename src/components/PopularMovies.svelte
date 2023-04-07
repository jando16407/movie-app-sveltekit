<script lang="ts">
	import MovieCard from './MovieCard.svelte';

	export let movies: any;
</script>

<h1>Popular Movies</h1>
<div class="popular-movies">
	<!-- <h1>movies: {movies.original_title}</h1> -->
	{#each movies as movie}
		<MovieCard {movie} />
	{/each}
</div>

<style>
	.popular-movies {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		grid-column-gap: 3rem;
		grid-row-gap: 2rem;
	}
</style>
