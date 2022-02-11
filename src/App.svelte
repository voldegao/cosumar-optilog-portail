<script>
	import Header from './composants/Header.svelte';
	import Central from './composants/Central.svelte';
	import Maamoura from './composants/Maamoura.svelte';
	import Spots from './composants/Spots.svelte';
	import ChartLeft from './composants/ChartLeft.svelte';
	import ChartRight from './composants/ChartRight.svelte';
</script>

<main >
	<div class="flex flex-col">
		<div>
			<Header></Header>
		</div>
		<div class="flex justify-between px-2">
			<Central></Central>
			<Maamoura></Maamoura>
		</div>
		<div class="px-2">
			<Spots></Spots>
		</div>
		<div class="flex justify-between px-2">
			<ChartLeft></ChartLeft>
			<ChartRight></ChartRight>
		</div>
	</div>
</main>