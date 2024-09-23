<script>
    const tempDrafts = [
        {
            name: 'Proposal for OceanWave Logistics',
            lastModified: '50m ago',
            prompt: 'I would like you to act as a bot that will suggest the outline for a proposal on...'
        },
        {
            name: 'Proposal for SkyTrack Logistics',
            lastModified: 'Yesterday',
            prompt: 'I would like you to act as a bot that will suggest the outline for a proposal on...'
        },
        {
            name: 'Proposal for RailRunner Express',
            lastModified: 'Aug 21',
            prompt: 'I would like you to act as a bot that will suggest the outline for a proposal on...'
        },
        {
            name: 'Proposal for AeroSwift Transport',
            lastModified: 'Aug 16',
            prompt: 'I would like you to act as a bot that will suggest the outline for a proposal on...'
        },
        {
            name: 'Proposal for HarborLink Shipping',
            lastModified: 'July 29',
            prompt: 'I would like you to act as a bot that will suggest the outline for a proposal on...'
        },
        {
            name: 'Proposal for TrackLine Transport',
            lastModified: 'July 13',
            prompt: 'I would like you to act as a bot that will suggest the outline for a proposal on...'
        },
    ]
</script>

<div class="w-full h-full flex gap-6 mx-[10%]">
    <div class="w-full h-full flex flex-col gap-10">
        <h1 class="font-semibold text-[36px]">All In-Progress Proposals</h1>
        <div class="overflow-x-auto">
            <table class="w-full">
                <thead>
                <tr class="text-lg font-semibold">
                    <th class="text-left pr-6 py-3">Proposal Name</th>
                    <th class="text-left px-6 py-3">Last Modified</th>
                    <th class="text-left pl-6 py-3">Prompt</th>
                </tr>
                </thead>
                <tbody>
                {#each tempDrafts as draft}
                    <tr class="font-[450] text-lg border-b border-gray-200 hover:bg-[#EBEBEB]">
                        <td class="flex items-center gap-5 pr-6 py-4">
                            <img src="/logo.png" alt="Persona logo" class="h-10 w-10 ml-2">
                            {draft.name}
                        </td>
                        <td class="px-6 py-4">{draft.lastModified}</td>
                        <td class="pl-6 py-4">{draft.prompt}</td>
                    </tr>
                {/each}
                </tbody>
            </table>
        </div>
    </div>
</div>
