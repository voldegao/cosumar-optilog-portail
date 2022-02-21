<script>
    export let quai
    export let matricule
    export let time
    export let type
    export let objectif
</script>
{#if type == 'maamoura'}
    {#if matricule!=null}
        <span class="flex-1 mx-1 h-40 border shadow-sm rounded-md bg-white relative rotcont border-dashed">
            <div class="relative z-20 h-full flex flex-col justify-between items-center">
                {#if objectif<time}
                    <span class="text-7xl text-red-400 pt-4">{quai}</span>
                    <span class="flex flex-col text-center font-bold bg-red-300 w-full">
                        <span>{time} Min</span>
                        <span>{matricule}</span>
                    </span>
                {:else}
                    <span class="text-7xl text-green-400 pt-4">{quai}</span>
                    <span class="flex flex-col text-center font-bold bg-green-300 w-full">
                        <span>{time} Min</span>
                        <span>{matricule}</span>
                    </span>
                {/if}
            </div>
        </span>
    {:else}
        <span class="flex-1 mx-1 h-40 border shadow-sm rounded-md bg-white relative rotcont border-dashed">
            <div class="relative z-20 h-full flex flex-col justify-center items-center">
                <span class="text-6xl">{quai}</span>
            </div>
            <span class="absolute bg-blue-100 rot"> </span>
        </span>
    {/if}
{:else}
    {#if matricule!=null}
        <span class="flex-1 mx-1 h-40 border shadow-sm rounded-md bg-white relative rotcont">
            <div class="relative z-20 h-full flex flex-col justify-between items-center">
               {#if objectif<time}
                    <span class="text-7xl text-red-400 pt-4">{quai}</span>
                    <span class="flex flex-col text-center font-bold bg-red-300 w-full">
                        <span>{time} Min</span>
                        <span>{matricule}</span>
                    </span>
               {:else}
                    <span class="text-7xl text-green-400 pt-4">{quai}</span>
                    <span class="flex flex-col text-center font-bold bg-green-300 w-full">
                        <span>{time} Min</span>
                        <span>{matricule}</span>
                    </span>
               {/if}
            </div>
        </span>
    {:else}
        <span class="flex-1 mx-1 h-40 border shadow-sm rounded-md bg-white relative rotcont">
            <div class="relative z-20 h-full flex flex-col justify-center items-center">
                <span class="text-6xl">{quai}</span>
            </div>
            <span class="absolute bg-red-100 rot"> </span>
        </span>
    {/if}
{/if}

<style>
    .rot{
        height: 159px;
        width: 87%;
        top: 0;
        right: 10px;
        transform: skew(217deg);
        z-index: 10!important;
    }
    .rotcont{
        overflow: hidden;
    }
</style>