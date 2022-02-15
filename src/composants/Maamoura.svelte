<script>
    import TimePlot from "carbon-pictograms-svelte/lib/TimePlot.svelte";
    import DeliveryTruck from "carbon-pictograms-svelte/lib/DeliveryTruck.svelte";
    import ChevronUp32 from "carbon-icons-svelte/lib/ChevronUp32";
    import ChevronDown32 from "carbon-icons-svelte/lib/ChevronDown32";
</script>

<div class="w-1/2">
    <h2 class="text-center font-medium text-2xl text-slate-500 mb-1">MAAMOURA</h2>
    <div class="flex">
        <h5 class="w-1/2 text-center font-bold mb-4">Performance Jour -1</h5>
        <h5 class="w-1/2 text-center font-bold mb-4">Performance Jour 1</h5>
    </div>
    <div class="flex justify-between">
        <span class="mx-1 w-1/4 h-28 border shadow-md rounded-md bg-white flex flex-col border-dashed">
            <div class="bg-teal-50 p-2 flex justify-between items-center">
                <DeliveryTruck />
                <span class="flex text-2xl text-green-500">
                    <b>11</b>
                    <ChevronUp32 />
                </span>
            </div>
            <span class="text-center font-bold text-sm p-1">Nombre de Camions</span>
        </span>
        <span class="mx-1 w-1/4 h-28 border shadow-md rounded-md bg-white flex flex-col border-dashed">
            <div class="bg-teal-50 p-2 flex justify-between items-center">
                <TimePlot />
                <span class="flex text-2xl text-green-500">
                    <b>30%</b>
                    <ChevronUp32 />
                </span>
            </div>
            <span class="text-center font-bold text-sm p-1">Taux de Service</span>
        </span>
        <span class="mx-1 w-1/4 h-28 border shadow-md rounded-md bg-white flex flex-col border-dashed">
            <div class="bg-teal-50 p-2 flex justify-between items-center">
                <DeliveryTruck />
                <span class="flex text-2xl text-red-500">
                    <b>8</b>
                    <ChevronDown32 />
                </span>
            </div>
            <span class="text-center font-bold text-sm p-1">Nombre de Camions</span>
        </span>
        <span class="mx-1 w-1/4 h-28 border shadow-md rounded-md bg-white flex flex-col border-dashed">
            <div class="bg-teal-50 p-2 flex justify-between items-center">
                <TimePlot />
                <span class="flex text-2xl text-red-500">
                    <b>-2%</b>
                    <ChevronDown32 />
                </span>
            </div>
            <span class="text-center font-bold text-sm p-1">Taux de Service</span>
        </span>
    </div>
</div>