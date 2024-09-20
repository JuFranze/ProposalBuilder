<script>

    import {tempPersonas} from "$lib/personas.js";
</script>

<div class="w-full h-full flex gap-6 mx-[10%]">
    <div class="w-full h-full rounded-2xl flex flex-col gap-10">
        <h1 class="font-semibold text-[36px]">Manage Personas</h1>
        <div class="overflow-x-auto">
            <table class="w-full">
                <thead>
                <tr class="text-lg font-semibold">
                    <th class="text-left pr-6 py-3">Persona Name</th>
                    <th class="text-left px-6 py-3">Last Modified</th>
                    <th class="text-left pl-6 py-3">Prompt</th>
                </tr>
                </thead>
                <tbody>
                {#each tempPersonas as persona}
                    <tr class="font-[450] text-lg border-b border-gray-200 hover:bg-[#EBEBEB]">
                        <td class="flex items-center gap-5 pr-6 py-4">
                            <img src="/logo.png" alt="Persona logo" class="h-10 w-10 ml-2">
                            {persona.name}
                        </td>
                        <td class="px-6 py-4">{persona.lastModified}</td>
                        <td class="pl-6 py-4">{persona.prompt}</td>
                    </tr>
                {/each}
                </tbody>
            </table>
        </div>
    </div>
</div>
