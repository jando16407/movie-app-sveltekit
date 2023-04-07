<script>
	import MovieCard from '../../../components/MovieCard.svelte';
	import SearchMovie from '../../../components/SearchMovie.svelte';
	import { fly } from 'svelte/transition';
	export let data;
</script>

{#if data.movies.length > 0}
	<div
		class="search-result"
		in:fly={{ y: 200, duration: 500, delay: 500 }}
		out:fly={{ y: 0, duration: 500 }}
	>
		<h1>Search Result</h1>
		<div class="searched-movies">
			<!-- <h1>movies: {movies.original_title}</h1> -->
			{#each data.movies as movie}
				<MovieCard {movie} />
			{/each}
		</div>
	</div>
{:else}
	<div
		class="search-error"
		in:fly={{ y: 200, duration: 500, delay: 500 }}
		out:fly={{ y: 0, duration: 500 }}
	>
		<h1>
			"{data.slug}" cannot be found! Try searching again!
		</h1>
		<SearchMovie />
	</div>
{/if}

<style>
	.search-result {
		margin: 0 1rem;
	}
	.searched-movies {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
		grid-column-gap: 2rem;
		grid-row-gap: 2rem;
	}
	.search-error {
		margin: 0 1rem;
	}
	@media screen and (min-width: 780px) {
		.searched-movies {
			grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		}
	}
</style>
