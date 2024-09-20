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
        '.xlsx': 'xlsx.svg',
        '.csv': 'xlsx.svg',
        '.txt': 'txt.svg',
        '.doc': 'doc.svg',
        '.docx': 'doc.svg',
        '.ppt': 'ppt.svg',
        '.pptx': "ppt.svg",
        '.pdf': 'pdf.svg',
        default: 'unknown.svg'
    };

    function getFileImage(fileName) {
        const extension = '.' + fileName.split('.').pop().toLowerCase();
        return fileTypeImages[extension] || fileTypeImages.default;
    }

    export let multiple = true;
    export let accept = ".pdf,.csv,.txt,.xlsx,.doc,.docx,.ppt,.pptx,.eml";

    let fileInput;
    let dragOver = false;

    function handleClick() {
        fileInput.click();
    }

    function handleFileChange(event) {
        const files = event.target.files;
        if (files && files.length > 0) {
            handleFiles(files);
        }
    }

    function handleDragOver(event) {
        event.preventDefault();
        dragOver = true;
    }

    function handleDragLeave() {
        dragOver = false;
    }

    function handleDrop(event) {
        event.preventDefault();
        dragOver = false;
        const files = event.dataTransfer?.files;
        if (files && files.length > 0) {
            handleFiles(files);
        }
    }

    function handleFiles(files) {
        // Convert FileList to Array and add to store
        const fileArray = Array.from(files);
        uploadedFiles.addFiles(fileArray);
    }
</script>

<div class="w-full h-full flex gap-6 mx-[10%]">
    <div class="w-full h-full rounded-2xl bg-white py-14 px-8 justify-between flex flex-col">
        <div class="flex flex-col">
            <h1 class="font-semibold text-[26px]">Your Request Files</h1>
            <ul class="flex items-center flex-wrap">
                {#if files && files.length > 0}
                    {#each files as file}
                        <li class="flex items-center pr-12 pt-4 gap-4">
                            <img src='/fileTypes/{getFileImage(file.name)}' alt={file.type} class="w-fit h-16" />
                            <p class="text-2xl">{file.name}</p>
                            <!--                        <button on:click={() => removeFile(file.name)}>Remove</button>-->
                        </li>
                    {/each}
                {/if}
                <div
                        class="py-2 px-4 rounded-full border-2 border-gray-400 mt-6 cursor-pointer"
                        class:bg-blue-100={dragOver}
                        on:click={handleClick}
                        on:dragover={handleDragOver}
                        on:dragleave={handleDragLeave}
                        on:drop={handleDrop}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-6 h-6"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>
                    <input
                            type="file"
                            class="hidden"
                            bind:this={fileInput}
                            on:change={handleFileChange}
                            {multiple}
                            {accept}
                    />
                </div>
            </ul>
        </div>
        <div>
            <h1 class="font-semibold text-[26px] mb-2">Company Information</h1>
            <div class="flex flex-wrap gap-10">
                <div class="flex flex-col gap-2">
                    <p class="text-lg">Upload Company Logo <span class="text-red-600">*</span></p>
                    <div class="flex items-center gap-2">
                        <input class="border-2 border-gray-400 rounded-md w-60 h-10 pl-2">
                        <button class="border-2 border-gray-400 rounded-md h-10 px-2">Browse</button>
                    </div>
                </div>
                <div class="flex flex-col gap-2">
                    <p class="text-lg">Company Website URL <span class="text-red-600">*</span></p>
                    <input class="border-2 border-gray-400 rounded-md w-60 h-10 pl-2">
                </div>
            </div>
        </div>
        <div>
            <h1 class="font-semibold text-[26px] mb-2">Persona</h1>
            <div class="flex flex-wrap gap-10">
                <div class="flex flex-col gap-2">
                    <p class="text-lg">Persona</p>
                    <select class="border-2 border-gray-400 rounded-md w-60 h-10 pl-2">
                        <option>Test</option>
                    </select>
                </div>
            </div>
        </div>
        <div>
            <h1 class="font-semibold text-[26px] mb-2">Template</h1>
            <div class="flex flex-wrap gap-10">
                <div class="flex flex-col gap-2">
                    <p class="text-lg">Choose RFP Template</p>
                    <select class="border-2 border-gray-400 rounded-md w-60 h-10 pl-2">
                        <option>Test</option>
                    </select>
                </div>
            </div>
        </div>
        <button class="ml-auto border-2 border-green-500 rounded-full py-1 px-6 text-green-600 text-lg">Begin Assessment</button>
    </div>
</div>
