<script>
    import TimePlot from "carbon-pictograms-svelte/lib/TimePlot.svelte";
    import DeliveryTruck from "carbon-pictograms-svelte/lib/DeliveryTruck.svelte";
    import ChevronUp32 from "carbon-icons-svelte/lib/ChevronUp32";
    import ChevronDown32 from "carbon-icons-svelte/lib/ChevronDown32";

    import {getCentralPerf,centralPerf} from "../apiStore.js";
    import { onMount } from 'svelte';
    
    onMount(async () => {
       const interval =  setInterval(getCentralPerf,60000);
       getCentralPerf()
       return () => clearInterval(interval);
	});
    let q 
    centralPerf.subscribe((value) => {
        console.log(value)
        q = value
    });
</script>




<div class="w-1/2">
    <h2 class="text-center font-medium text-2xl text-slate-500 mb-1">CENTRAL</h2>
    <div class="flex">
        <h5 class="w-1/2 text-center font-bold mb-4">Performance Jour -1</h5>
        <h5 class="w-1/2 text-center font-bold mb-4">Performance Jour 1</h5>
    </div>
    <div class="flex justify-between">
        <span class="mx-1 w-1/4 h-28 border shadow-md rounded-md bg-white flex flex-col">
            <div class="bg-teal-50 p-2 flex justify-between items-center">
                <DeliveryTruck />
                {#if q.yesterday_camions>q.daybefore_camions}
                    <span class="flex text-2xl text-green-500">
                        <b>{q.yesterday_camions}</b>
                        <ChevronUp32 />
                    </span>
                {:else}
                    <span class="flex text-2xl text-red-500">
                        <b>{q.yesterday_camions}</b>
                        <ChevronDown32 />
                    </span>
                {/if}
            </div>
            <span class="text-center font-bold text-sm p-1">Nombre de Camions</span>
        </span>
        <span class="mx-1 w-1/4 h-28 border shadow-md rounded-md bg-white flex flex-col">
            <div class="bg-teal-50 p-2 flex justify-between items-center">
                <TimePlot />
                {#if q.yesterday_taux_service>q.daybefore_taux_service}
                    <span class="flex text-2xl text-green-500">
                        <b>{q.yesterday_taux_service}%</b>
                        <ChevronUp32 />
                    </span>
                {:else}
                    <span class="flex text-2xl text-red-500">
                        <b>{q.yesterday_taux_service}%</b>
                        <ChevronDown32 />
                    </span>
                {/if}
            </div>
            <span class="text-center font-bold text-sm p-1">Taux de Service</span>
        </span>
        <span class="mx-1 w-1/4 h-28 border shadow-md rounded-md bg-white flex flex-col">
            <div class="bg-teal-50 p-2 flex justify-between items-center">
                <DeliveryTruck />
                {#if q.today_camions>q.yesterday_camions}
                    <span class="flex text-2xl text-green-500">
                        <b>{q.today_camions}</b>
                        <ChevronUp32 />
                    </span>
                {:else}
                    <span class="flex text-2xl text-red-500">
                        <b>{q.today_camions}</b>
                        <ChevronDown32 />
                    </span>
                {/if}
            </div>
            <span class="text-center font-bold text-sm p-1">Nombre de Camions</span>
        </span>
        <span class="mx-1 w-1/4 h-28 border shadow-md rounded-md bg-white flex flex-col">
            <div class="bg-teal-50 p-2 flex justify-between items-center">
                <TimePlot />
                {#if q.today_taux_service>q.yesterday_taux_service}
                    <span class="flex text-2xl text-green-500">
                        <b>{q.today_taux_service}%</b>
                        <ChevronUp32 />
                    </span>
                {:else}
                    <span class="flex text-2xl text-red-500">
                        <b>{q.yesterday_taux_service}%</b>
                        <ChevronDown32 />
                    </span>
                {/if}
               
            </div>
            <span class="text-center font-bold text-sm p-1">Taux de Service</span>
        </span>
    </div>
</div>