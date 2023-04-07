<script>
	import { fly } from 'svelte/transition';

	export let data;
</script>

<div
	class="movie-details"
	in:fly={{ y: 50, duration: 500, delay: 500 }}
	out:fly={{ duration: 500 }}
>
	<div class="img-container">
		<img
			src="https://image.tmdb.org/t/p/original/{data.movieDetails.backdrop_path}"
			alt={data.movieDetails.title}
		/>
	</div>
	<div class="txt-container">
		<h1>{data.movieDetails.title}</h1>
		<p class="overview">{data.movieDetails.overview}</p>
		<p>
			<span>Release date:</span>
			{data.movieDetails.release_date} <br />
			<span>Budget:</span>
			${data.movieDetails.budget} <br />
			<span>Rating:</span>
			{data.movieDetails.vote_average} <br />
			<span>Runtime:</span>
			{data.movieDetails.runtime} mins <br />
		</p>
	</div>
</div>

<style>
	.img-container {
		width: 100%;
	}
	img {
		width: 100%;
		border-radius: 1rem;
	}
	.movie-details {
		margin: 2rem 20%;
	}
	span {
		font-weight: bold;
	}
</style>
