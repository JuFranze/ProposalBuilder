<script>
    import {user} from "$lib/store/userStore.js";

    const newPersona = {
        name: '',
        lastModified: '',
        prompt: '',
        userId: $user.idTokenClaims.sub
    }

    async function createPersona() {
        newPersona.lastModified = Date.now()

        const response = await fetch('/service/personas', {
            method: 'POST',
            body: JSON.stringify(newPersona)
        })
alert(JSON.stringify(await response.json()))
        // await goto('/personas')
    }

</script>

<div class="w-full h-full flex gap-6 mx-[10%]">
    <div class="w-full h-full rounded-t-2xl bg-white py-14 px-8 gap-10 flex flex-col pane-shadow">
        <h1 class="font-semibold text-[26px]">Create Persona</h1>
        <div class="flex flex-col gap-2">
            <p class="text-lg">System prompt for this persona</p>
            <input class="border-2 border-gray-400 rounded-md px-4 py-3 text-lg  w-full h-fit flex items-start" type="text" bind:value={newPersona.name}>
        </div>
        <div class="flex flex-col gap-2">
            <p class="text-lg">System prompt for this persona</p>
            <textarea class="border-2 border-gray-400 rounded-md px-4 py-3 text-lg  w-full h-48 flex items-start" type="text" bind:value={newPersona.prompt}></textarea>
        </div>
        <div class="flex mt-auto ml-auto gap-5">
            <button class="border-2 bg-[#87C591] rounded-xl py-1 px-14 text-white text-lg mt-auto" on:click={createPersona}>Create</button>
            <a href="/personas" class="border-2 border-gray-400 rounded-xl py-1 px-6 text-gray-500 text-lg">Cancel</a>
        </div>
    </div>
</div>
