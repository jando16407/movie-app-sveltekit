<script lang="ts">
	import PopularMovies from '../components/PopularMovies.svelte';
	import SearchMovie from '../components/SearchMovie.svelte';
	import { fly } from 'svelte/transition';

	export let data;
</script>

<section in:fly={{ y: 50, duration: 500, delay: 500 }} out:fly={{ duration: 500 }}>
	<SearchMovie />
	<PopularMovies movies={data.movies} />
</section>

<style>
	section {
		margin: 0 1rem;
	}
</style>
