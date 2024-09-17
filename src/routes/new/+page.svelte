<script>
    import { uploadedFiles } from '$lib/store/fileStore.js';

    let files;

    uploadedFiles.subscribe(value => {
        files = value;
    });

    function removeFile(fileName) {
        uploadedFiles.removeFile(fileName);
    }

    const fileTypeImages = {
        '.pdf': 'pdf.png',
        '.csv': 'csv.png',
        '.txt': 'txt.png',
        '.xlsx': 'xlsx.png',
        '.doc': 'docx.png',
        '.docx': 'docx.png',
        '.ppt': 'ppt.png',
        '.pptx': "pptx.png",
        '.eml': 'eml.png',
        default: 'unknown.png'
    };

    function getFileImage(fileName) {
        const extension = '.' + fileName.split('.').pop().toLowerCase();
        return fileTypeImages[extension] || fileTypeImages.default;
    }
</script>

<div class="pt-[80px] w-full h-full flex gap-6">
    <div class="w-[115px] h-full">

    </div>
    <div class="w-[40%] h-full rounded-2xl bg-blue-100">

    </div>
    <div class="w-full h-full rounded-2xl bg-white py-10 px-8 justify-between flex flex-col">
        <div class="flex flex-col gap-8">
            <h1 class="font-semibold text-[26px]">Your Request Files</h1>
            {#if files && files.length > 0}
                <ul class="flex items-center">
                    {#each files as file}
                        <li class="flex items-center pr-12 gap-4">
                            <img src='/fileTypes/{getFileImage(file.name)}' alt={file.type} class="w-fit h-16" />
                            <p class="text-2xl">{file.name}</p>
                            <!--                        <button on:click={() => removeFile(file.name)}>Remove</button>-->
                        </li>
                    {/each}
                    <div class="py-2 px-4 rounded-full border-2 border-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-6 h-6"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>

                    </div>
                </ul>
            {:else}
                <p>No files uploaded.</p>
            {/if}
        </div>
        <div>
            <h1 class="font-semibold text-[26px]">Company Information</h1>
        </div>
        <div>
            <h1 class="font-semibold text-[26px]">Persona</h1>
        </div>
        <div>
            <h1 class="font-semibold text-[26px]">Template</h1>
        </div>
    </div>
</div>