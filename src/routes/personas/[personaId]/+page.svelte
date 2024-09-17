<script>
    import {tempPersonas} from "$lib/personas.js";

    let allOrRecentTab = 'all'
    let allOrRecentItems = tempPersonas

    let activePersona = 'Marine Insurance'
    $: allOrRecentItems = allOrRecentTab === 'all'
        ? tempPersonas
        : shuffleArray([...tempPersonas]);

    $: if (allOrRecentTab) {
        activePersona = allOrRecentItems[0].name
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
</script>

<div class="pt-[80px] w-full h-full flex gap-6">
    <div class="w-[115px] h-full">

    </div>
    <div class="w-[40%] h-full rounded-2xl bg-blue-100 pt-5">
        <h1 class="semibold text-[26px] pb-5 border-b-2 border-b-gray-400 pl-6">Personas</h1>
        <div class="flex flex-col p-6 gap-5">
            <div class="flex gap-10">
                <button class="text-xl font-semibold pb-1.5 cursor-pointer {allOrRecentTab === 'all' ? 'border-b-[3px] border-b-green-500' : 'pb-[9px]'}" on:click={() => allOrRecentTab = 'all'}>All</button>
                <button class="text-xl font-semibold pb-1.5 cursor-pointer {allOrRecentTab === 'recent' ? 'border-b-[3px] border-b-green-500' : 'pb-[9px]'}" on:click={() => allOrRecentTab = 'recent'}>Recent</button>
            </div>
            <div class="flex flex-col gap-3">
                {#each allOrRecentItems as persona}
                    <button on:click={() => activePersona = persona.name} class="w-full flex p-4 gap-4 rounded-lg transition-colors cursor-pointer relative items-center hover:bg-white {activePersona === persona.name ? 'bg-white' : ''}">
                        {#if activePersona === persona.name}
                            <div class="absolute -ml-4 h-[50%] rounded-lg bg-gr w-[3px] bg-green-500 transition-colors"></div>
                        {/if}
                        <img src="/logo.png" class="h-12 w-12 ml-2">
                        <div class="flex flex-col gap-1 -mt-[3px]">
                            <p class="text-xl">{persona.name}</p>
                            <p class="-mt-2 text-left">{persona.lastModified}</p>
                        </div>
                    </button>
                {/each}
            </div>
        </div>
    </div>
    <div class="w-full h-full rounded-2xl bg-white py-14 px-8 gap-10 flex flex-col">
        <div>
            <h1 class="font-semibold text-[26px]">Modify Persona</h1>
            <div class="flex flex-col gap-2">
                <p class="text-lg">System prompt for this persona</p>
                <textarea
                        value={tempPersonas.find(persona => persona.name === activePersona)?.prompt}
                        class="border-2 border-gray-400 rounded-md p-2 w-full h-40 resize-none"
                ></textarea>
            </div>
        </div>
        <div class="flex flex-wrap gap-10">
            <div class="flex flex-col gap-2 w-full">
                <div class="flex w-full gap-8">
                    <div class="w-full flex flex-col gap-3">
                        <p class="text-lg">Reference files</p>
                        <div class="h-20 w-full border-2 border-gray-400 rounded-3xl">

                        </div>
                    </div>
                    <div class="w-full flex flex-col gap-3">
                        <p class="text-lg">Reference files</p>
                        <div class="h-20 w-full border-2 border-gray-400 rounded-3xl">

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex mt-auto ml-auto gap-5">
            <button class="border-2 bg-[#87C591] rounded-xl py-1 px-14 text-white text-lg mt-auto">Save</button>
            <button class="border-2 border-gray-400 rounded-xl py-1 px-6 text-gray-600 text-lg">Cancel</button>
        </div>
    </div>
</div>