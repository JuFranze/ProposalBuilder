<script>
    const tempPersonas = [
        {
            name: 'Marine Insurance',
            lastModified: '50m ago',
            prompt: 'I would like you to act as a bot that will suggest the outline for a proposal on...'
        },
        {
            name: 'Freight Insurance',
            lastModified: 'Yesterday',
            prompt: 'I would like you to act as a bot that will suggest the outline for a proposal on...'
        },
        {
            name: 'Rail Insurance',
            lastModified: 'Aug 21',
            prompt: 'I would like you to act as a bot that will suggest the outline for a proposal on...'
        },
        {
            name: 'Air Cargo Insurance',
            lastModified: 'Aug 16',
            prompt: 'I would like you to act as a bot that will suggest the outline for a proposal on...'
        },
        {
            name: 'Cargo Insurance',
            lastModified: 'July 29',
            prompt: 'I would like you to act as a bot that will suggest the outline for a proposal on...'
        },
        {
            name: 'Liability Insurance',
            lastModified: 'July 13',
            prompt: 'I would like you to act as a bot that will suggest the outline for a proposal on...'
        },
    ]
</script>

<div class="w-full h-full pt-[10%] pb-[8%] px-[12%] flex flex-col gap-10">
    <h1 class="-mt-5 font-semibold text-[36px]">Manage Personas</h1>
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